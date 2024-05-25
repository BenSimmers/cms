import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

export const MarkdownViewer = ({ markdown }: { markdown: string }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};
