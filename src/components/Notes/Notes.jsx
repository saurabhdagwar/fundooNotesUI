import React from  "react";
import AddNotes from "../addNotes/addNotes";
import DisplayNotes from "../displayNotes/displayNotes";
import "./Notes.css"

export default function Notes(props) {
    
    return (
        <div className="mainContent">
            <AddNotes  /*setDisplayNote={props.getall}*/ />        
            <DisplayNotes notes={props.notes} /*getAll={props.getall()}*/ />
        </div>
    )
}