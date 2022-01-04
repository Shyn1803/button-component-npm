import React from 'react';
import './styles/Button.css';

const Button = (props) => {
  const { className, type, name, value, label, disabled, handleClick } = props;

  return (
    <button className={`btn-component-npm ${className || ''}`}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{label}</span>
    </button>
  )
};
export default Button;