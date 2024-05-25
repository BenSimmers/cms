import React from "react";
import {
  getMarkdownFiles,
  saveMarkdownFile,
  deleteMarkdownFile,
} from "../utils/helpers";

export const useMarkdownManager = () => {
  const [markdownContent, setMarkdownContent] = React.useState("");
  const [files, setFiles] = React.useState<
    { id: string; content: string | null }[]
  >([]);

  React.useEffect(() => {
    return setFiles(getMarkdownFiles());
  }, []);

  const handleSave = () => {
    if (markdownContent.trim() === "") return; // if no content, do nothing

    const id = saveMarkdownFile(markdownContent);
    setFiles([...files, { id, content: markdownContent }]);
    setMarkdownContent("");
  };

  const handleDelete = (id: string) => {
    deleteMarkdownFile(id);
    setFiles(files.filter((file) => file.id !== id));
  };

  return {
    markdownContent,
    setMarkdownContent,
    files,
    handleSave,
    handleDelete,
  };
};
