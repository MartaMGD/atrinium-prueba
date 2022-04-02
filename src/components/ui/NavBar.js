/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';

// Styles
const navBarStyles = css`
background-color: #415FF5;
text-decoration: none;
font-size: 1.9rem;
font-weight: bold;
color: yellow;
text-shadow: 3px 1px 3px #0119F5;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
`

export default function NavBar() {
    return (
        <div>
            <Link css={navBarStyles}
                to="/">
                PokéApp
            </Link>
        </div>
    )
}
