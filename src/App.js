import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid"
import './index.css';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021',
    },
  ])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false);



  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [notes]);

  return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search searchText={searchText} setSearchText={setSearchText} />
          <NotesList notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText))}
            setNotes={setNotes} />
        </div>
      </div>
  );
}

export default App;
