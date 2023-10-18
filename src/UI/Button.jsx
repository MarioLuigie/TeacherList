/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import colors from "../constans/colors";

const styles = css`

button {
  padding: 9px 0;
  min-width: 120px;
  font-size: 1.2rem;
  border-radius: 30px;
  background: linear-gradient(to right, ${colors.gradColor.first}, ${colors.gradColor.sec});
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
}

`

export default function Button({
  label,
  onHandle
}) {

  return (
    <div css={styles}>
      <button onClick={onHandle}>{label}</button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onHandle: PropTypes.func
}