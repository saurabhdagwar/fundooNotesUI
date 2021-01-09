import Axios from "./axiosServices.js";
const http = new Axios();
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api";

export default class noteServices {
  addNote = (data, token) => {
    const user = localStorage.getItem("fundooToken");
    return http.Post(`${baseUrl}/notes/addNotes`, data, {
      headers: {
        Authorization: `${user}`,
      },
    });
  };

  getNotes = () => {
    const user = localStorage.getItem("fundooToken");
    return http.Get(`${baseUrl}/notes/getNotesList`, {
      headers: {
        Authorization: `${user}`,
      },
    });
  };

  updateNotes = (data) => {
    const user = localStorage.getItem("fundooToken");
    // console.log(data);
    return http.Post(`${baseUrl}/notes/updateNotes`, data, {
        headers: {
          Authorization: `${user}`,
        },
      });
  };

  deleteNotes = (data, fk) => {
    const user = localStorage.getItem("fundooToken");
    console.log(data);
    return http.Post(`${baseUrl}/notes/trashNotes`, data, {
      headers: {
        Authorization: `${user}`,
      },
    });
  };
}
