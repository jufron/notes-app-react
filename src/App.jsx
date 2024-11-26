import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import NoteList from "./components/NotesList";
import InputNotes from "./components/InputNotes";
import getData from "./data/getData";
import { useState } from "react";

// ? mohon kritik dan saran agar saya bisa improve lagi, thank you
const App = () => {
  const [notes, setNotes] = useState(getData());

  const onDeleteHandler = id => {
    const result = notes.filter(note => note.id !== id);
    setNotes(result);
  };

  const onArchiveActiveHandler = id => {
    const newNotes = [...notes];
    const arrIndex = newNotes.findIndex(oldNote => oldNote.id == id);
    !newNotes[arrIndex].archived
      ? newNotes[arrIndex].archived = true
      : newNotes[arrIndex].archived = false;

    setNotes(newNotes);
  };

  const addProductHandler = ({ title, body }) => {
    setNotes(prevState => {
      return [
        ...prevState,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date()
        }
      ];
    });
  }

  const searchNotesHandler = (result, value) => {
    value === ''
      ? setNotes(getData())
      : setNotes(result);
  };

  const handleClick = {
    onDeleteHandler,
    onArchiveActiveHandler
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <Navbar
        notes={notes}
        searchNotesHandler={searchNotesHandler}
      />
      <InputNotes addNotes={addProductHandler} />
      <Heading title="Catatan Aktif" />
      <NoteList
        notes={notes}
        archive={false}
        {...handleClick}
      />
      <Heading title="Arsip" />
      <NoteList
        notes={notes}
        archive={true}
        {...handleClick}
      />
    </div>
  );
};

export default App;
