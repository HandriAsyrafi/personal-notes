import { useState } from "react";
import { Routes, Route, useParams, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import NotFoundPage from "./pages/NotFoundPage";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const allNotes = [...notes, ...archive];

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

  function getFilteredNotes(notes, keyword) {
    if (!keyword || keyword.trim() === "") {
      return notes;
    }
    return allNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return (
    <>
      <Header setSearchParams={setSearchParams} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              archive={archive}
              title={title}
              onSetNotes={handleSubmitNote}
              onDeleteNote={handleDeleteNote}
              onArchiveNote={handleArchiveNote}
              onUnarchiveNote={handleUnarchiveNote}
              onSearch={getFilteredNotes}
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
