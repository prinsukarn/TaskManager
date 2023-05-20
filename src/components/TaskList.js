import React from "react";

export const TaskList = () => {
  const tasks = [
    { id: 1001, name: "Task 1", time: "01:37:00 PM 20/05/2023" },
    { id: 1002, name: "Task 2", time: "01:37:00 PM 20/05/2023" },
    { id: 1003, name: "Task 3", time: "01:37:00 PM 20/05/2023" },
  ];
  return (
    <section className="taskList">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </span>
        <span className="clearAll">Clear All</span>
      </p>
      <ul>
        {tasks.map((task) => (
          <li>
            <p>
              <span className="taskName"> {task.name}</span>
              <span className="taskTime">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash-fill"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
