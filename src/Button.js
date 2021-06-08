import React from "react";

const Button = ({ onClickEvent, disabled }) => {
  return (
    <button
      className="buttonGetCity"
      type="submit"
      disabled={disabled}
      onClick={onClickEvent}
    >
      Search Books
    </button>
  );
};

export default Button;
