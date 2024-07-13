type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
};
export const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => (
  <div className="flex flex-col w-full h-full">
    <div className="flex justify-center space-">
      <button
        onClick={() => onChange(value + "**")}
        className="px-3 py-1 text-black bg-white border border-gray-300 hover:bg-gray-100"
      >
        B
      </button>
      <button
        onClick={() => onChange(value + "*")}
        className="px-3 py-1 text-black bg-white border border-gray-300 hover:bg-gray-100"
      >
        Italics
      </button>
      <button
        onClick={() => onChange(value + "```")}
        className="px-3 py-1 text-black bg-white border border-gray-300 hover:bg-gray-100"
      >
        Code
      </button>
      <button
        onClick={() =>
          onChange(
            value +
              "| Column 1 | Column 2 | Column 3 |\n| --- | --- | --- |\n| Row 1 | Row 1 | Row 1 |\n| Row 2 | Row 2 | Row 2 |"
          )
        }
        className="px-3 py-1 text-black bg-white border border-gray-300 hover:bg-gray-100"
      >
        Table
      </button>
    </div>

    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your markdown content here"
      className="w-full h-full p-2 border border-gray-300 rounded-md font-mono text-sm resize-none"
    />
  </div>
);
