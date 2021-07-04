import React from "react";
import { useState } from "react";
import taskState from "./taskState";


const AddTaskField = ({ onAddTask }) => {

  const [taskTitle, setText] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);
  const [taskState, setTaskState] = useState("active");
  const [taskDate, setDate] = useState("");
  const [tag, setTag] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle) {
      alert("Please type a itle for your new task");
      return;
    }

    onAddTask({
      taskTitle,
      taskDescription,
      taskDate,
      reminder,
      taskState,
      tag,
    });
    
    setText("");
    setDescription("");
    setDate("");
    setTaskState("active");
    setReminder(false);
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
          onChange={(e) => setText(e.target.value)}
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
      
      <div style={{ width: "50%" }} className="form-control">
        <label> Tags </label>
        <select
          required
          type="text"
          placeholder="Add Tag"
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
        <div className="form-control" style={{ width: "100%" }}>
          <label>Select a Date </label>
          <input
            className="dateinput"
            type="date"
            value={taskDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div
          className="group-submit"
          style={{ paddingLeft: "10%", paddingTop: "25px" }}
        >
          <div className="form-control d-flex from-control-check">
            <label>Set Reminder </label>
            <input
              type="checkbox"
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>
        </div>
      </div>
      <div className="submitbtn" id="submitbtn">
        <input type="submit" value="Submit Task" className="btn" />
      </div>
    </form>
  );
};

export default AddTaskField;
