import { useMarkdownManager } from "../../../hooks";
import { MarkdownViewer } from "../MarkdownViewer/MarkdownViewer";
import { ConnectedFiles, Files } from "../Files/Files";
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
    <div>

      <MarkdownViewer markdown={markdownContent} />
    </div>
  );
};
