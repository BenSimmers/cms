export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="inline-block px-4 py-2 mb-4 text-white bg-green-500 rounded hover:bg-green-600"
  >
    {text}
  </button>
);
