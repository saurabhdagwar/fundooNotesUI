import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
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
}));


export default function AddNote(props) {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(false);
  var [title, setTitle] = React.useState();
  var [note, setNote] = React.useState();
  const [clr, setClr] = React.useState(`#fafafa`);
  const [displayNote, setDisplayNote] = React.useState(false);

  const setColor = (color) => {
    setClr(color);
  };

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
    let formData = new FormData(); 
      if(title == "" && note == ""){
          console.log("Please Enter Data");
          titleDisplay(false);
          props.setDisplayNote();
          return null;
      }
      formData.append('title', title);
      formData.append('description', note);
      formData.append('color', clr);
      service.addNote(formData)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
          console.log(err);
      })
      props.setDisplayNote();
      setTitle("");
      setNote("");
      setClr("#fafafa")
    titleDisplay(false);
  };

  
  return (
    <div className="addNotesMain" onMouseLeave={closeNote} style={{backgroundColor: clr}}>
       
      <div className="notesField" onClick={clickedNote}>
        <div className="addNoteField" style={{ display: showTitle ? "block" : "none" }}>
           <div className="titleInput" className={classes.titleInput}>
        <InputBase className={classes.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
        </div>
        <div class="simpleNoteShow">
          <div className="addNoteField" className="noteInput">
            <InputBase className={classes.input} placeholder="Take a note..." value={note} onChange={(e) => setNote(e.target.value)}  />
          </div>
          <div style={{ display: showTitle ? "none" : "block" }}>
            <IconButton><CheckBoxOutlinedIcon /></IconButton>
            <IconButton><BrushOutlinedIcon /> </IconButton>
            <IconButton> <ImageOutlinedIcon /> </IconButton>
          </div>
        </div>
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions">
            <NoteOptions setColor={setColor}/>
          <div className="closeNotes" onClick={closeNote}>
            CLOSE
          </div>
        </div>
      </div>
    </div>
  );
}
