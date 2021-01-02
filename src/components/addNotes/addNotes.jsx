import React from "react";
import TextField from '@material-ui/core/TextField';
import "./addNotes.css"

export default function addNote() {
  return <div className="addNotesMain">
       <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
  </div>;
}
