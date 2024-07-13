import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "github-markdown-css/github-markdown.css";
import { MarkdownManager } from "./components/modules/MarkdownManager/MarkdownManager";
import File from "./pages/File";
import Editor from "./pages/Editor";
import Preview from "./pages/Preview";
import Home from "./pages/Home";

export type Routes = "/" | "/files" | "/editor" | "/preview";

export type RouteProps = {
  path: string;
  component: JSX.Element;
};

export const routes: Record<Routes, RouteProps> = {
  "/": {
    path: "/",
    component: <Home />,
  },
  "/files": { path: "/files", component: <File /> },
  "/editor": { path: "/editor", component: <Editor /> },
  "/preview": { path: "/preview", component: <Preview /> },
};

export const Navigation = () => {
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
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={routes["/"].component} />
          <Route path="/files" element={routes["/files"].component} />
          <Route path="/editor" element={routes["/editor"].component} />
          <Route path="/editor/:id" element={routes["/editor"].component} />
          <Route path="/preview/:id" element={routes["/preview"].component} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;