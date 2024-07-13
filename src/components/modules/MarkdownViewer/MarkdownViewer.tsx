import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

export const MarkdownViewer = ({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) => {
  return (
    <div className={`markdown-body ${className}`}>
      <div
        style={{
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown ? markdown : "# 📝"}
        </ReactMarkdown>
      </div>
    </div>
  );
};
