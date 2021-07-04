import React from "react";
import { useState } from "react";
import dummyLists from "./components/dummyLists";
import dummyTasks from "./components/dummyTasks";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {

  const [taskAddView, setTaskAddView] = useState(false);
  const [tasksLists, setTasksLists] = useState(dummyLists);
  const [listTasks, setListTasks] = useState([]);

  console.log("IN APP");
  return (
      <div className="container">
        <Header
          title="My ToDo List"
          onTaskAddView={() => setTaskAddView(!taskAddView)}
          onTaskAddViewFlag={taskAddView}
        />
        <Footer />
      </div>
    );
  };

export default App;


