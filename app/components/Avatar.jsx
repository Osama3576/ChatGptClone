/* eslint-disable @next/next/no-img-element */
'use client';
import { BsThreeDots } from 'react-icons/bs';
function Avatar({ setShowModal, showModal, currentUser }) {
  function handleShowModal() {
    if (!showModal) {
      return setShowModal(true);
    } else {
      setShowModal(false);
    }
  }
  return (
    <div
      onClick={handleShowModal}
      className="flex justify-between pr-2 cursor-pointer hover:bg-slate-800"
    >
      <div className="flex items-center gap-4 p-4">
        <img
          className="w-8 h-8"
          src={currentUser?.image || 'images/placeholder.jpg'}
          alt="profile"
        />
        <span className="font-bold">
          {currentUser?.name || currentUser?.email}
        </span>
      </div>
      <button>
        <BsThreeDots />
      </button>
    </div>
  );
}

export default Avatar;
