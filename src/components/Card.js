/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { css, jsx } from '@emotion/react';

// Styles
const cardStyle = css`
height: 15rem;
width: 11rem;
box-shadow: 1px 2px 9px 0px #FA5546;
background-color: #FAD6DE;
`

export default function Card() {
  return (
    <div css={cardStyle}>Card</div>
  )
}
