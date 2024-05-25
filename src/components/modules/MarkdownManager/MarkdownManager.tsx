import { useMarkdownManager } from "../../../hooks";
import { MarkdownViewer } from "../MarkdownViewer/MarkdownViewer";
import { Files } from "../Files/Files";
import { TextArea } from "../../common/TextArea";
import { Button } from "../../common/Button";

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
      <TextArea value={markdownContent} onChange={setMarkdownContent} />
      <Button text="Save" onClick={handleSave} />
      <div className="mb-4">
        <Files files={files} handleDelete={handleDelete} />
      </div>
      <MarkdownViewer markdown={markdownContent} />
    </div>
  );
};