import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-red-200 sticky top-10 shadow-lg mx-2 px-4 pb-2 pt-2 tracking-widest rounded grid grid-cols-4 gap-x-3 divide-purple-950 text-grey-600 z-50">
        <NavLink
          className="text-center px-4 hover:text-purple-950 hover:font-extrabold hover:uppercase"
          to="/"
        >
          Home
        </NavLink>
        <div className="relative text-center px-8">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-center px-8 hover:text-purple-950 hover:font-extrabold hover:uppercase"
            type="button"
            onClick={() => {
              const dropdown = document.getElementById("dropdown");
              dropdown.classList.toggle("hidden");
            }}
          >
            My Projects
            <svg
              className="w-2.5 h-2.5 ms-3 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-purple-900"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  onClick={() => navigate("/myprojects/pro1")}
                  className="block px-4 py-2 hover:bg-gray-800  dark:hover:bg-gray-800   dark:bg-purple-900"
                >
                  Project 1
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/myprojects/pro2")}
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800  dark:bg-purple-900"
                >
                  Project 2
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/myprojects/pro3")}
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800  dark:bg-purple-900"
                >
                  Project 3
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/myprojects/pro4")}
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800  dark:bg-purple-900"
                >
                  Project 4
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/myprojects/pro5")}
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800  dark:bg-purple-900"
                >
                  Project 5
                </a>
              </li>
            </ul>
          </div>
        </div>
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
