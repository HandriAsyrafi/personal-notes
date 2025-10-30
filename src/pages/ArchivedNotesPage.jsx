import NotesList from "../components/NotesLists";

export default function ArchivedNotesPage({
  archive,
  onDeleteNote,
  onUnarchiveNote,
}) {
  return (
    <>
      <NotesList
        archive={archive}
        onDeleteNote={onDeleteNote}
        onUnarchiveNote={onUnarchiveNote}
      >
        Arsip
      </NotesList>
    </>
  );
}
