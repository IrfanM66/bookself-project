import React from "react";
import NoteInput from "../component/NoteInput";
import LocaleContext from "../context/LocaleContext";
import { addNote } from "../utils/network";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <div className="add-note">
      <h2>{locale === "id" ? "Tambah Catatan" : "Add Note"}</h2>
      <p className="addnote-Desc">
        Masukkan dan simpan catatan harianmu pada Bookself, untuk mengingat
        kembali apa yang harus dilakukan.
      </p>
      <NoteInput onAddNote={onAddNoteHandler} />
    </div>
  );
}

export default AddPage;
