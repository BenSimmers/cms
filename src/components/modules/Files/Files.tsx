import { useMarkdownManager } from "../../../hooks";

export type FilesProps = {
  files: { id: string; content: string | null }[];
  handleDelete: (id: string) => void;
};

export const Files: React.FC<FilesProps> = ({ files, handleDelete }) => (
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
);
