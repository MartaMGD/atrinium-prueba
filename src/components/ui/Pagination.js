/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react';

// Styles
const paginationStyle = css`
width: 100%;
height: 4rem;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
background-color: #415FF5;
`

const paginationButtonStyle = css`
margin: 0.5rem;
height: 2.5rem;
width: 7.5rem;
background-color: #F0C61E;
font-weight: bold;
border-radius: 1.5rem;
border: none;
cursor: pointer;
&:hover {
    background-color: #FFE11F;
}
`

export default function Pagination({ navigateNextPage, navigatePrevPage }) {
    return (
        <div css={paginationStyle}>
            {navigatePrevPage && <button
                css={paginationButtonStyle}
                onClick={navigatePrevPage}>Anterior</button>}

            {navigateNextPage && <button
                css={paginationButtonStyle}
                onClick={navigateNextPage}>Siguiente</button>}
        </div>
    )
}