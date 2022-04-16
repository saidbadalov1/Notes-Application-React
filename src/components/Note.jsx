import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({ notes, setNotes }) => {

    

    const handleDelete = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <>
            {
                notes.map((note) => (
                    <div key={note.id} className='note'>
                        <span>{note.text}</span>
                        <div className="note-footer">
                            <small>{note.date}</small>
                            <button onClick={() => handleDelete(note.id)} className='delete-button'><MdDeleteForever size='1.8em'/></button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Note;