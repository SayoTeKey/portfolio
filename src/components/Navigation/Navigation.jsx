import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="bg-red-200 fixed top-[50px] shadow-lg mx-2 px-4 pb-2 pt-2 tracking-widest rounded grid grid-cols-3 gap-x-5 divide-purple-950 text-grey-600">
        <NavLink
          className="text-center px-4 hover:text-purple-950 hover:font-extrabold hover:uppercase"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-center px-8 hover:text-purple-950 hover:font-extrabold hover:uppercase"
          to="/myprojects"
        >
          My Projects
        </NavLink>
        <NavLink
          className="text-center px-6 hover:text-purple-950 hover:font-extrabold hover:uppercase"
          to="/aboutme"
        >
          About Me
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
