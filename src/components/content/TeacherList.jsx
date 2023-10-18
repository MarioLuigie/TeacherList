/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import TeacherItem from "./TeacherItem";
import * as actions from "../../actions/teacherActions";
import { useTeacherContext } from '../../context/teacherContext';

const styles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 30px;

  li {
    width: 100%;
    max-width: 500px;
  }
`

export default function TeacherList() {
  const { 
    teacherList, 
    teacherListDispatch, 
    setEditedTeacher 
  } = useTeacherContext();

  const handleDeleteSelectedTeacher = (id) => async () => {
    await actions.deleteSelectedTeacher(id, teacherListDispatch);
  }

  const handleEditSelectedTeacher = (teacher) => () => {
    setTimeout(() => {
      setEditedTeacher(teacher);
    }, 700);

    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });

    console.log("edit");
  }

  return (
    <ul css={styles}>
      {
        teacherList.map(teacher => (
          <li key={teacher._id}>
            <TeacherItem 
              teacher={teacher} 
              onDeleteSelected={handleDeleteSelectedTeacher} 
              onEditSelected={handleEditSelectedTeacher} 
            />
          </li>
        ))
      }
    </ul>
  )
}