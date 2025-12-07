import React from 'react';

interface SocialButtonProps {
  onClick?: () => void;
  label: string;
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ onClick, label, icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex w-full items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:ring-offset-1"
    >
      <span className="h-5 w-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default SocialButton;