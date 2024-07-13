import React from "react";
import { TextArea } from "../components/common/TextArea";
import { Button } from "../components/common/Button";
import { useMarkdownManager } from "../hooks";
import Markdown from "react-markdown";
import { MarkdownViewer } from "../components/modules/MarkdownViewer";
import { useParams } from "react-router-dom";

export default function Editor() {
  const { id } = useParams();
  const { markdownContent, setMarkdownContent, handleSave, getMarkdownFileById, handleEdit } =
    useMarkdownManager();

  // if theres an id, get the markdown file by id so it can be edited
  // if not, it's a new file

  React.useEffect(() => {
    if (id) {
      const markdownFile = getMarkdownFileById(id as string);
      if (markdownFile) {
        setMarkdownContent(markdownFile.content || "");
      }
    }
  }, [id]);

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="w-full md:w-1/2 p-2">
          <TextArea value={markdownContent} onChange={setMarkdownContent} />
        </div>
        <div className="w-full md:w-1/2 p-2 overflow-auto">
          <MarkdownViewer
            markdown={markdownContent}
            className="h-full border rounded p-2"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          text="Save"
          onClick={handleSave}
          className="p-2 bg-blue-500 text-white rounded"
        />

        {/* if this file is being edited, an update button will be shown */}
        {id && (
          <Button
            text="Update"
            onClick={() => {
              handleEdit(id as string);
            }}
            className="p-2 bg-blue-500 text-white rounded"
          />
        )}

        {/* if this file is being edited, a delete button will be shown */}
        {id && (
          <Button
            text="Delete"
            onClick={() => {
              alert("Are you sure you want to delete this file?");
            }}
            className="p-2 bg-red-500 text-white rounded"
          />
        )}

      </div>
    </div>
  );
}

//   return (
//     <div className="flex flex-col h-full p-4">
//       <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
//         <div className="w-full md:w-1/2 p-2">
//           <TextArea
//             value={markdownContent}
//             onChange={setMarkdownContent}
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-2 overflow-auto">
//           <MarkdownViewer markdown={markdownContent} className="h-full border rounded p-2" />
//         </div>
//       </div>
//       <div className="flex justify-end mt-4">
//         <Button text="Save" onClick={handleSave} className="p-2 bg-blue-500 text-white rounded" />
//       </div>
//     </div>
//   );
// }
