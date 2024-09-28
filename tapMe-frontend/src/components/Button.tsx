import React from 'react';

interface ButtonProps {
  onTap: () => void;
}

const Button: React.FC<ButtonProps> = ({ onTap }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onTap}
    >
      Tap Me
    </button>
  );
};

export default Button;
