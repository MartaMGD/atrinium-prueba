/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router';
import DetailCard from '../components/DetailCard';

// Styles 
const pokeDetailStyle = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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

export default function PokeDetail() {
  const [pokeDetail, setPokeDetail] = useState();
  const params = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`).then(res => setPokeDetail(res.data));
  }, [])

  if (!pokeDetail) {
    return <h1>Cargando...</h1>
  }

  return (
    <div css={showPokeStyle}>
      <div css={pokeDetailStyle}>
        <DetailCard
          name={pokeDetail.name}
          image={pokeDetail.sprites.front_default}
          id={pokeDetail.id}
          type={pokeDetail.types[0].type.name}
          weight={pokeDetail.weight}
          height={pokeDetail.height}
          move1={pokeDetail.moves[0].move.name}
          move2={pokeDetail.moves[1].move.name}
          move3={pokeDetail.moves[2].move.name}
          move4={pokeDetail.moves[3].move.name}
        />
      </div>
    </div>
  )
}
