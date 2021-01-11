import React, { useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import NoteOptions from "../noteOptions/noteOptions.jsx";
import Services from "../../Services/noteServices";
import Dialog from "@material-ui/core/Dialog";
import AddNote from "../addNotes/addNotes";
import "./trashNotes.css";
const service = new Services();

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    // width: "40vw",
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

  showOpt: {
    display: "block",
  },

  hideOpt: {
    display: "none",
    
  },

}));

export default function DisplayNotes(props) {
  const classes = useStyles();
  const [option, setOption] = React.useState(false);
  const [opt, setOpt] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  var [title, setTitle] = React.useState("");
  var [note, setNote] = React.useState("");
  const [clr, setClr] = React.useState("#fafafa");
  const [noteId, setNoteId] = React.useState();
  var [dialogTitle, setdialogTitle] = React.useState("");
  var [dialogNote, setdialogNote] = React.useState("");
  var dialogTitle, dialogNote;

  const setDelete = () => {
    let data = {
      noteIdList: [noteId],
      isDeleted: true,
    };
    service
      .deleteNotes(data)
      .then((data) => {
        console.log(data);
        console.log(noteId);
        // props.getAll()
        // props.setDisplayNote;
      })
      .catch((err) => {
        console.log("error = " + err);
        dialogClose();
      });
    setOpen(false);
  };

  const dialogOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true)
    setTitle(data.title);
    setdialogTitle(data.title);
    setNote(data.description);
    setdialogNote(data.description);
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
          .filter((data) => data.isDeleted === true)
          .filter((data) => data.isArchived === false)
          .map((data) => (
            <div
              className="noteBlock"
              style={{ backgroundColor: data.color }}>
              <div className="inputBlock" onClick={(e) => dialogOpen(e, data)}>
                <InputBase placeholder="Title" value={data.title} />
                <InputBase placeholder="Take a Note..." value={data.description} />
              </div>
              <div onMouseEnter={(e) => storeOption(e,data.id)} onMouseOver={setEdit(true)} className="noteOption">
                <NoteOptions setDelete={setDelete} editId={data.id} setEdited={edit} />
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
            <AddNote setEdited={edit} dialogOff={dialogClose} editOpen={open} editId={noteId} editTitle={title} editDisc={note} editColor={clr} className={classes.dialogBox} />
        </Dialog>
      </div>
    </div>
  );
}
