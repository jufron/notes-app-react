import { useState } from "react";


const Navbar = ({notes, searchNotesHandler}) => {
  const [ searchNotes, setSearchNotes ] = useState('');

  const searchNoteEventChangeHandler = e => {
    const search = e.target.value;
    setSearchNotes(search);

    const resultFilterSearch = notes.filter(note => {
      return note.title.toLowerCase().includes(searchNotes.toLowerCase());
    });

    searchNotesHandler(resultFilterSearch, search);
  };

  return (
    <nav className="flex justify-between items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
      <h1 className="font-bold text-2xl md:text-4xl">Notes</h1>
      <input
        className="flex items-center h-10 w-60 md:w-96 px-4 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
        type="search"
        placeholder="Cari Catatan ..."
        value={searchNotes}
        onChange={searchNoteEventChangeHandler}
      />
    </nav>
  );
};

export default Navbar;
