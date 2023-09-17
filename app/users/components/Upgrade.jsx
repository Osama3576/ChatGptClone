'use client';
import { AiOutlineUser } from 'react-icons/ai';
function Upgrade() {
  return (
    <div className="flex justify-between p-4 cursor-pointer hover:bg-slate-800">
      <button className="flex items-center gap-2">
        <AiOutlineUser />
        <span>Upgrade to Plus</span>
      </button>
      <div className="p-1 text-sm text-black bg-yellow-100 rounded-lg ">
        <span>new</span>
      </div>
    </div>
  );
}

export default Upgrade;
