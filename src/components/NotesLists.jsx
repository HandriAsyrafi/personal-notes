import NoteItem from "./NoteItem";
import NoteInput from "../components/NoteInput";
import { showFormattedDate } from "../utils";
import { CgAddR } from "react-icons/cg";
import { getArchivedNotes } from "../utils/local-data";
import { useState } from "react";

export default function NotesList({
  children,
  notes,
  archive,
  onSetNotes,
  onDeleteNote,
  onArchiveNote,
  onUnarchiveNote,
}) {
  const [open, setIsOpen] = useState(false);

  const filteredNotes = children === "Catatan aktif" ? notes : archive;

  return (
    <>
      <div className="note-app__body">
        <div className="note-app__body__title">
          <h2>{open ? "Buat catatan" : children}</h2>
          {children === "Catatan aktif" ? (
            <CgAddR
              size={25}
              className="icon"
              onClick={() => setIsOpen(!open)}
            />
          ) : null}
        </div>
        {open ? (
          <NoteInput
            notes={notes}
            onSetNotes={onSetNotes}
            setIsOpen={setIsOpen}
          />
        ) : filteredNotes.length > 0 ? (
          <div className="notes-list">
            {filteredNotes.map((note) => (
              <NoteItem
                {...note}
                key={note.id}
                formatDate={showFormattedDate}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
                onUnarchiveNote={onUnarchiveNote}
              />
            ))}
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </>
  );
}
