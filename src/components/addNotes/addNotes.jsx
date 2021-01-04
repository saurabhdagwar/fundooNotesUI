import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddAlertIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import "./addNotes.css";

const useStyles = makeStyles(() => ({
  titleInput: {
    padding: "10px 15px",
    width: "70%",
  },
  noteInput: {
    padding: "10px 15px",
  },
  input: {

  }
}));

function TitleNote() {
  const classes = useStyles();
  return (
    <div className="titleInput" className={classes.titleInput}>
      <InputBase className={classes.input} placeholder="Title" />
    </div>
  );
}

export default function AddNote() {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(false);

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
    titleDisplay(false);
  };

  return (
    <div className="addNotesMain">
      <div className="notesField" onClick={clickedNote}>
        <div className="addNoteField" style={{ display: showTitle ? "block" : "none" }}>
          <TitleNote />
        </div>
        <div className="addNoteField" className="noteInput" >
          <InputBase className={classes.input} placeholder="Take a note..." />
        </div>
      </div>
      <div className="addNoteField" style={{ display: showTitle ? "block" : "none" }}>
        <div className="addNoteOptions">
          <div className="optionButton">
            <IconButton aria-label="open drawer">
              <AddAlertIcon />
            </IconButton>
            <IconButton aria-label="open drawer">
              <PersonAddIcon />
            </IconButton>
            <IconButton aria-label="open drawer">
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton aria-label="open drawer">
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton aria-label="open drawer">
              <SystemUpdateAltOutlinedIcon />
            </IconButton>
            <IconButton aria-label="open drawer">
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
          <div className="closeNotes" onClick={closeNote}>
            CLOSE
          </div>
        </div>
      </div>
    </div>
  );
}
