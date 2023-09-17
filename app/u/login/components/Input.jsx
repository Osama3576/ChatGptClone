'use client';

function Input({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute px-1 text-gray-500 transition-all duration-300 bg-white -top-3 left-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={`w-full p-2 border rounded-sm focus:outline-none focus:border-green-500 
        ${errors[id] && 'focus:ring-rose-500'}
        ${disabled && 'opacity-50 cursor-default'}
        
        `}
        onFocus={e => {
          e.target.previousElementSibling.classList.add(
            '-top-3',
            'text-blue-500',
            'text-xs'
          );
        }}
        onBlur={e => {
          if (e.target.value === '') {
            e.target.previousElementSibling.classList.remove(
              '-top-3',
              'text-blue-500',
              'text-xs'
            );
          }
        }}
      />
    </div>
  );
}

export default Input;
