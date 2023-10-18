/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import colors from "../constans/colors";

const styles = (value) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  input {
    width: 70%;
    min-width: 180px;
    max-width: 360px;
    font-size: 1.2rem;
    padding: 9px 18px;
    border-radius: 30px;
    background-color: #dddddd;
    box-shadow: ${value ? "inset #00000099 0 0 12px" : "#00000053 0 0 15px"};

    &::placeholder {
      color: #aaaaaa;
    }

    &:focus::placeholder {
      visibility: hidden;
    }

    &:focus {
      box-shadow: inset #00000099 0 0 12px;
      outline: #f3ac4f solid 2px;
    }
  }

  label {
    font-size: 1.1rem;
    color: ${colors.mainFontColor};
    min-width: 80px;
  }
`

export default function Input({
  value,
  id,
  name,
  type,
  label,
  placeholder,
  onHandle
}) {

  return (
    <div css={styles(value)}>
      <label htmlFor={id}>{label}</label>
      <input 
        value={value}
        id={id} 
        name={name}
        type={type} 
        placeholder={placeholder}
        onChange={onHandle}
      />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onHandle: PropTypes.func
}