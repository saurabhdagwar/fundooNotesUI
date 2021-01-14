import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NoteOptions from "../noteOptions/noteOptions.jsx";
import Services from "../../Services/noteServices";
import Dialog from "@material-ui/core/Dialog";
import AddNote from "../addNotes/addNotes";
import Typography from '@material-ui/core/Typography';
import "./displayNotes.css";
const service = new Services();

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  dialogOptions: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  noteText: {
    wordWrap: "break-word",
    margin: "4px 4px 4px 4px"
  }
}));

export default function DisplayNotes(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  var [title, setTitle] = React.useState("");
  var [note, setNote] = React.useState("");
  const [clr, setClr] = React.useState("#fafafa");
  const [noteId, setNoteId] = React.useState();

  const setDelete = () => {
    dialogClose();
    setOpen(false);
  };

  const dialogOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true)
    setTitle(data.title);
    setNote(data.description);
    setClr(data.color);
    setNoteId(data.id);
     setOpen(true);
  };

  const storeOption = (e,data) => {
    e.stopPropagation();
    setNoteId(data);
  }

  const dialogClose = () => {
    setOpen(false);
  };

  const Note = () => {
    return (
      <div className="AllNotes">
        {props.notes
          .filter((data) => data.isDeleted === false)
          .filter((data) => data.isArchived === false)
          .map((data) => (
            <div
              className="noteBlock"
              style={{ backgroundColor: data.color }}>
              <div className="inputBlock" onClick={(e) => dialogOpen(e, data)}>
                <Typography className={classes.noteText} >{data.title}</Typography>
                <Typography className={classes.noteText} >{data.description}</Typography>
              </div>
              <div className="optionContainer">
              <div
                onMouseEnter={(e) => {
                  storeOption(e, data.id);
                  setClr(clr);
                }}
                onMouseOver={setEdit(true)}
                className="noteOption"
              >
                <NoteOptions 
                  setDelete={setDelete}
                  setColor={clr}
                  editId={data.id}
                  setEdited={edit}
                  getall={props.getall}
                />
              </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="mainContent">
      <div className="displayNotes">
        <Note />
      </div>
      <div>
        <Dialog
          open={open}
          onClose={dialogClose} >
            <AddNote setEdited={edit} dialogOff={dialogClose}  getall={props.getall} editOpen={open} editId={noteId} editTitle={title} editDisc={note} editColor={clr} className={classes.dialogBox} />
        </Dialog>
      </div>
    </div>
  );
}
