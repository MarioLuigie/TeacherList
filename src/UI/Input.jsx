/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import colors from "../constans/colors";

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  /* background-color: yellow; */

  input {
    width: 70%;
    min-width: 180px;
    max-width: 360px;
    font-size: 1.2rem;
    padding: 7px 14px;
    border-radius: 30px;

    &::placeholder {
      color: #bebebe;
    }

    &:focus::placeholder {
      visibility: hidden;
    }
  }

  label {
    font-size: 1.1rem;
    color: ${colors.mainFontColor};
    min-width: 80px;
  }
`

export default function Input({
  id,
  type,
  label,
  placeholder
}) {

  return (
    <div css={styles}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder}/>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
}