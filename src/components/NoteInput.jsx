import React, { useState } from "react";

export default function AddNote({ onSetNotes, setIsOpen }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmitNote(e) {
    e.preventDefault();

    onSetNotes({ title, body });

    setTitle("");
    setBody("");
    setIsOpen(false);
  }

  return (
    <div className="note-app__body">
      <div className="note-input">
        <form onSubmit={handleSubmitNote}>
          <input
            type="text"
            name="title"
            placeholder="Ini adalah judul ..."
            className="note-input__title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            placeholder="Tuliskan catatanmu di sini ..."
            className="note-input__body"
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    </div>
  );
}


