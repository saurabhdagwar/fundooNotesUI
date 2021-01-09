import React, {useEffect} from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import NoteOptions from "../noteOptions/noteOptions.jsx";
import Services from "../../Services/noteServices";
import AddNotes from "../addNotes/addNotes";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./displayNotes.css";
const service = new Services();

let noteData = [{}]

const useStyles = makeStyles((theme) => ({
    dialogBox: {
        width: "40vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    dialogOptions:{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start"
    }
}));

export default function DisplayNotes(props) {
  const classes = useStyles();
  const [option, setOption] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState([]);
  var [title, setTitle] = React.useState();
  var [note, setNote] = React.useState();
  const [clr, setClr] = React.useState("#fafafa");
  const [noteId, setNoteId] = React.useState();
  var dialogTitle , dialogNote ;

  const setDisplayNote = () => {
      
      setOpen(false);
  };

  const setDelete = () => {
      let data = {
        "noteIdList": [noteId],
          "isDeleted": true
      }
    service.deleteNotes(data).
    then((data) => {
        console.log(data);
        console.log(noteId)
        setDisplayNote();
    })
    .catch((err) => {
        console.log("error = "+err);
        dialogClose();
    })
  }
  const setColor = (color) => {
    setClr(color);
  };

  const dialogOpen = (e,id,title,description,color) => {
    e.stopPropagation();
    setTitle(title);
    setNote(description);
    dialogTitle = title;
    dialogNote = note;
    setClr(color);
    setNoteId(id);
    setOpen(true);
  };

  const dialogClose = () => {
    if(dialogTitle == title && dialogNote == note){
      setOpen(false);
      return null;
    }
    let formData = new FormData(); 
    formData.append('noteId', noteId);
    formData.append('title', title);
    formData.append('description', note);
    formData.append('color', clr);
    service.updateNotes(formData)
    .then((data) => {
        console.log(data);
        setDisplayNote();
    })
    .catch((err) => {
        console.log("Error = "+err);
    })
    setOpen(false);
  };

  const openOption = () => {
    setOption(true);
  };
  const closeOption = () => {
    setOption(false);
  };

  const Note = () => {
    return (
      <div className="AllNotes">
        {props.notes.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).map((data) => (
          <div
            className="noteBlock"
            style={{ backgroundColor: data.color }}
            // style={{ backgroundColor:  }}
            onClick={(e) => dialogOpen(e,data.id,data.title,data.description,data.color)}
            onMouseOver={openOption}
            onMouseLeave={closeOption}
          >
            <InputBase placeholder="Title" value={data.title} />
            <InputBase placeholder="Take a Note..." value={data.description} />
            {option ? <NoteOptions /> : " "}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mainContent" >
      {/* <AddNotes setDisplayNote={setDisplayNote}  /> */}
      <div className="displayNotes">
          <Note />
      </div>
      <div >
        <Dialog 
          open={open}
          onClose={dialogClose}
          aria-labelledby="form-dialog-title">
             
            <div style={{backgroundColor: clr }} className={classes.dialogBox}>
          <DialogTitle id="form-dialog-title">
          <InputBase className={classes.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </DialogTitle>
          <DialogContent>
          <InputBase className={classes.input} placeholder="Take a Note..." value={note}  onChange={(e) => setNote(e.target.value)} />
          </DialogContent>
          <DialogActions className={classes.dialogOptions}><NoteOptions setDelete={setDelete} setColor={setColor} /></DialogActions>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
