import { v4 as uuidv4 } from "uuid";

export const saveMarkdownFile = (markdown: string) => {
  const id = uuidv4();
  localStorage.setItem(id, markdown);
  return id;
};

export const getMarkdownFiles = () => {
  const keys = Object.keys(localStorage);
  return keys.map((key) => ({
    id: key,
    content: localStorage.getItem(key),
  }));
};

export const deleteMarkdownFile = (id: string) => {
  localStorage.removeItem(id);
};
