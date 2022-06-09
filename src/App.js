import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Components/NotesList';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my 1st note!',
      date: '02/01/2022',
  },
  {
    id: nanoid(),
    text: 'This is my 2nd note!',
    date: '03/01/2022',
},
{
  id: nanoid(),
  text: 'This is my 3rd note!',
  date: '04/01/2022',
},
{
  id: nanoid(),
  text: 'This is my 4th note!',
  date: '05/01/2022',
},

]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
  );
      if (savedNotes) {
        setNotes(savedNotes);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data',
    JSON.stringify(notes)
    );
  }, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
  <div className='container'>
    <NotesList
    notes={notes}
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
  </div>
  );
};

export default App;