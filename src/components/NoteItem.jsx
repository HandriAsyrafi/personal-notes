import { Link } from "react-router-dom";

export default function NoteItem({
  id,
  title,
  body,
  archived,
  createdAt,
  formatDate,
  onDeleteNote,
  onArchiveNote,
  onUnarchiveNote,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </p>
        <p className="note-item__date">{formatDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteNote(id)}
        >
          Delete
        </button>
        {archived === false ? (
          <button
            className="note-item__archive-button"
            onClick={() => onArchiveNote(id)}
          >
            Archive
          </button>
        ) : (
          <button
            className="note-item__archive-button"
            onClick={() => onUnarchiveNote(id)}
          >
            Unarchive
          </button>
        )}
      </div>
    </div>
  );
}
