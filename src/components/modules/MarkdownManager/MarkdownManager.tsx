import { useMarkdownManager } from "../../../hooks";
import { MarkdownViewer } from "../MarkdownViewer/MarkdownViewer";

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

export const MarkdownManager: React.FC = () => {
  const {
    markdownContent,
    setMarkdownContent,
    files,
    handleSave,
    handleDelete,
  } = useMarkdownManager();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <textarea
        value={markdownContent}
        onChange={(e) => setMarkdownContent(e.target.value)}
        placeholder="Enter your markdown content here"
        className="w-full h-48 p-4 mb-4 border border-gray-300 rounded-md font-mono"
      />
      <button
        onClick={handleSave}
        className="inline-block px-4 py-2 mb-4 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Save
      </button>
      <div className="mb-4">
        {files.map((file) => (
          <div key={file.id} className="mb-2">
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                file.content || ""
              )}`}
              download={`${file.id}.md`}
              className="mr-2 text-blue-500 font-bold hover:underline"
            >
              {file.id}
            </a>
            <button
              onClick={() => handleDelete(file.id)}
              className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <MarkdownViewer markdown={markdownContent} />
    </div>
  );
};
