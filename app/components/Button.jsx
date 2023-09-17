function Button({
  type,
  fullWidth,
  children,
  onClick,
  secondary,

  disabled,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${secondary ? 'bg-[#10a37f]' : 'bg-indigo-600'} ${
        secondary ? 'hover:bg-green-600' : 'hover:bg-indigo-700'
      } ${disabled && 'opacity-50 cursor-default'} ${
        fullWidth && 'w-full'
      } text-white px-12 py-3 font-medium rounded-sm transition `}
    >
      {children}
    </button>
  );
}

export default Button;
