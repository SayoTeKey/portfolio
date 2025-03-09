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
        <NavLink
          className="text-center px-6 hover:text-purple-950 hover:font-extrabold hover:uppercase"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

{
  /* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */
}
