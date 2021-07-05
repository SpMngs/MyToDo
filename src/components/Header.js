import React from "react";
import PropTypes from "prop-types";
import ToggleViewButton from "./ToggleViewButton";
import {useLocation} from "react-router-dom"

const Header = ({title, onTaskAddView, onTaskAddViewFlag}) => {

  const location = useLocation();

  return (
    <header className="title-bar">
      <h1> {title} </h1>
      {location.pathname === "/" && (
      <ToggleViewButton
          color={onTaskAddViewFlag ? "blue" : "green"}
          text={onTaskAddViewFlag ? "Show Tasks Lists" : "Add more Tasks"}
          onClick={onTaskAddView}
      />
      )}
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
