import React from 'react';
import PropTypes from 'prop-types';

const ToggleViewButton = ({color, text, onClick}) => {
    return (
     <button 
        onClick = {onClick}
        style = {{backgroundColor: color}} 
        className = 'btn'>
        {text}
     </button>
    
     )
}

// Type system for Header's properties
ToggleViewButton.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default ToggleViewButton;
