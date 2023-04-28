import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Header = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle !== "") {
      handleAddTask(trimmedTitle);
    }
    setTitle("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <header className=" bg-white flex items-start justify-center h-32 relative">
      <h2 className="text-5xl font-bold text-gray-700">Todo List</h2>

      <form
        onSubmit={handleSubmit}
        className=" absolute h-16 -bottom-7 w-full max-w-4xl flex gap-2 px-4"
      >
        <input
          placeholder="Create a todo task"
          type="text"
          onChange={onChangeTitle}
          required
          value={title}
          className="h-full flex-1 text-gray-600 border-2 border-solid border-[#30BE76] rounded-lg px-4 text-lg placeholder:text-gray-500 outline-none"
        />
        <button className=" h-full px-4 bg-[#30BE76] text-white text-lg border-none rounded-lg flex items-center gap-2 font-bold tracking-wider outline-none">
          Create <AiOutlinePlusCircle size={25} />
        </button>
      </form>
    </header>
  );
};

export default Header;
