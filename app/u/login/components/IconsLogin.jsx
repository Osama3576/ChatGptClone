'use client';

function IconsLogin({ children, Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full gap-4 p-2 py-4 mb-2 border rounded-sm hover:bg-gray-200 hover:cursor-pointer"
    >
      <Icon className="cursor-pointer" size="1.5rem" />
      {children}
    </button>
  );
}

export default IconsLogin;
