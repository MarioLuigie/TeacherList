/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`

  button {
    padding: 10px 0;
    min-width: 115px;
    font-size: 1.1rem;
    border-radius: 30px;
    background-color: #3f3f3f;
    cursor: pointer;
    box-shadow: #0000007f 0 0 20px;
    color: #ebebeb;

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