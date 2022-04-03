import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function PokeDetail() {
  const [pokeDetail, setPokeDetail] = useState();
  const params = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`).then(res => setPokeDetail(res.data));
  }, [])

  if(!pokeDetail) {
    return <h1>Cargando...</h1>
  }

  return (
    <img
      src={pokeDetail.sprites.back_default}
      alt="Poke Info" />
  )
}
