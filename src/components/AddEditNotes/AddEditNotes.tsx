"use client";
import React, { useState, useEffect } from "react";
import Tags from "../Tags/Tags";
import { MdClose } from "react-icons/md";

interface NoteData {
  id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
  isPinned: boolean;
}

interface AddEditNotesProps {
  onClose: () => void;
  type: "add" | "edit";
  noteData: NoteData | null;
}

const AddEditNotes: React.FC<AddEditNotesProps> = ({ onClose, noteData, type }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (type === "edit" && noteData) {
      setTitle(noteData.title);
      setContent(noteData.content);
      setTags(noteData.tags);
    } else {
      // Reset fields when adding a new note
      setTitle("");
      setContent("");
      setTags([]);
      setError("");
    }
  }, [type, noteData]);

  const addNewNote = async () => {
    // Implement the logic to add a new note
    console.log("Adding new note:", { title, content, tags });
    // Example:
    // await api.addNote({ title, content, tags });
  };

  const editNote = async () => {
    if (!noteData) return;
    // Implement the logic to edit an existing note
    console.log("Editing note:", { id: noteData.id, title, content, tags });
    // Example:
    // await api.updateNote(noteData.id, { title, content, tags });
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Please provide both title and content.");
      return;
    }

    setError("");

    if (type === "add") {
      await addNewNote();
    } else if (type === "edit") {
      await editNote();
    }

    onClose();
  };

  return (
    <div className="relative">
      {/* Close Button */}
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-100"
        onClick={onClose}
        aria-label="Close"
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      {/* Title Input */}
      <div className="flex flex-col gap-2">
        <label className="input-label font-semibold">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none border-b border-gray-300"
          placeholder="Meeting with ZS"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Content Textarea */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label font-semibold">Content</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded border border-gray-300"
          placeholder="Demo project. Get Job?"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* Tags Component */}
      <div className="mt-3">
        <label className="input-label font-semibold">Tags</label>
        <Tags tags={tags} setTags={setTags} />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      {/* Submit Button */}
      <button
        className="btn-primary font-medium mt-5 p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        {type === "add" ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default AddEditNotes;
