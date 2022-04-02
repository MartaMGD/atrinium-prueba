/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/ui/Pagination";

// Styles
const pageBrowserStyles = css`
margin-bottom: 1rem;
display: flex;
align-items: center;
height: 15rem;
display: flex;
justify-content: center;
background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26887395-78f4-441d-a6e0-cc877fa24b54/deejrt3-3c33eed3-d378-4f78-b8c6-fc6fa60575d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2ODg3Mzk1LTc4ZjQtNDQxZC1hNmUwLWNjODc3ZmEyNGI1NFwvZGVlanJ0My0zYzMzZWVkMy1kMzc4LTRmNzgtYjhjNi1mYzZmYTYwNTc1ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GLyG-NJ33bIHSVsd14MaodgIjhnEw-OvpmRtiyucEG0");
background-position: center cover;
background-size: 35rem;
`

const searchInputStyle = css`
width: 16.5rem;
height: 2.5rem;
padding-left:1rem;
border: 1px solid #83A1DF;
border-radius: 1rem;
outline: none;
`

const showPokeStyle = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default function PokeBrowser() {

  // State and Fetch to call API and set Pokémon info. 
  const [filterPoke, setfilterPoke] = useState('');
  const [pokeData, setPokeData] = useState([''])
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=15');
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')

  useEffect(() => {
    axios.get(currentUrl).then(res => {
      setPokeData(res.data.results)
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous)
    }).catch(err => console.log(err))
  }, [currentUrl])

  function gotoNextPage() {
    setCurrentUrl(nextUrl)
  }
  function gotoPrevPage() {
    setCurrentUrl(prevUrl)
  }

  return (
    <>
      <div css={pageBrowserStyles}>
        <form>
          <input
            type="text"
            placeholder="Busca un Pokémon"
            css={searchInputStyle}
            autoComplete="off"
            onChange={event => { setfilterPoke(event.target.value) }} />
        </form>
      </div>

      <div css={showPokeStyle}>
        {pokeData.filter((p) => {
          if (filterPoke === "") {
            return p
          } else if (p.name.toLowerCase().includes(filterPoke.toLowerCase().trim())) {
            return p
          }
        }).map((p, index) => (
          <Card
            key={index}
            name={p.name} />
        ))}
        <Pagination
          gotoNextPage={nextUrl ? gotoNextPage : null}
          gotoPrevPage={prevUrl ? gotoPrevPage : null}
        />
      </div>
    </>
  )
}
