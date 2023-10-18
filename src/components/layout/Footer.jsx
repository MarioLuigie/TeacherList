/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { footer } from "../../constans/dimensions";
import colors from "../../constans/colors";

const styles = css`
  width: ${footer.width}%;
  height: ${footer.height}px;
  border-top: ${colors.sepLineColor} solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  .sign {
    background: linear-gradient(to right, ${colors.gradColor.first}, ${colors.gradColor.sec});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.8rem;
  }
`

export default function Footer({ sign }) {

  return (
    <div css={styles}>
      <p className='sign'>{sign}</p>
    </div>
  )
}

Footer.propTypes = {
  sign: PropTypes.string.isRequired
}

