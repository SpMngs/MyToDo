import React from "react";
import { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import dummyLists from "./components/dummyLists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import taskState from "./components/taskState";
import TasksGroups from "./components/TasksGroups";
import AddTaskField from "./components/AddTaskField";
import shortid from "shortid";
import swal from "sweetalert";


const App = () => {

  const [taskAddView, setTaskAddView] = useState(false);
  const [tasksLists, setTasksLists] = useState(dummyLists);
  const [listTasks, setListTasks] = useState([]);


  // ================== Methods ==========================
  
  /***  onAddTask: Add a new task to a list ***/
  
  const onAddTask = (task) => {
    const id = shortid.generate();
    const newTask = { id, ...task };
    
    var flag = false;
    for (const [keys, _] of tasksLists.entries()) {
      if (tasksLists[keys].date === task.taskDate) {
        flag = true;
        tasksLists[keys].todos.push(newTask);
        setTasksLists(tasksLists);
        const task = tasksLists;
        setTasksLists([]);
        setTasksLists(task);
        setTasksLists((e) => [...e, task]);
      }
    }

    // create a new list and add the task 
    if (flag === false) {
      createNewList(newTask);
    }
  };

  /***  createNewList: Generates a list ***/
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


  /***  onDeleteTask: Remove a task from a list ***/
 
  const onDeleteTask = (id) => {

    swal({
      title: "Are you sure?",
      text: "You are about to remove a task from your list",
      icon: "warning",
      buttons: true,
      dangerMode:true
    }).then(res => {if(res){
      setListTasks((e) => e.filter((task) => task.id !== id));
      onUpdateTasksLists(id, listTasks);}
    })

    // setListTasks((e) => e.filter((task) => task.id !== id));
    // onUpdateTasksLists(id, listTasks);
  };

  const onUpdateTasksLists = (id, todos) => {
    const updateLists = tasksLists.map((list) => {
      list.todos = list?.todos?.filter((val) => val.id !== id);
      return list;
    });
    
    const newList = updateLists?.filter((list) => list?.todos?.length !== 0);
    setTasksLists((e) => [...newList]);
  };


/***  onEditTask: Update the task's content ***/

const onEditTask = (id, editingText, tag, date, description) => {
  //here i pass tag data and description
  let temp = null;
  const updateLists = tasksLists?.map((list) => {
    list.todos = list.todos
      ?.map((val) => {
        if (val?.id === id) {
          //here i check the date
          val.taskTitle = editingText;
          val.taskDescription = description;
          val.taskDate = date;
          val.tag = tag;
          if (date !== list.date) {
            temp = val;
            return null;
          } 
        }
        return val;
      })
      .filter(Boolean);

    return list;
  });

  if (temp) {
    // here i add  the task if  the date is not same
    onAddTask(temp);
  }

  //here i filter the array
  const newList = updateLists?.filter((list) => list?.todos?.length !== 0);
  //here i set the task list
  setTasksLists((e) => [...newList]);
};


/***  onTaskStatusUpdate: Update the task's completion status ***/

  const onTaskStatusUpdate = (id, checkValue) => {
    const updated = tasksLists?.map((item) => {
      item?.todos?.map((task) => {

        if (task.id === id) {
          if (checkValue) {
            task.taskState = taskState.COMPLETE //"complete";
          } else {
            task.taskState = taskState.ACTIVE //"active";
          }
        }
        return task;
      });
      return item;
    });
    setTasksLists((e) => [...updated]);
  };


// ********** App main body ***************************
return (
  <Router >
    <div className="container">
      <Header
        title="My ToDo List"
        onTaskAddView={() => setTaskAddView(!taskAddView)}
        onTaskAddViewFlag={taskAddView}
      />
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            {taskAddView && <AddTaskField onAddTask={onAddTask} />}
            {tasksLists.length>0 ? (
            <TasksGroups
              tasksLists={tasksLists}
              onDelete={onDeleteTask}
              onEdit={onEditTask}
              onTaskStatusUpdate={onTaskStatusUpdate}
            />
         
          ) : ( <h2 style={{textAlign: "center"}}>No tasks to show</h2>)}
         </>
      )}
      />
      {/* <Route path="/about" component={About} /> */}
      <Footer />
    </div>
  </Router>
);
};

export default App;



