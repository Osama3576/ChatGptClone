'use client';
import { BiMenu } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

function Navbar({ isOpen, setIsOpen }) {
  function handleOpenClick() {
    setIsOpen(true);
  }
  return (
    <div className="flex md:hidden p-2 h-[42px] items-center justify-between bg-black">
      <button onClick={handleOpenClick}>
        <BiMenu color="white" size="1.5rem" />
      </button>

      <div>
        <p className="text-white">chat Name</p>
      </div>

      <button>
        <AiOutlinePlus color="white" size="1.5rem" />
      </button>
    </div>
  );
}

export default Navbar;
