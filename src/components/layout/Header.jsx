/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import colors from "../../constans/colors";
import { header } from "../../constans/dimensions";

const styles = css`
  width: ${header.width}%;
  height: ${header.height}px;
  background-color: ${colors.panelColor};
  border-bottom: ${colors.sepLineColor} 1px solid;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    background: linear-gradient(to right, ${colors.gradColor.first}, ${colors.gradColor.sec});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.8rem;
    display: flex;
    gap: 12px;
    letter-spacing: 1px;

    span {
      font-size: 1.5rem;
      font-weight: 100;
    }

    @media screen and (min-width: 650px) {
      font-size: 4rem;

      span {
      font-size: 2rem;
    }
    }

  }
`

export default function Header({
  title
}) {

  return (
    <div css={styles}>
      <h1 className='title'>{title} <span>&reg;</span></h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}