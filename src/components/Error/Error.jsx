import React from "react";
import panda from "../../assets/images/red-panda-confused.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Error = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(15);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prev) => prev - 1);
  //   }, 1000);

  //   const timeout = setTimeout(() => navigate("/"), 15000);

  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timeout);
  //   };
  // }, [navigate]);

  return (
    // <div className="relative h-screen w-fit grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
    <div className="relative h-auto w-fit flex sm:flex-wrap md:flex-wrap lg:flex-row gap-8 ">
      {/* Error 404 */}
      <h1 className="absolute -top-[202px] left-0 tracking-widest font-extrabold text-6xl mt-14">
        Error 404
      </h1>
      <h2 className="absolute -top-[60px] left-0 text-3xl">
        Sorry, this page is not found!
      </h2>
      <section className="w1/2 h-10">
        <p>Please check your address!</p>
        <br />
        <p>Maybe one of these will point you in the right direction?</p>
        {/* verlinkung zu allen seiten */}
        <nav className="mt-10 mb-10">
          <ul className="grid grid-cols-3 gap-x-5">
            <li className=" border-y hover:shadow-2xl-green-400 pt-5 justify-center">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="border-y pt-5">
              <NavLink to="/aboutme">About Me</NavLink>
            </li>
            <li className="border-y pt-5">
              <NavLink to="/myprojects">My Projects</NavLink>
            </li>
          </ul>
        </nav>
        <p>Redirecting to "Home" in {count} seconds....</p>
      </section>
      <section className="w1/2">
        <img src={panda} alt="red panda is confused- page not found" />
      </section>
    </div>
  );
};

export default Error;
