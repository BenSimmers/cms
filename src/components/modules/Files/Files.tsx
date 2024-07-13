import { useMarkdownManager } from "../../../hooks";
import { Card } from "../../common/Card";

export type FilesProps = {
  files: { id: string; content: string | null }[];
  handleDelete: (id: string) => void;
  getMarkdownTitleById?: (id: string) => string | undefined;
};

export const Files: React.FC<FilesProps> = ({
  files,
  handleDelete,
  getMarkdownTitleById,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {files.length === 0 ? (
      <div className="text-center text-gray-500">
        No files found. Click the new button to create a new file.
      </div>
    ) : (
      files.map((file) => (
        <Card
          key={file.id}
          id={file.id}
          title={getMarkdownTitleById?.(file.id) || "Untitled"}
          handleDelete={handleDelete}
        />
      ))
    )}
  </div>
);

export const ConnectedFiles = () => {
  const { files, handleDelete, getMarkdownTitleById } = useMarkdownManager();
  return (
    <Files
      files={files}
      handleDelete={handleDelete}
      getMarkdownTitleById={getMarkdownTitleById}
    />
  );
};
