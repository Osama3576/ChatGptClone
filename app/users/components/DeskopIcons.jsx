'use client';

import Link from 'next/link';

function DeskopIcons({ href, label, icon: Icon, active, onClick }) {
  function handleClick() {
    if (onClick) return onClick();
  }
  return (
    <div onClick={handleClick} className="flex">
      <Link
        href={href}
        className="flex items-center w-full gap-2 px-2 py-3 hover:bg-slate-800"
      >
        <Icon />
        <span>{label}</span>
      </Link>
    </div>
  );
}

export default DeskopIcons;
