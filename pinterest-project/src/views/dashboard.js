import React from "react";
import { Link } from "react-router-dom";
import PinButton from "../components/button";

const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{marginLeft:'auto'}}>
          <PinButton variant="primary">Log in</PinButton>
          <PinButton variant="secondary">Sign up</PinButton>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
