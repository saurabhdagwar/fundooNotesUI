import React from "react";
import "../displayNotes/displayNotes.css";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../Services/noteServices";
import Dialog from "@material-ui/core/Dialog";
import AddNote from "../addNotes/addNotes";
import NoteOptions from "../noteOptions/noteOptions.jsx";
import Typography from "@material-ui/core/Typography";
const service = new Services();

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogOptions: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  noteText: {
    wordWrap: "break-word",
    margin: "4px 4px 4px 4px",
  },
}));

export default function SearchField(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  var [title, setTitle] = React.useState("");
  var [note, setNote] = React.useState("");
  const [clr, setClr] = React.useState("#fafafa");
  const [noteId, setNoteId] = React.useState();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getSearchNotes();
  }, [props.search]);

  const getSearchNotes = () => {
    service
      .getNotes()
      .then((data) => {
        let arrayData = data.data.data.data;
        let array = arrayData.reverse();
        setData(array);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  };

  const storeOption = (e, data) => {
    e.stopPropagation();
    setNoteId(data);
  };

  const Note = () => {
    return (
      <div className="AllNotes">
        {data
          .filter(
            (data) =>
              data.title.includes(props.search) ||
              data.description.includes(props.search)
          )
          .map((data) => (
            <div className="noteBlock" style={{ backgroundColor: data.color }}>
              <div className="inputBlock">
                <Typography className={classes.noteText}>
                  {data.title}
                </Typography>
                <Typography className={classes.noteText}>
                  {data.description}
                </Typography>
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
                  <NoteOptions editId={noteId} getall={getSearchNotes} />
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
    </div>
  );
}
