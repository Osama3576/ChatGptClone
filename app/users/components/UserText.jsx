/* eslint-disable @next/next/no-img-element */
'use client';
function UserText({ currentUser, cv }) {
  return (
    <div className="w-full px-2 py-4 bg-white md:px-0">
      <div className="max-w-[672px] mx-auto flex gap-4">
        <img
          className="w-6 h-6"
          src={currentUser?.image || 'images/placeholder.jpg'}
          alt="profile"
        />
        <p>{cv.text}</p>
      </div>
    </div>
  );
}

export default UserText;
