const url = "https://places-arw.vercel.app/api/people";

//Send new teacher on server and get back him
export const createTeacher = async (newTeacher) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeacher)
  })
  return res;
}

//Read datas from server
export const readTeachers = async () => {
  const res = await fetch(url);
  return res;
}

//Update selected teacher
export const updateSelectedTeacher = async (id, form) => {
  const res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form)
  });
  return res;
}

//Delete selected teacher
export const deleteSelectedTeacher = async (id) => {
  const res = await fetch(`${url}/${id}`, {method: "DELETE"});
  return res;
}

//Delete all teachers
export const deleteAllTeachers = async () => {
  const res = fetch(url, {method: "DELETE"});
  return res;
}