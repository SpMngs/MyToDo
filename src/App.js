import React from "react";
import { useState } from "react";
import dummyLists from "./components/dummyLists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import TasksGroups from "./components/TasksGroups";
import AddTaskField from "./components/AddTaskField";
import shortid from "shortid";

const App = () => {

  const [taskAddView, setTaskAddView] = useState(false);
  const [tasksLists, setTasksLists] = useState(dummyLists);
  const [listTasks, setListTasks] = useState([]);

  // addTask method, add a new task to the tasks' list
  const onAddTask = (task) => {
    const id = shortid.generate();
    const newTask = { id, ...task };
    console.log("IN CREATE NEW TASK", newTask);
    
    var flag = false;
    for (const [keys, _] of tasksLists.entries()) {
      if (tasksLists[keys].date === task.taskDate) {
        flag = true;
        tasksLists[keys].todos.push(newTask);
        setTasksLists(tasksLists);
        // const task = tasksLists;
        // setTasksLists([]);
        // setTasksLists(task);
        // setTasksLists((e) => [...e, task]);
      }
    }
    console.log("flag", flag);
    if (flag === false) {
      createNewList(newTask);
    }
  };
  
  const createNewList = async (task) => {
    const id = task.taskDate;
    const todos = [task];
    const date = task.taskDate;
    const newList = { id, todos, date };
    const updateLists = tasksLists?.filter((list) => list?.todos?.length !== 0);
    updateLists.push(newList);
    await setTasksLists((e) => []);
    setTasksLists((e) => [...updateLists]);
  };

  console.log("IN APP");
  return (
    <div className="container">
        <Header
          title="My ToDo List"
          onTaskAddView={() => setTaskAddView(!taskAddView)}
          onTaskAddViewFlag={taskAddView}
        />
        {taskAddView && <AddTaskField onAddTask={onAddTask} />}
        <TasksGroups
          tasksLists={tasksLists}
        />
        <Footer />
    </div>
    );
  };

export default App;


