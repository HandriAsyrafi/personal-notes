export default function NoteItem({ id, title, body, createdAt, formatDate }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__title">{title}</p>
        <p className="note-item__date">{formatDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button">Delete</button>
        <button className="note-item__archive-button">"Pindahkan"</button>
      </div>
    </div>
  );
}
