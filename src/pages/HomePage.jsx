import NotesList from "../components/NotesLists";

export default function HomePage({
  notes,
  title,
  onSetNotes,
  onDeleteNote,
  onArchiveNote,
  onSearch,
}) {
  const filteredNotes = onSearch(notes, title);
  return (
    <>
      <NotesList
        notes={filteredNotes}
        onSetNotes={onSetNotes}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      >
        Catatan aktif
      </NotesList>
    </>
  );
}
