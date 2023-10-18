/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from "react";

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import colors from "../../constans/colors";
import { useTeacherContext } from '../../context/teacherContext';
import * as actions from "../../actions/teacherActions";

const styles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 25px;
  border-bottom: ${colors.sepLineColor} solid 1px;

  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 0 20px 0;
  }

`

export default function TeacherInputs() {
  const { teacherListDispatch, editedTeacher, setEditedTeacher } = useTeacherContext();

  const initForm = {
    name: "",
    surname: "",
    age: ""
  }

  const [form, setForm] = useState(initForm);

  useEffect(() => {
    if(editedTeacher) {
      const { name, surname, age, _id } = editedTeacher;
      setForm({ name, surname, age, _id });
    }
  }, [editedTeacher]);

  //Listener on input value
  const handleOnChange = (evt) => {
    setForm(prevForm => ({
      ...prevForm,
      [evt.target.name]: evt.target.value
    }));
    console.log(form);
  }

  //Cancel all inputs value
  const handleCancelForm = (evt) => {
    evt.preventDefault();
    setForm(initForm);
    setEditedTeacher(null);
    console.log("Form canceled");
  }

  //Add person to teacher list
  const handleAddTeacher = async (evt) => {
    evt.preventDefault();
    const { name, surname, age } = form;
    const newTeacher = {name, surname, age};

    await actions.createTeacher(newTeacher, teacherListDispatch);
    setForm(initForm);

    console.log("Teacher added");
    console.log(form);
  }

  const handleUpdateSelectedTeacher = async (evt) => {
    evt.preventDefault();

    await actions.updateSelectedTeacher(form, editedTeacher, teacherListDispatch);

    setForm(initForm);
    setEditedTeacher(null);
    console.log("update");
  }

  return (
    <form css={styles} onSubmit={handleAddTeacher}>
      <Input 
        value={form.name}
        id="nameInput" 
        name="name"
        label="Name" 
        type="text"
        placeholder="Enter your name"
        onHandle={handleOnChange}
      />
      <Input 
        value={form.surname}
        id="surnameInput" 
        name="surname"
        label="Surname" 
        type="text"
        placeholder="Enter your surname"
        onHandle={handleOnChange}
      />
      <Input 
        value={String(form.age)}
        id="ageInput" 
        name="age"
        label="Age" 
        type="number"
        placeholder="Enter your age"
        onHandle={handleOnChange}
      />
      <div className='buttons'>
        <Button type="reset" label="Cancel" onHandle={handleCancelForm} />
        {editedTeacher 
        ? (<Button label="Update" type="button" onHandle={handleUpdateSelectedTeacher} />
          ) : (
          <Button label="Add" />)}
      </div>
    </form>
  )
}