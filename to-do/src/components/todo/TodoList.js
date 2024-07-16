import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
    const savedUserName = sessionStorage.getItem("userName") || "My To-Do List";
    setUserName(savedUserName);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    sessionStorage.setItem("userName", userName);
  }, [userName]);

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
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleNameEdit = (e) => {
    e.preventDefault();
    setIsEditingName(false);
  };

  return (
    <div className="container mt-5-custom">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {isEditingName ? (
          <form onSubmit={handleNameEdit} className="d-flex">
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button className="btn btn-primary ms-2" type="submit">
              Save
            </button>
          </form>
        ) : (
          <>
            <h4>{userName}</h4>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditingName(true)}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <div className="form-body mb-4">
        <TodoForm addTask={addTask} />
      </div>
      <TodoList
        tasks={tasks}
        onCheckboxChange={handleCheckboxChange}
        onDelete={handleDelete}
      />
      <div className="alert alert-warning mt-4" role="alert">
        All the data is stored in your browser and will be deleted if you clear your browser cache.
      </div>
      <p class="mt-4">Feel free to email @ <a href="mailto:praveen_mp@live.com">praveen_mp@live.com</a> if you have any questions or suggestions. Thank you for visiting!</p>
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
      <div className="row">
        <div className="col-md-6 mb-2-mobile">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        </div>
        <div className="col-md-4 mb-2-mobile">
        <select
          className="form-select"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
          <option value="Home">Home</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>
        </div>
        <div className="col-md-2">
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
        </div>
      </div>
    </form>
  );
};

const TodoList = ({ tasks, onCheckboxChange, onDelete }) => {
  const categories = ["Personal", "Office", "Home", "Shopping", "Others"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="mb-4 table-body-wrapper">
          <h5>{category}</h5>
          <hr />
          <div class="table-responsive">
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
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
