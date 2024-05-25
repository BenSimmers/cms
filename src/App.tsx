import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import { MarkdownManager } from "./components/modules/MarkdownManager/MarkdownManager";

function App() {
  return (
    <div>
      <MarkdownManager />
    </div>
  );
}

export default App;
