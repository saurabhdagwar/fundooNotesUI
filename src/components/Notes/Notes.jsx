import React from  "react";
import AddNotes from "../addNotes/addNotes";
import DisplayNotes from "../displayNotes/displayNotes";
import "./Notes.css"

export default function Notes(props) {
    
    return (
        <div className="mainContent">
            <AddNotes  setDisplayNote={props.setDisplayNote}/>        
            <DisplayNotes notes={props.notes} />
        </div>
    )
}