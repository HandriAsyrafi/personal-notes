import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function NoteDetailPage({ notes, archive }) {
  const { id } = useParams();

  const note =
    notes.find((note) => note.id === id) ||
    archive.find((note) => note.id === id);

  return (
    <>
      {note ? (
        <div className="note-detail-container">
          <h2 className="note-detail-title">{note.title}</h2>
          <p className="note-detail-date">
            {showFormattedDate(note.createdAt)}
          </p>
          <p className="note-detail-body">{note.body}</p>
        </div>
      ) : (
        <div className="note-detail-container">Note tidak ditemukan</div>
      )}
    </>
  );
}
