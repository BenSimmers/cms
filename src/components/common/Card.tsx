import React from "react";
import { Link } from "react-router-dom";
export type CardProps = {
  id: string;
  title: string;
  handleDelete: (id: string) => void;
  handleOpen?: (id: string) => void;
  handleEdit?: (id: string) => void;
};

export const Card: React.FC<CardProps> = ({
  id,
  title,
  handleOpen,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div
      className="p-5 bg-slate-700 text-slate-200 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[12px_12px_12px_inset_rgba(0,0,0,0.1),-10px_-10px_10px_inset_white] hover:text-black"
      key={id}
    >
      <h1 className="font-bold">{title}</h1>
      <div className="mt-4">
        <div
          className="inline-flex rounded-md shadow-sm sm:rounded-lg"
          role="group"
        >
          <Link
            className="mr-2 bg-slate-800 text-white px-4 py-2 rounded-lg"
            to={`/editor/${id}`}
          >
            Edit
          </Link>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <Link
            className="ml-2 bg-slate-800 text-white px-4 py-2 rounded-lg"
            to={`/preview/${id}`}
          >
            Open
          </Link>
        </div>
      </div>
    </div>
  );
};
