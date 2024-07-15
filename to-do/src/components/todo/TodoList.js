import React, { useState, useEffect } from "react";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks((prevTasks) => [...prevTasks, ...savedTasks]);
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText, taskCategory) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      date: new Date().toISOString(),
      category: taskCategory,
      new: true,
      inProgress: false,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
        task.new = false;
        task.inProgress = false;
      }
      return task;
    });
    setTasks(updatedTasks);
    if (updatedTasks.some((task) => task.completed)) {
      setTasks(
        updatedTasks.sort((a, b) => {
          if (a.completed) return 1;
          return -1;
        })
      );
    }
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h4 className="text-center mb-4">Praveen To-Do List</h4>
      <div className="form-body mb-4">
        <TodoForm addTask={addTask} />
      </div>
      <TodoList
        tasks={tasks}
        onCheckboxChange={handleCheckboxChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText, taskCategory);
    setTaskText("");
    setTaskCategory("Personal");
  };

  return (
    <form onSubmit={handleSubmit} className="table-body-wrapper">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <select
          className="form-select"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
          <option value="Home">Home</option>
          <option value="Others">Others</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

const TodoList = ({ tasks, onCheckboxChange, onDelete }) => {
  const categories = ["Personal", "Office", "Home", "Others"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="mb-4 table-body-wrapper">
          <h5>{category}</h5>
          <hr />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks
                .filter((task) => task.category === category)
                .map((task, index) => (
                  <tr key={task.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{task.text}</td>
                    <td>{new Date(task.date).toLocaleString()}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onCheckboxChange(task.id)}
                      />
                      {task.completed ? "Completed" : "In Progress"}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(task.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
