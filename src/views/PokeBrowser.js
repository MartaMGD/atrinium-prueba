/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import { useState } from 'react';
import { css, jsx } from '@emotion/react';
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/ui/Pagination";
import { useQuery } from "react-query";

// Styles
const pageBrowserStyles = css`
display: flex;
align-items: center;
height: 15rem;
display: flex;
justify-content: center;
background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26887395-78f4-441d-a6e0-cc877fa24b54/deejrt3-3c33eed3-d378-4f78-b8c6-fc6fa60575d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2ODg3Mzk1LTc4ZjQtNDQxZC1hNmUwLWNjODc3ZmEyNGI1NFwvZGVlanJ0My0zYzMzZWVkMy1kMzc4LTRmNzgtYjhjNi1mYzZmYTYwNTc1ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GLyG-NJ33bIHSVsd14MaodgIjhnEw-OvpmRtiyucEG0");
background-position: center cover;
background-size: 35rem;
box-shadow: 2px 11px 19px -11px rgba(0,0,0,0.65);

// Tablet
@media (min-width: 768px) {
  margin-left: 5rem;
  margin-right: 5rem;
}
// Desktop
@media (min-width: 992px) {
  margin-left: 12rem;
  margin-right: 12rem;
}
`

const searchInputStyle = css`
width: 16.5rem;
height: 2.5rem;
padding-left:1rem;
border: 1px solid #83A1DF;
border-radius: 1.5rem;
outline: none;

// Tablet
@media (min-width: 768px) {
  width: 35rem;
}
// Desktop
@media (min-width: 992px) {
  width: 45rem;
}
`

const showPokeStyle = css`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: #C7D3FA;
padding-top: 2rem;
box-shadow: 2px 11px 19px -11px rgba(0,0,0,0.65);

// Tablet
@media (min-width: 768px) {
  margin-left: 5rem;
  margin-right: 5rem;
}
// Desktop
@media (min-width: 992px) {
  margin-left: 12rem;
  margin-right: 12rem;
`

const loadingCardStyle = css`
margin: 4.5rem;
margin-bottom: 16rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 20rem;
width: 20rem;

// Tablet
@media (min-width: 768px) {
  margin: 16rem;
  margin-bottom: 13rem;
}
// Desktop
@media (min-width: 992px) {
  margin-left: 50rem;
  margin-bottom: 13rem;
`

const loadingStyle = css`
height: 10rem;
width: 10rem;
`

export default function PokeBrowser() {

  // State and Fetch to call API and set Pokémon info. 
  // Pokemon Filter with state.
  const [filterPoke, setfilterPoke] = useState('');
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=15');

  const { isLoading, isError, data, isPreviousData } = useQuery(['pokemon', currentUrl],
    () => axios.get(currentUrl).then(res => res.data, { keepPreviousData: true }))

  function navigateNextPage() {
    if (!isPreviousData && data.next) {
      setCurrentUrl(data.next)
      window.scroll(0, 0)
    }
  }
  function navigatePrevPage() {
    if (data.previous) {
      setCurrentUrl(data.previous)
      window.scroll(0, 0)
    }
  }

  // Error catching
  if (isLoading) {
    return <div css={loadingCardStyle}>
      <img css={loadingStyle}
        src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs'
        alt="Pokeball Loading" />
        <h3>Loading...</h3>
    </div>
  }
  if (isError) {
    return <h1>Ha ocurrido un error.</h1>
  }

  return (
    <>
      <div css={pageBrowserStyles}>
        <form>
          <input
            type="text"
            placeholder="Find a Pokémon!"
            css={searchInputStyle}
            autoComplete="off"
            onChange={event => { setfilterPoke(event.target.value) }} />
        </form>
      </div>

      <div css={showPokeStyle}>
        {data.results.filter((p) => {
          if (filterPoke === "") {
            return p
          } else if (p.name.toLowerCase().includes(filterPoke.toLowerCase().trim())) {
            return p
          } return null;
        }).map(p => {
          const id = p.url.match(/\/(\d+)\//)[1];
          return <Card
            key={id}
            id={id}
            name={p.name} />
        })}
        <Pagination
          navigateNextPage={data.next ? navigateNextPage : null}
          navigatePrevPage={data.previous ? navigatePrevPage : null}
        />
      </div>
    </>
  )
}
