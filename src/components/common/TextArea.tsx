type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
};
export const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Enter your markdown content here"
    className="w-full h-48 p-4 mb-4 border border-gray-300 rounded-md font-mono"
  />
);