import React from "react";
import { useState } from "react";
import taskState from "./taskState";


const AddTaskField = ({ onAddTask }) => {

  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("active");
  const [taskDate, setDate] = useState("");
  const [tag, setTag] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle) {
      alert("Please type a title for your new task");
      return;
    }

    setTaskStatus(taskState.ACTIVE);
    onAddTask({
      taskTitle,
      taskDescription,
      taskDate,
      taskStatus,
      tag,
    });
    
    setTitle("");
    setDescription("");
    setDate("");
    setTaskStatus(taskState.ACTIVE);

  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task </label>
        <input
          required
          type="text"
          placeholder="Add a title for your task ..."
          value={taskTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label> Task Description </label>
        <input
          required
          type="text"
          placeholder="Add a brief description ..."
          value={taskDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <div style={{ width: "40%" }} className="form-control">
        <label> Tags </label>
        <select
          required
          type="text"
          placeholder="Add a Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="" disabled selected>
            Choose a Tag
          </option>
          <option value="Hobby">Hobby</option>
          <option value="Games">Games</option>
          <option value="Family">Family</option>
          <option value="Work">Work</option>
          <option value="Pets">Pets</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div>
      
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="form-control" style={{ width: "40%" }}>
          <label>Select a Date </label>
          <input
            className="dateinput"
            type="date"
            value={taskDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

      </div>
      <div className="submitbtn" id="submitbtn">
        <input type="submit" value="Submit Task" className="btn" />
      </div>
    </form>
  );
};

export default AddTaskField;
