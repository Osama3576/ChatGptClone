'use client';

function MicroPhone({ onClick, title, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="absolute right-[3.5rem] top-[16px] flex items-center justify-center w-7 h-7 rounded-md hover:bg-green-400"
    >
      <Icon
        size="1.3rem"
        className="fill-slate-400 hover:fill-white"
      />
    </button>
  );
}

export default MicroPhone;
