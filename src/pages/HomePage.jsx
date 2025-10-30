import NotesList from "../components/NotesLists";

export default function HomePage({
  notes,
  onSetNotes,
  onDeleteNote,
  onArchiveNote,
}) {
  return (
    <>
      <NotesList
        notes={notes}
        onSetNotes={onSetNotes}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      >
        Catatan aktif
      </NotesList>
    </>
  );
}
