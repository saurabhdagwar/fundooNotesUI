import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import NoteOptions from "../noteOptions/noteOptions.jsx";
import Services from "../../Services/noteServices";
import "./addNotes.css";
const service = new Services();

const useStyles = makeStyles(() => ({
  titleInput: {
    padding: "10px 15px",
    width: "70%",
    
  },
  noteInput: {
    padding: "10px 15px",
  },
  closeNotes: {
    padding: '10px 10px 10px 10px',
    fontSize: '17px',
    fontFamily: 'Google Sans ,Roboto,Arial,sans-serif',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}));

export default function AddNote(props) {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(props.editOpen);
  var [title, setTitle] = React.useState(props.editTitle);
  var [note, setNote] = React.useState(props.editDisc);
  const [clr, setClr] = React.useState(props.editColor);
  const [edit, setEdit] = React.useState(props.setEdited);
  const [noteId, setNoteId] = React.useState(props.editId);

  const setColor = (color) => {
    setClr(color);
  };

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
    let formData = new FormData();
    if (title == "" && note == "") {
      console.log("Please Enter Data");
      setClr("#fafafa");
      titleDisplay(false);
      return null;
      props.dialogOff();
    }
    formData.append("title", title);
    formData.append("description", note);
    formData.append("color", clr);
    if (edit) {
      formData.append("noteId", noteId);
      service
        .updateNotes(formData)
        .then((data) => {
          console.log("Update Data: " + data);
        })
        .catch((err) => {
          console.log("Update Data Error = " + err);
        });
      titleDisplay(false);
      props.dialogOff();
      // props.getAll();
    } else {
      service
        .addNote(formData)
        .then((data) => {
          console.log("Add Notes: " + data);
        })
        .catch((err) => {
          console.log("Error = " + err);
        });
      setTitle("");
      setNote("");
      setClr("#fafafa");
      // props.getAll;
      titleDisplay(false);
    }
  };

  return (
    <div
      className="addNotesMain"
      onClickAway={closeNote}
      style={{ backgroundColor: clr }}
    >
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div className="titleInput" className={classes.titleInput}>
            <InputBase
              className={classes.input}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div class="simpleNoteShow">
          <div className="noteInput">
            <InputBase
              className={classes.input}
              placeholder="Take a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div style={{ display: showTitle ? "none" : "block" }}>
            <IconButton>
              <CheckBoxOutlinedIcon />
            </IconButton>
            <IconButton>
              <BrushOutlinedIcon />{" "}
            </IconButton>
            <IconButton>
              {" "}
              <ImageOutlinedIcon />{" "}
            </IconButton>
          </div>
        </div>
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions">
          <NoteOptions
            setColor={setColor}
            setEdited={edit}
            editId={props.editId}
            // getAll={props.getAll}
          />
          <IconButton className={classes.closeNotes} onClick={closeNote}>
            {" "}
            CLOSE{" "}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
