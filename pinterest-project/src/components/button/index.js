import React from "react";
import "./style.css";

const PinButton = ({ children, variant }) => {
  return (
    <>
      <button className={`main_button_container ${variant}`}>
        {children}
      </button>
    </>
  );
};
export default PinButton;
