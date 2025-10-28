import NoteItem from "./NoteItem";
import { getActiveNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function NotesList() {
  const notes = getActiveNotes();

  // const filteredNotes =
  //   children === "Catatan aktif"
  //     ? notes.filter((note) => note.archived === false)
  //     : notes.filter((note) => note.archived === true);

  return (
    <>
      <div className="note-app__body">
        <div className="note-app__body__title">
          <h2>Catatan aktif</h2>
          <Link to={"/add"}>
            <CgAddR size={25} className="add-icon" />
          </Link>
        </div>
        {notes.length > 0 ? (
          <div className="notes-list">
            {notes.map((note) => (
              <NoteItem
                {...note}
                key={note.id}
                formatDate={showFormattedDate}
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
