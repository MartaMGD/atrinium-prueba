/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react';
import React from 'react';

// Styles
const footerStyle = css`
margin-top: 0;
bottom: 0px;
background-color: black;
color: white;
font-size: 0.8rem;
height: 6rem;
width: 100%;
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0 1rem;
`

const footerSeparatorStyle = css`
font-weight: bold;
margin: 2rem;
`

const footerGithubStyle = css`
margin-bottom: 0.5rem;
`

const footerLinkStyle = css`
text-decoration: none;
color: white;
font-weight: bold;
`


export default function Footer() {
    return (
        <>
            <div css={footerStyle}>
                <div css="copyright">
                    <h4>PokéApp - Marta González Duque ® </h4>
                </div>

                <div css={footerSeparatorStyle}>
                     |
                </div>

                <div>
                    <div css={footerGithubStyle}>
                        <a css={footerLinkStyle}
                            href="https://github.com/martamgd">
                            <i className="fa-brands fa-github"></i> GitHub
                        </a>
                    </div>

                    <div>
                        <a css={footerLinkStyle}
                            href="https://es.linkedin.com/in/martagd96">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
