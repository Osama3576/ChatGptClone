'use client ';
import { BsFillChatFill } from 'react-icons/bs';
function PreviousChats() {
  return (
    <div className="h-[30rem] mt-2 overflow-y-scroll ">
      <div className="flex items-center gap-2 p-2 my-4">
        <BsFillChatFill />
        <span>chat Name</span>
      </div>
    </div>
  );
}

export default PreviousChats;
// contentEditable
