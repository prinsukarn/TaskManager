export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              description: task.description,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );

      setTasklist(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        description: e.target.description.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          onChange={(e) => {
            setTask({ ...task, name: e.target.value });
          }}
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          required
        />

        <input
          type="textarea"
          name="description"
          value={task.description || ""}
          onChange={(e) => {
            setTask({ ...task, description: e.target.value });
          }}
          autoComplete="off"
          placeholder="Add Description"
          maxLength="255"
        />

        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
