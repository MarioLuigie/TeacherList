/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";

import { teacherListActions } from "../constans/reducerActions";

export const TeacherContext = createContext();

export const useTeacherContext = () => useContext(TeacherContext);

export default function TeacherProvider({ children }) {
  const initTeacherList = []
  const [editedTeacher, setEditedTeacher] = useState(null);

  const {
    CREATE_TEACHER,
    READ_TEACHERS,
    UPDATE_TEACHER,
    DELETE_TEACHER,
    DELETE_ALL
  } = teacherListActions;

  const teacherReducer = (teacherList, action) => {

    switch (action.type) {
      case CREATE_TEACHER:
        return [...teacherList, action.data];
      case READ_TEACHERS:
        return action.data;
      case UPDATE_TEACHER:
        return teacherList.map(teacher => (
          teacher._id === action.data._id 
            ? {...teacher, ...action.data}
            : teacher
        ));
      case DELETE_TEACHER:
        return teacherList.filter(teacher => teacher._id !== action.id);
      case DELETE_ALL:
        return [];
    }
  }

  const [
    teacherList, 
    teacherListDispatch
  ] = useReducer(teacherReducer, initTeacherList);

  const providerValues = {
    teacherList,
    teacherListDispatch,
    editedTeacher, 
    setEditedTeacher,
  }

  return (
    <TeacherContext.Provider value={providerValues}>
      {children}
    </TeacherContext.Provider>
  )
}

TeacherProvider.propTypes = {
  children: PropTypes.node.isRequired
}