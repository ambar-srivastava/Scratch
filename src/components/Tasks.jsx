import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onEdit, onComplete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="w-full max-w-4xl mx-auto mt-20 px-4">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <p className="text-gray-700 text-lg font-bold">Created tasks</p>
          <span className=" bg-slate-300 text-gray-600 px-3 py-1 rounded-full text-base font-bold">
            {tasksQuantity}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-[#30BE76] text-lg font-bold">Completed tasks</p>
          <span className=" bg-slate-300 text-gray-600 px-3 py-1 rounded-full text-base font-bold">
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className=" flex flex-col gap-7">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
