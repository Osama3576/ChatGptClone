'use client';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlinePlus } from 'react-icons/ai';
import Avatar from '@/app/components/Avatar';
import Upgrade from './Upgrade';
import PreviousChats from './PreviousChats';
import { BsLayoutSidebar } from 'react-icons/bs';
import Modal from './Modal';
import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

function SideBar({ isOpen, setIsOpen, currentUser }) {
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`${
        !isOpen && 'translate-x-[-100%]  transition duration-1000'
      }  transition md:w-[20rem] duration-1000  absolute w-full h-screen top-0 z-40 bg-slate-600`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute z-100 right-3 top-3 md:hidden"
      >
        <RxCross1 size="1.8rem" color="white" />
      </button>
      <div className="bg-slate-900 text-white p-2 w-[20rem] h-screen absolute top-0 z-50  ">
        <div className="flex items-center">
          <button className="flex items-center w-full gap-4 px-2 py-2 border rounded-md">
            <AiOutlinePlus color="white" size="1.5rem" />
            <span>chat Name</span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className={`  hidden md:flex border rounded-md m-2 w-9 h-10 items-center justify-center  `}
          >
            <BsLayoutSidebar />
          </button>
        </div>

        <PreviousChats />

        <div className="absolute bottom-0 left-0 w-full border-t-2 ">
          {showModal && <Modal />}
          <Upgrade />
          <Avatar
            currentUser={currentUser}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
