/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import * as actions from "../../actions/teacherActions";
import { useTeacherContext } from '../../context/teacherContext';
import { container } from "../../constans/dimensions";
import colors from "../../constans/colors";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import TeacherCard from "../content/TeacherCard";

const styles = css`
  width: ${container.width}%;
  max-width: ${container.maxWidth}px;
  min-width: ${container.minWidth}px;
  min-height: ${container.minHeight}vh;
  background-color: ${colors.panelColor};
  box-shadow: ${colors.panelShadow} 0 0 20px;
`

export default function Container() {
  const {  
    teacherListDispatch, 
  } = useTeacherContext();

  useEffect(() => {
    actions.readTeachers(teacherListDispatch);
  }, []);

  return (
    <div css={styles}>
      <Header title="Teacher List" />
      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route path={"/user/:id"} element={<TeacherCard />} />
      </Routes>
      <Footer sign="ARWcode 2023" />
    </div>
  )
}