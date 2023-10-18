/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const TeacherContext = createContext();

export const useTeacherContext = () => useContext(TeacherContext);

export default function TeacherProvider({ children }) {
  const providerValues = {

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