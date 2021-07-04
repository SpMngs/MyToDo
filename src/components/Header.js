import React from "react";
import PropTypes from "prop-types";
import ToggleViewButton from "./ToggleViewButton";

const Header = ({title, onTaskAddView, onTaskAddViewFlag}) => {

  return (
    <header className="title-bar">
      <h1> {title} </h1>
      <ToggleViewButton
          color={onTaskAddViewFlag ? "blue" : "green"}
          text={onTaskAddViewFlag ? "Show Tasks Lilst" : "Add more Tasks"}
          onClick={onTaskAddView}
      />
    </header>
  );
};

// Default Header Title
Header.defaultProps = {
  title: "My To-Do List",
};

// Type system for Header's properties
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
