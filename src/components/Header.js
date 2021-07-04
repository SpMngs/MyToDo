import React from "react";
import PropTypes from "prop-types";

const Header = ({title}) => {

  return (
    <header className="title-bar">
      <h1> {title} </h1>
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
