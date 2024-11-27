import { showFormattedDate } from "../utils";
import Button from "./Button";


const NoteItem = ({ id, title, body, createdAt, archived, onDeleteHandler, onArchiveActiveHandler }) => {

  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className="break-inside-avoid mb-8 border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3 text-sm">{body}</p>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <Button
        className="hover:bg-cyan-600 bg-cyan-500"
        clickHandler={() => onArchiveActiveHandler(id)}
      >
        {!archived ? 'Arsipkan' : 'Pindahkan'}
      </Button>
      <Button
        className="hover:bg-red-600 bg-red-400"
        clickHandler={() => onDeleteHandler(id)}
      >
        Hapus
      </Button>
    </div>
  );
};

export default NoteItem;
