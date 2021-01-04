import { db } from "../firebase/firebase-config"


export const loadNotes = async (uid) => {

  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  notesSnap.forEach(snapSon => {
    notes.push({
      id: snapSon.id,
      ...snapSon.data()
    })
  });

  return notes;
}