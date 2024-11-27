import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import NoteList from "./components/NotesList";
import InputNotes from "./components/InputNotes";
import { useState } from "react";
import { getInitialData } from "./utils";


const App = () => {
  const [notes, setNotes] = useState(getInitialData());

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
          createdAt: new Date().toISOString(),
        }
      ];
    });
  }

  const searchNotesHandler = (result, value) => {
    value === ''
      ? setNotes(getInitialData())
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
      {notes.length !== 0 ? (
        <>
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
        </>
      ) : (
        <h1 className="text-center text-4xl my-10 text-slate-800">Tidak Ada Catatan</h1>
      )}
    </div>
  );
};

export default App;
