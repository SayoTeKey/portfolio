import React from "react";
import panda from "../../assets/images/red-panda-confused.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Error = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useEffect();

  return (
    <div className="border-green-60">
      {/* Error 404 */}
      <h1 className="tracking-widest font-extrabold text-6xl mt-14">
        Error 404
      </h1>
      <h2 className="text-3xl">Page not found!</h2>
      <img src={panda} alt="red panda is confused- page not found" />
      <p>Please check your adress!</p>
      <p>Maybe one of these woll point you in the right direction?</p>
      {/* verlinkung zu allen seiten */}
      <nav className="mt-5 mb-5 ">
        <ul className="grid grid-cols-3 gap-x-5">
          <li className=" border-y">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="border-y">
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li className="border-y">
            <NavLink to="/myprojects">My Projects</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Error;
