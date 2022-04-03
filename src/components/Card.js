/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { capitalize } from '../helpers/capitalize';

// Styles
const cardStyle = css`
display: flex;
flex-direction: column;
justify-content: center;
margin: 2rem;
height: 15.8rem;
width: 16rem;
border-radius: 1rem;
border: 3px solid black;
box-shadow: 4px 3px 12px 1px rgba(0,0,0,0.8);
background-color: #FA5546;
`
const pokeSpriteStyle = css`
display: flex;
align-items: center;
margin: 0.5rem;
height: 6.5rem;
width: 2rem;
background-color: #FA5546;
`
const pokeInfoStyle = css`
display: flex;
justify-content: center;
align-items: center;
height: 8rem;
border-top: 8px solid black;
border-bottom-left-radius: 1rem;
border-bottom-right-radius: 1rem;
background-color: white;
position: relative;
`
const pokeballStyle = css`
display: flex;
justify-content: center;
align-items: center;
height: 3.5rem;
width: 3.5rem;
margin-left: 5.8rem;
border-radius: 3rem;
border: 4px solid black;
background-color: white;
position:absolute; 
z-index:8;
`
const innerCircleStyle = css`
height: 2rem;
width: 2rem;
border-radius: 1rem;
border: 2px solid grey;
background-color: white;
&:hover {
  background-color: #FF998C;
}
cursor: pointer;
`

export default function Card({name, id}) {

  return (
    <div css={cardStyle}>
      <div css={pokeSpriteStyle}>
      </div>
      <div css={pokeballStyle}>
        <Link
        to={`/pokemon/${id}`}>
        <div css={innerCircleStyle}>
        </div>
        </Link>
      </div>
      <div css={pokeInfoStyle}>
        <h2>#{id} {capitalize(name)}</h2>
      </div>
    </div>
  )
}
