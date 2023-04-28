import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash, TbEdit } from "react-icons/tb";

const Task = ({ task, onDelete, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);
  const [tempValue, setTempValue] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setValue(tempValue);
  };

  const handleSave = () => {
    if (value.trim() !== "") {
      setIsEditing(false);
      setValue(value.trim());
      setTempValue(value.trim());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="w-full bg-white shadow-lg shadow-[#b8c5d66f] p-4 rounded-lg flex items-center justify-between gap-5">
      <button
        className="w-6 h-6 bg-none border-none outline-none"
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill className="w-full h-full text-[#30BE76]" />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-solid border-[#30BE76]" />
        )}
      </button>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            className="text-gray-700 mr-auto text-lg w-9/12 outline-none border-b"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className="bg-[#30BE76] text-white px-3 py-1 rounded"
              type="submit"
            >
              Save
            </button>
            <button
              className="bg-[#f05f5f] text-white px-3 py-1 rounded"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <input
          className={
            task.isCompleted
              ? "text-gray-500 line-through mr-auto text-lg outline-none font-semibold"
              : "text-gray-700 mr-auto text-lg outline-none font-semibold"
          }
          value={value}
          readOnly
        />
      )}
      {isEditing ? null : (
        <>
          <button
            className="bg-none border-none text-[#d7a94b] outline-none"
            onClick={handleEdit}
          >
            <TbEdit size={25} />
          </button>
          <button
            className="bg-none border-none text-[#f05f5f] outline-none"
            onClick={() => onDelete(task.id)}
          >
            <TbTrash size={25} />
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
