/* eslint-disable @next/next/no-img-element */
'use client';
import { BsLayoutSidebar } from 'react-icons/bs';
function NavDesktop({ setIsOpen, isOpen }) {
  return (
    <>
      <div className="sticky hidden w-full py-4 text-center md:block">
        <p className="text-[14px] text-slate-800">
          Default (GPT-3.5)
        </p>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen && 'opacity-0'
        } z-30 hidden bg-white w-9 h-10 top-3 left-7 items-center justify-center rounded-md  md:flex md:fixed`}
      >
        <BsLayoutSidebar />
      </button>

      <div className="z-50 hidden cursor-pointer right-3 top-3 md:block md:fixed">
        <img src="images/plz.png" alt="please img" />
      </div>
    </>
  );
}

export default NavDesktop;
