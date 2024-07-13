import React from "react";
import { useParams } from "react-router-dom";
import { useMarkdownManager } from "../hooks";
import { MarkdownViewer } from "../components/modules/MarkdownViewer";
export const Preview: React.FC = () => {
  const { id } = useParams();

  const { getMarkdownFileById } = useMarkdownManager();
  const markdownFile = getMarkdownFileById(id as string);

  if (markdownFile)
    return <MarkdownViewer markdown={markdownFile.content || ""} />;
};

export default Preview;
