"use client"
import React, { useState } from "react";
import AddEditNotes from "@/components/AddEditNotes/AddEditNotes";
import NoteCard from "@/components/ProfileInfo/NoteCard";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";

interface NoteData {
  id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
  isPinned: boolean;
}
const Home = () => {
  const [openAddModal, setOpenAddModal] = useState<{
    isShown: boolean;
    type: "add" | "edit";
    data: NoteData | null;
  }>({
    isShown: false,
    type: "add",
    data: null,
  });

  // Sample note data
  const sampleNote: NoteData = {
    id: "1",
    title: "ZS Interview",
    date: "4th Oct 2024",
    content: "Meeting with ZS",
    tags: ["Meeting"],
    isPinned: true,
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title={sampleNote.title}
            date={sampleNote.date}
            content={sampleNote.content}
            tags={sampleNote.tags}
            isPinned={sampleNote.isPinned}
            onEdit={() => {
              setOpenAddModal({
                isShown: true,
                type: "edit",
                data: sampleNote,
              });
            }}
            onDelete={() => {
              /* handle delete */
            }}
            onPinNote={() => {
              /* handle pin/unpin */
            }}
          />
        </div>
      </div>

      {/* Add Button */}
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddModal({ isShown: true, type: "add", data: null });
        }}
        aria-label="Add Note"
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      {/* Modal for Add/Edit Notes */}
      <Modal
        isOpen={openAddModal.isShown}
        onRequestClose={() =>
          setOpenAddModal({ isShown: false, type: "add", data: null })
        }
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
        contentLabel="Add/Edit Note"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
        ariaHideApp={false} // Add this line if you're encountering accessibility warnings
      >
        <AddEditNotes
          onClose={() =>
            setOpenAddModal({ isShown: false, type: "add", data: null })
          }
          type={openAddModal.type}
          noteData={openAddModal.data}
        />
      </Modal>
    </>
  );
};

export default Home;
