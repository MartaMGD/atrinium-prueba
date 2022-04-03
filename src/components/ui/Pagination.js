/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react';

// Styles
const paginationStyle = css`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #415FF5;
`

const paginationButtonStyle = css`
margin: 0.5rem;
height: 2rem;
width: 7.5rem;
background-color: #F0C61E;
font-weight: bold;
border-radius: 0.5rem;
border: 2px solid #0119F5;
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