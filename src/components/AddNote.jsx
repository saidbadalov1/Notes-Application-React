import React, { useState } from 'react'
import {nanoid} from 'nanoid'

const AddNote = ({ notes, setNotes }) => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    const [noteText, setNoteText] = useState('');

    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        setNoteText(e.target.value);
        setCount(e.target.value.length)
    }




    const handleSaveClick = (e) => {
        setNotes([...notes , {
            id: nanoid(),
            text: noteText,
            date: date
        }])
        e.preventDefault();
        setNoteText('');
        setCount(0);
        if(noteText === ""){
            setNotes([...notes])
        }
    }

  return (
    <div className='note new'>
        <textarea 
        value={noteText} 
        onChange={handleChange} 
        placeholder='Type to add a note...' 
        cols="10" 
        rows="8"
        maxLength="250"
        />
        <div className="note-footer">
            <small>{count}/250 Remaining</small>
            <button onClick={handleSaveClick} className='save'>Save</button>
        </div>
    </div>
  )
}

export default AddNote;