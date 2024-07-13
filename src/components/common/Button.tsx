export type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 ${className}`}
  >
    {text}
  </button>
);
