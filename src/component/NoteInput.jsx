import React from 'react';
import useInput from "./useInput";
import PropTypes from 'prop-types';

function NoteInput({onAddNote}) {
    const [title, handleTitleChange] = useInput('');
    const [body, handleNoteChange] = useInput('');
    const onSubmitHandler = async (event) =>{
      event.preventDefault();
      onAddNote({title,body})
    }
    return (
      <div className='note-container'>
        <form onSubmit={onSubmitHandler} className="note-input">
          <input
            placeholder="Masukkan judul..."
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            rows={6}
            placeholder="Masukkan catatan..."
            value={body}
            onChange={handleNoteChange}
          />
          <button>Simpan</button>
        </form>
      </div>
    );
}
NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};
export default NoteInput