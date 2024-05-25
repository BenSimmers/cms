import React from "react";
import {
  getMarkdownFiles,
  saveMarkdownFile,
  deleteMarkdownFile,
} from "../utils/helpers";

import { create, StoreApi } from "zustand";

interface Markdown {
  id: string;
  content: string | null;
}

type MarkdownManagerState = {
  markdownContent: string;
  setMarkdownContent: (content: string) => void;
  files: Markdown[];
  handleSave: () => void;
  handleDelete: (id: string) => void;
  getMarkdownFileById: (id: string) => Markdown | undefined;
  getMarkdownByTitle: (title: string) => Markdown | undefined;
  searchMarkdown: (query: string) => Markdown[];
};

export const useMarkdownManager = create<MarkdownManagerState>(
  (
    set: StoreApi<MarkdownManagerState>["setState"],
    get: StoreApi<MarkdownManagerState>["getState"]
  ) => ({
    markdownContent: "",
    setMarkdownContent: (content: string) => set({ markdownContent: content }),
    files: getMarkdownFiles().map((file) => ({
      id: file.id,
      content: file.content,
    })),
    handleSave: () => {
      const { markdownContent, files } = get();
      if (markdownContent.trim() === "") return; // if no content, do nothing

      const id = saveMarkdownFile(markdownContent);
      set({
        files: [...files, { id, content: markdownContent }],
        markdownContent: "",
      });
    },
    handleDelete: (id: string) => {
      const { files } = get();
      deleteMarkdownFile(id);
      set({ files: files.filter((file) => file.id !== id) });
    },

    getMarkdownFileById: (id: string) =>
      get().files.find((file) => file.id === id),

    getMarkdownByTitle: (title: string) =>
      get().files.find((file) => file.id === title),

    searchMarkdown: (query: string) =>
      get().files.filter((file) =>
        file.content?.toLowerCase().includes(query.toLowerCase())
      ),
  })
);
