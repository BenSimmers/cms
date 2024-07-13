import { v4 as uuidv4 } from "uuid";

/**
 * Save markdown file to local storage
 * @param markdown
 * @returns id
 */
export const saveMarkdownFile = (markdown: string) => {
  const id = uuidv4();
  localStorage.setItem(id, markdown);
  return id;
};

/**
 * Get all markdown files from local storage
 */
export const getMarkdownFiles = () => {
  // const keys = Object.keys(localStorage);
  return Object.keys(localStorage).map((key) => ({
    id: key,
    content: localStorage.getItem(key),
  }));
};

/**
 * Get markdown file by id
 * @param id
 * @param markdown
 */
export const updateMarkdownFile = (id: string, markdown: string) => {
  localStorage.setItem(id, markdown);
};

/**
 * Get markdown file by id
 * @param id
 */
export const deleteMarkdownFile = (id: string) => {
  localStorage.removeItem(id);
};
