/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import axios from "axios";
import { css, jsx } from '@emotion/react';

// Styles
const pageBrowserStyles = css`
display: flex;
align-items: center;
height: 15rem;
background-color: red;
display: flex;
justify-content: center;
background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26887395-78f4-441d-a6e0-cc877fa24b54/deejrt3-3c33eed3-d378-4f78-b8c6-fc6fa60575d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2ODg3Mzk1LTc4ZjQtNDQxZC1hNmUwLWNjODc3ZmEyNGI1NFwvZGVlanJ0My0zYzMzZWVkMy1kMzc4LTRmNzgtYjhjNi1mYzZmYTYwNTc1ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GLyG-NJ33bIHSVsd14MaodgIjhnEw-OvpmRtiyucEG0");
background-position: center cover;
background-size: 35rem;
`

const searchInputStyle = css`
width: 50vh;
height: 2rem;
padding-left:1rem;
border: 1px solid #83A1DF;
border-radius: 0.5rem;
outline: none;
`

export default function PokeBrowser() {
  return (
    <>
      <div css={pageBrowserStyles}>
        <form>
          <input
            type="text"
            placeholder="Busca un Pokémon"
            css={searchInputStyle}
            autoComplete="off" />
        </form>
      </div>
    </>
  )
}
