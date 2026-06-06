import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const fetchNotes = async () => {
    const res = await fetch("/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async () => {
    if (!text) return;

    await fetch("/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    setText("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`/notes/${id}`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
  <div className="container">

    <h2>☸️ KubeNotes</h2>

    <p className="subtitle">
      Kubernetes-Powered Notes Application
    </p>

    <div className="input-group">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note..."
      />

      <button
        className="add-btn"
        onClick={addNote}
      >
        ➕ Add
      </button>
    </div>

    {notes.length === 0 ? (
      <p className="empty-state">
        No notes available. Create your first note 🚀
      </p>
    ) : (
      <ul className="notes">
        {notes.map((note) => (
          <li key={note._id}>
            <span className="note-text">
              {note.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteNote(note._id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    )}

  </div>
);
}

export default App;
