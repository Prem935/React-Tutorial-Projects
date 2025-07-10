import { useState } from "react";

const ToDoList = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const task = {
      id: Date.now(),
      text: newTask,
      isDone: false,
    };
    if (newTask.trim() !== "") {
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const moveUpTask = (id) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index - 1],
      ];
      setTasks(newTasks);
    }
  };

  const moveDownTask = (id) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index + 1],
      ];
      setTasks(newTasks);
    }
  };

  return (
    <div className="hero">
      <div className="input">
        <h1>To-Do-LiSt</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter New Task..."
        />
        <button className="btn add" onClick={addTask}>
          add
        </button>
      </div>

      {tasks.map((task) => {
        return (
          <div key={task.id} className="list">
            <input
              type="checkbox"
              onChange={() => handleToggle(task.id)}
              checked={task.isDone}
              scale={20}
            />
            <span className={task.isDone ? "line-through" : ""}>
              {task.text}
            </span>
            <button className="btn delete" onClick={() => deleteTask(task.id)}>
              delete
            </button>
            <button className="btn up" onClick={() => moveUpTask(task.id)}>
              UP
            </button>
            <button className="btn down" onClick={() => moveDownTask(task.id)}>
              DOWN
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ToDoList;
