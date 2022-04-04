/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react';
import { capitalize } from '../helpers/capitalize';

// Styles 
const detailCardStyle = css`
margin-top: 4rem;
margin-bottom: 6rem;
height: 38rem;
width: 22rem;
background-color: #F5E067;
box-shadow: 4px 3px 12px 1px rgba(0,0,0,0.8);
border-radius: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

// Tablet
@media (min-width: 768px) {
  width: 30rem;
}
// Desktop
@media (min-width: 992px) {
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

const pokemonSpritesStyle = css`
margin-top: 1rem;
height: 12rem;
width: 18rem;
border: 1px solid black;
border-radius: 1rem;
background-image: url("https://wallpaperaccess.com/full/1794017.png");
background-position: bottom;
background-size: 30rem;
display: flex;
justify-content: center;
align-items: center;

// Desktop
@media (min-width: 992px) {
    background-size: 40rem;
    height: 15rem;
    width: 35rem;
`

const pokeSpriteRegularStyle = css`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 3rem;

// Desktop
@media (min-width: 992px) {
margin-top: 2rem;
`
const weightHeightStyle = css`
margin-bottom: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
`
const spanStyle = css`
margin-right: 1rem;
`

const boxMoveStyle = css`
height: 11rem;
width: 18rem;
margin-bottom: 3rem;
background-color: white;
border-radius: 1rem;
box-shadow: 5px 5px 5px #0119F5;
display: flex;
flex-direction: column;
align-items: center;

// Desktop
@media (min-width: 992px) {
    width: 35rem;
    padding-bottom: 1rem;
`

const moveSpanStyle = css`
margin-bottom: 0.2rem;
`

const pokeballIconStyle = css`
margin-left: 0.5rem;
height: 1.9rem;
width: 1.9rem;
`

const pokeNameStyle = css`
display: flex;
align-items: center;
`

export default function DetailCard({ name, image, id, type, weight, height, move1, move2, move3, move4 }) {
    return (
        <div css={detailCardStyle}>
            <div css={pokeNameStyle}>
                <h2>#{id} {capitalize(name)}</h2>
                <div>
                    <img css={pokeballIconStyle}
                        src='https://icon-library.com/images/small-pokeball-icon/small-pokeball-icon-11.jpg'
                        alt="Pokeball Icon" />
                </div>
            </div>

            <div css={pokemonSpritesStyle}>
                <div css={pokeSpriteRegularStyle}>
                    <div>
                        <img
                            src={image}
                            alt="Poke Info" />
                    </div>
                </div>
            </div>
            <h3>Type: {capitalize(type)}</h3>

            <div css={weightHeightStyle}>
                <span css={spanStyle}>Height: {height}</span>
                <span css={spanStyle}>Weight: {weight} kg</span>
            </div>

            <div css={boxMoveStyle}>
                <h3>Moveset</h3>
                <span css={moveSpanStyle}>{capitalize(move1)}</span>
                <span css={moveSpanStyle}>{capitalize(move2)}</span>
                <span css={moveSpanStyle}>{capitalize(move3)}</span>
                <span css={moveSpanStyle}>{capitalize(move4)}</span>
            </div>
        </div >
    )
}
