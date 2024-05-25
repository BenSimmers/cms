import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "github-markdown-css/github-markdown.css";
import { MarkdownManager } from "./components/modules/MarkdownManager/MarkdownManager";

const routes: Record<string, { path: string; component: JSX.Element }> = {
  "/": { path: "/", component: <MarkdownManager /> },
  "/files": { path: "/files", component: <div>Files</div> },
  "/editor": { path: "/editor", component: <div>Editor</div> },
  "/preview": { path: "/preview", component: <div>Preview</div> },
};

export const Naviation = () => {
  return (
    <nav className="flex justify-center p-4 bg-gray-800">
      <Link to="/" className="text-white mx-2">
        Home
      </Link>
      <Link to="/files" className="text-white mx-2">
        Files
      </Link>
      <Link to="/editor" className="text-white mx-2">
        Editor
      </Link>
      <Link to="/preview" className="text-white mx-2">
        Preview
      </Link>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Naviation />
      <Routes>
        <Route path="/" element={routes["/"].component} />
        <Route path="/files" element={routes["/files"].component} />
        <Route path="/editor" element={routes["/editor"].component} />
        <Route path="/preview" element={routes["/preview"].component} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
