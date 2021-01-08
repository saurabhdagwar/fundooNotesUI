import React from "react";
import InputBase from "@material-ui/core/InputBase";
import NoteOptions from "../noteOptions/noteOptions.jsx";
import Services from "../../Services/noteServices";
import AddNotes from "../addNotes/addNotes"
import "./displayNotes.css";
const service = new Services();

let noteData ;

export default function DisplayNotes() {
  const [option, setOption] = React.useState(false);
  const [show, setShow] = React.useState([]);

    const setDisplayNote = () => {
        service.getNotes()
        .then((data) => {
            noteData = data.data.data.data;
            setShow(noteData);
            console.log("data = "+JSON.stringify(data.data.data.data));
        })
        .catch((err) => {
            console.log("error = "+err);
        })
    }

  const openOption = () => {
    setOption(true);
  };
  const closeOption = () => {
    setOption(false);
  };

  const Note = () => {
    return (
      <div className="AllNotes">
        {show.map((data) => (
          <div
            className="noteBlock"
            style={{ backgroundColor: data.color }}
            onMouseOver={openOption}
            onMouseLeave={closeOption}
          >
            <InputBase placeholder="Title" value={data.title} />
            <InputBase placeholder="Take a Note..." value={data.description} />
            {option ? <NoteOptions /> : <div> </div>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mainContent">
    <AddNotes setDisplayNote={setDisplayNote}/>
    <div className="displayNotes">
    <div >
      <Note />
    </div>
    </div>
    </div>
  );
}
