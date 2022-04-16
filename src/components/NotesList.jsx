import React from 'react'
import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({notes, setNotes}) => {
    
  return (
    <div className='notes-list'>
        <Note notes={notes} setNotes={setNotes} />
        <AddNote notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default NotesList;