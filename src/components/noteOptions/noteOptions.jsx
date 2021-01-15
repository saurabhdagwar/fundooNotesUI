import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import RestoreFromTrashRoundedIcon from "@material-ui/icons/RestoreFromTrashRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Services from "../../Services/noteServices";
import "./noteOptions.css";
const service = new Services();

const useStyles = makeStyles((theme) => ({

  optionButton: {
    width: "100%"
  },
  colorPaper: {
    marginLeft: theme.spacing(5),
  },
  button: {
    padding: "6px",
  },
  colorMenu: {
    width: "130px",
    height: "90px",
    display: "flex",
    flexFlow: " column wrap",
  },
  colorButton: {
    margin: "2px",
    width: "5px",
    height: "5px",
    "&:hover": {
      border: "black 2px solid",
    },
  },

  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function NoteOptions(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [noteId, setNoteId] = React.useState(props.editId);
  const [edit, setEdit] = React.useState(props.setEdited);
  const [archive, setArchive] = React.useState(props.archive);
  const [trash, setTrash] = React.useState(props.trash);

  const colors = [
    { color: "#fafafa" },
    { color: "#ef9a9a" },
    { color: "#ffcc80" },
    { color: "#fff59d" },
    { color: "#dcedc8" },
    { color: "#b2dfdb" },
    { color: "#e0f7fa" },
    { color: "#4fc3f7" },
    { color: "#b39ddb" },
    { color: "#f8bbd0" },
    { color: "#a1887f" },
    { color: "#cfd8dc" },
  ];

  const deleteHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const deletesHandleClose = () => {
    setAnchorE2(null);
  };

  const deleted = () => {
    let data = {
      noteIdList: [noteId],
      isDeleted: true,
      isArchived: false,
    };
    service
      .deleteNotes(data)
      .then((data) => {
        console.log(data);
        props.getall();
      })
      .catch((err) => {
        console.log("error = " + err);
      });
    setAnchorE2(null);
    // props.setDelete();
  };

  const colorsHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const colorsHandleClose = () => {
    setAnchorEl(null);
  };

  const passColor = (e, colr) => {
    e.stopPropagation();
    if (edit) {
      let data = {
        color: colr,
        noteIdList: [noteId],
      };
      service
        .changeColor(data)
        .then((data) => {
          console.log("Update Color: " + data);
          console.log(colr);
          props.getall();
        })
        .catch((err) => {
          console.log("Update Color Error = " + err);
        });
    }
      props.setClr(colr);
  };

  const archiveNote = () => {
    let data = {
      noteIdList: [noteId],
      isArchived: true,
      isDeleted: false,
    };
    service
      .archiveNote(data)
      .then((data) => {
        props.getall();
        console.log("Archived Note: " + data);
      })
      .catch((err) => {
        console.log("Archived Note err = " + err);
      });
  };

  const deleteForever = () => {
    let data = {
      noteIdList: [noteId],
    };
    service.deleteForever(data)
    .then((data) => {
      console.log("Note deleted "+data);
      props.getall();
    })
    .catch((err) => {
      console.log("Error while deleting"+err)
    })
  }

  const restore = () => {
    let data = {
      noteIdList: [noteId],
      isDeleted: false,
    };
    service
      .deleteNotes(data)
      .then((data) => {
        console.log(data);
        props.getall();
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  }

  const unArchiveNote = () => {
    let data = {
      noteIdList: [noteId],
      isArchived: false,
    };
    service
      .archiveNote(data)
      .then((data) => {
        props.getall();
        console.log("UnArchived Note: " + data);
      })
      .catch((err) => {
        console.log("UnArchived Note err = " + err);
      });
  };

  const ColorBlock = () => {
    return (
      <div className={classes.colorMenu} onMouseLeave={colorsHandleClose}>
        {colors.map((color) => (
          <IconButton
            className={classes.colorButton}
            onClick={(e) => passColor(e, color.color)}
            style={{ backgroundColor: color.color }}
          ></IconButton>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.optionButton}>
      <div>
        {trash ? (
          <div>
            <IconButton className={classes.button}>
              <DeleteForeverRoundedIcon onClick={deleteForever}/>
            </IconButton>
            <IconButton className={classes.button}>
              <RestoreFromTrashRoundedIcon onClick={restore}/>
            </IconButton>
          </div>
        ) : (
          <div className='optionfield'>
            <IconButton className={classes.button}>
              <AddAlertIcon />
            </IconButton>
            <IconButton className={classes.button}>
              <PersonAddIcon />
            </IconButton>
            <IconButton
              onMouseOver={colorsHandleClick}
              className={classes.button}
            >
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton className={classes.button}>
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton className={classes.button}>
              {archive ? (
                <PublishRoundedIcon onClick={unArchiveNote} />
              ) : (
                <SystemUpdateAltOutlinedIcon onClick={archiveNote} />
              )}
            </IconButton>
            <IconButton className={classes.button} onClick={deleteHandleOpen}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        )}
      </div>
      <div
        className={classes.colorWindow}
        style={{ display: open ? "block" : "none" }}
        onClick={colorsHandleClose}
      >
        <Paper open={Boolean(open)}>
          <Menu
            open={Boolean(open)}
            className={classes.colorPaper}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
          >
            <ColorBlock className="colorBlock" />
          </Menu>
        </Paper>
      </div>
      <div>
        <Paper>
          <Menu
            className={classes.settingMenu}
            anchorEl={anchorE2}
            open={Boolean(anchorE2)}
            onClose={deletesHandleClose}
          >
            <MenuItem onClick={deleted}>Delete</MenuItem>
          </Menu>
        </Paper>
      </div>
    </div>
  );
}
