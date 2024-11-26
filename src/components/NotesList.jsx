import NoteItem from "./NoteItem";


const NoteList = ({ archive, notes, onDeleteHandler, onArchiveActiveHandler }) => {

  const notesFilter = notes.filter(note => {
    return archive
      ? note.archived === true
      : note.archived === false
  });

  return (
    <div className="px-10 my-5 columns-1 md:columns-2 xl:columns-4 gap-7">
      {notesFilter.map(note => {
        return (
          <NoteItem
            key={note.id}
            id={note.id}
            {...note}
            onDeleteHandler={onDeleteHandler}
            onArchiveActiveHandler={onArchiveActiveHandler}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
