import './App.css';
import React, { useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import todoServices from './services/todo-services';
import { async } from '@firebase/util';

function App() {
  const [task, setTask] = useState("");
  const [timeLine, setTimeLine] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const handleSelectChange = async (event, id) => {
    let selectedObject = tasks.find((option) => option.id === id);
    selectedObject.status = event.target.value;
    await todoServices.updateTask(id,selectedObject);
    getTasks();
  };

  const getTasks = async () => {
    const data = await todoServices.getAllTasks();
    console.log(data);
    setTasks(data.docs.map((doc) => (
      {
        ...doc.data(),
        id: doc.id
      }
    )
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dateTimeStamp = new Date();

    if (timeLine) {
      switch (timeLine) {
        case "today":
          dateTimeStamp = getDate(0);
          break;
        case "week":
          dateTimeStamp = getDate(7);
          break;
        case "month":
          dateTimeStamp = getDate(30);
          break;
        case "year":
          dateTimeStamp = getDate(365);
          break;
        default:
          break;

      }
    }


    const newTask = {
      task,
      dateTimeStamp,
      status: 1
    };
    console.log(newTask);
    await todoServices.addTasks(newTask);
    getTasks();
  };

  const getDate = (n) => {
    var getdateTimeStamp = new Date();
    var today = new Date(getdateTimeStamp.getTime() + n * 24 * 60 * 60 * 1000);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    return new Date(today);
  }

  return (

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3'>

        </div>
        <div className='col-9'>
          <div className='row'>
            <div className='col-3'>
              <div className="App text-start">
                <form onSubmit={handleSubmit}>
                  <div className=''>
                    <h2>Praveen To-Do List</h2>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="task" className="form-label">Add new task</label>
                    <input type="text" className="form-control" id="task" aria-describedby="emailHelp" value={task} onChange={(e) => setTask(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <select className="form-select" aria-label="Default select example" value={timeLine} onChange={(e) => setTimeLine(e.target.value)} >
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="year">This Year</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-warning">Submit</button>
                </form>
              </div>
            </div>
            <div className='col-9'>

            </div>

          </div>
          <div className="row">
            <div className='col-6'>
              <div>
            <div className='table-label'>This Week</div>
              <Table bordered hover size="sm">
                <thead>
                  <tr>
                    <th>SL No</th>
                    <th>Task Title</th>
                    <th>Due Date</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {tasks.map((doc, index) => {
                    return (
                      (Math.ceil((new Date(doc.dateTimeStamp.toDate().toDateString()) - new Date()) / (86400000)) <
                        6) && ( doc.status != 3) ?
                        <tr key={doc.id}>
                          <td>{index + 1}</td>
                          <td>{doc.task}</td>
                          <td>{doc.dateTimeStamp.toDate().toDateString()}</td>
                          <select className='form-select' value={doc.status} onChange={(e) => handleSelectChange(e, doc.id) }>
                            <option value="1">Not Started</option>
                            <option value="2">In Progress</option>
                            <option value="3">Done</option>
                          </select>
                        </tr>
                        :
                        <tr key={doc.id}>
                        </tr>
                    );
                  })}
                </tbody>
              </Table>
              </div>
              <div>
              <div className='table-label'>This Month</div>
              <Table  bordered hover size="sm">

                <tbody>
                  {tasks.map((doc, index) => {
                    return (
                      (Math.ceil((new Date(doc.dateTimeStamp.toDate().toDateString()) - new Date()) / (86400000)) <
                        31 && Math.ceil((new Date(doc.dateTimeStamp.toDate().toDateString()) - new Date()) / (86400000)) > 6) ?
                        <tr key={doc.id}>
                          <td>{index + 1}</td>
                          <td>{doc.task}</td>
                          <td>{doc.dateTimeStamp.toDate().toDateString()}</td>
                          <td>
                          <select className='form-select'  value={doc.status} onChange={(e) => handleSelectChange(e, doc.id) }>
                            <option value="1">Not Started</option>
                            <option value="2">In Progress</option>
                            <option value="3">Done</option>
                          </select>
                          </td>
                        </tr>
                        :
                        <tr key={doc.id}>
                        </tr>
                    );
                  })}
                </tbody>
              </Table>
              </div>
              <div>
              <div className='table-label'>This year</div>
              <Table bordered hover size="sm">
                <tbody>
                  {tasks.map((doc, index) => {
                    return (
                      Math.ceil((new Date(doc.dateTimeStamp.toDate().toDateString()) - new Date()) / (86400000)) >
                        31 ?
                        <tr key={doc.id}>
                          <td>{index + 1}</td>
                          <td>{doc.task}</td>
                          <td>{doc.dateTimeStamp.toDate().toDateString()}</td>
                          <td>
                            <select className='form-select'  value={doc.status} onChange={(e) => handleSelectChange(e, doc.id) }>
                            <option value="1">Not Started</option>
                            <option value="2">In Progress</option>
                            <option value="3">Done</option>
                          </select>
                          </td>
                        </tr>
                        :
                        <tr key={doc.id}>
                        </tr>
                    );
                  })}
                </tbody>
              </Table>
              </div>
            </div>
            <div className='col-6'>
            <div>
              <div className='table-label'>Completed Tasks</div>
              <Table bordered hover size="sm">
                <tbody>
                  {tasks.map((doc, index) => {
                    return (
                      doc.status == 3
                        ?
                        <tr key={doc.id}>
                          <td>{index + 1}</td>
                          <td>{doc.task}</td>
                          <td>{doc.dateTimeStamp.toDate().toDateString()}</td>
                          <td>
                            <select className='form-select' value={doc.status} disabled>
                            <option value="1">Not Started</option>
                            <option value="2">In Progress</option>
                            <option value="3">Done</option>
                          </select>
                          </td>
                        </tr>
                        :
                        <tr key={doc.id}>
                        </tr>
                    );
                  })}
                </tbody>
              </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
