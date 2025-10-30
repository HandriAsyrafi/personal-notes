import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import {
  getActiveNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  getArchivedNotes,
} from "./utils/local-data";

function App() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [archive, setArchive] = useState(getArchivedNotes());

  function handleSubmitNote({ title, body }) {
    addNote({ title, body });
    setNotes(getActiveNotes());
  }

  function handleDeleteNote(id) {
    deleteNote(id);
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  function handleArchiveNote(id) {
    archiveNote(id);
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  function handleUnarchiveNote(id) {
    unarchiveNote(id);
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              archive={archive}
              onSetNotes={handleSubmitNote}
              onDeleteNote={handleDeleteNote}
              onArchiveNote={handleArchiveNote}
              onUnarchiveNote={handleUnarchiveNote}
            />
          }
        />
        <Route
          path="/notes/:id"
          element={<NoteDetailPage notes={notes} archive={archive} />}
        />
        <Route
          path="/archived"
          element={
            <ArchivedNotesPage
              archive={archive}
              onDeleteNote={handleDeleteNote}
              onUnarchiveNote={handleUnarchiveNote}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
