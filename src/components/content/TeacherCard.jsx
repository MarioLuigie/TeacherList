/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useTeacherContext } from '../../context/teacherContext';

import { header, footer } from "../../constans/dimensions";

const styles = css`
  width: 100%;
  min-height: calc(100vh - ${header.height + footer.height}px);
`

export default function TeacherCard() {
  const params = useParams();
  const { teacherList } = useTeacherContext();

  const currentTeacher = teacherList.find(teacher => teacher._id === params.id);

  console.log(currentTeacher?.name);
  console.log(params);
  console.log(teacherList);

  return (
    <div css={styles}>
      <p>Name {currentTeacher?.name}</p>
      <p>Surname {currentTeacher?.surname}</p>
      <p>Age {currentTeacher?.age}</p>
      <p>Id {currentTeacher?._id}</p>
    </div>
  )
}