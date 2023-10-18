import * as services from "../services/teacherServices";
import { teacherListActions } from "../constans/reducerActions";

//Create new teacher 
export const createTeacher = async (newTeacher, dispatch) => {
  try {
    const res = await services.createTeacher(newTeacher);

    if(!res.ok) {
      throw new Error("Problem with create new Teacher.");
    }

    const data = await res.json();

    dispatch({type: teacherListActions.CREATE_TEACHER, data})

  } catch (error) {
    console.rerror("Problem with create new Teacher.", error);
  }
} 

//Read teachers from server
export const readTeachers = async (dispatch) => {
  try {
    const res = await services.readTeachers();

    if(!res.ok) {
      throw new Error("Error with red datas from server.");
    }

    const data = await res.json();

    dispatch({type: teacherListActions.READ_TEACHERS, data});

  } catch (error) {
    console.error("Network response was not ok.", error);
  }
}

//Update selected teacher 
export const updateSelectedTeacher = async (form, editedTeacher, dispatch) => {
  try {
    const res = await services.updateSelectedTeacher(editedTeacher._id, form);

    if(!res.ok) {
      throw new Error("Problems with updating.");
    }

    const data = await res.json();
    console.log(data);
    dispatch({type: teacherListActions.UPDATE_TEACHER, data});
    
  } catch (error) {
    console.error("Problems with updating selected teacher.", error);
  }
}

//Delete selected teacher 
export const deleteSelectedTeacher = async (id, dispatch) => {
  try {
    const res = await services.deleteSelectedTeacher(id);

    if(!res.ok) {
      throw new Error("Problem with network")
    }

    const data = await res.json();

    console.log(data);

    dispatch({type: teacherListActions.DELETE_TEACHER, id})
    
  } catch (error) {
    console.error("Problem with delete selected teacher.", error);
  }
}

//Delete all teachers
export const deleteAllTeachers = async (dispatch) => {
  try {
    const res = await services.deleteAllTeachers();

    if(!res.ok) {
      throw new Error("Problem with delete all teachers.");
    }

    dispatch({type: teacherListActions.DELETE_ALL});
    
  } catch (error) {
    console.error("Problem with network", error);
  }
}