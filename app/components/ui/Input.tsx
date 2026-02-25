import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = ({ label, error, id, ...props }: InputProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={inputId} 
        className="text-sm font-medium text-gray-700"
      >{label}</label>
      
      <input
        id={inputId}
        {...props}
        className={`
          px-3 py-2 bg-white border rounded-md shadow-sm transition-all
          focus:outline-none focus:ring-2 
          ${error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
          }
          ${props.disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
        `}
      />

      {error && (
        <span className="text-xs text-red-600 mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;