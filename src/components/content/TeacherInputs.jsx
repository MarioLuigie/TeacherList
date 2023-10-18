/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import colors from "../../constans/colors";

const styles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 25px;
  /* background-color: red; */
  border-bottom: ${colors.sepLineColor} solid 1px;

  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
  }

`

export default function TeacherInputs() {

  const handleCancelForm = (evt) => {
    evt.preventDefault();
    console.log("Form canceled");
  }

  const handleAdd = () => {

  }

  return (
    <form css={styles} onSubmit={handleAdd}>
      <Input 
        id="nameInput" 
        label="Name" 
        type="text"
        placeholder="Enter your name"
      />
      <Input 
        id="surnameInput" 
        label="Surname" 
        type="text"
        placeholder="Enter your surname"
      />
      <Input 
        id="ageInput" 
        label="Age" 
        type="number"
        placeholder="Enter your age"
      />
      <div className='buttons'>
        <Button type="reset" label="Cancel" onHandle={handleCancelForm} />
        <Button label="Add" />
      </div>
    </form>
  )
}