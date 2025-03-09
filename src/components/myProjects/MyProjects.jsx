import React from "react";
import { NavLink } from "react-router-dom";

const MyProjects = () => {
  return (
    <nav>
      <h1>My Projects</h1>
      <NavLink to="/myprojects/pro1">Project 1</NavLink>
      <NavLink to="/myprojects/pro2">Project 2</NavLink>
      <NavLink to="/myprojects/pro3">Project 3</NavLink>
      <NavLink to="/myprojects/pro4">Project 4</NavLink>
    </nav>
  );
};

export default MyProjects;
