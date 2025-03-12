import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import picturePro1 from "../../assets/images/project1.jpg";
import picturePro2 from "../../assets/images/project2.jpg";
import picturePro3 from "../../assets/images/project3.jpg";
import picturePro4 from "../../assets/images/project4.jpg";
import picturePro5 from "../../assets/images/project5.jpg";
import Pro1 from "./Pro1";
import Pro2 from "./Pro2";
import Pro3 from "./Pro3";
import Pro4 from "./Pro4";
import Pro5 from "./Pro5";

const MyProjects = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="tracking-widest font-bold text-4xl text-slate-700 mb-6">
        My Projects
      </h1>
      {/* <nav>
       <NavLink to="/myprojects/pro1">Project 1</NavLink>
        <NavLink to="/myprojects/pro2">Project 2</NavLink>
        <NavLink to="/myprojects/pro3">Project 3</NavLink>
        <NavLink to="/myprojects/pro4">Project 4</NavLink> 

        <NavLink to="/myprojects/pro1">Project 1</NavLink>
        <NavLink to="/myprojects/pro2">Project 2</NavLink>
        <NavLink to="/myprojects/pro3">Project 3</NavLink>
        <NavLink to="/myprojects/pro4">Project 4</NavLink>
        <NavLink to="/myprojects/pro5">Project 5</NavLink>
      </nav> */}
      <section className="grid sm:grid-cols-1 md:grid-col-1 lg:grid-cols-2 gap-8">
        {/* Project 1 */}
        <a
          onClick={() => navigate("/myprojects/pro1")}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-purple-900 mb-10 curser-pointer"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={picturePro1}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project 1
            </h2>
            <h3 className=" text-gray-900 dark:text-red-200">
              ANALYTICS WITH JELLYBEANS
            </h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              ut quibusdam ipsa consequatur libero eveniet cum minima nostrum
              adipisci? In debitis eaque voluptas cupiditate commodi.
            </p>
          </div>
        </a>
        {/* Project 2 */}
        <a
          onClick={() => navigate("/myprojects/pro2")}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-purple-900 mb-10 curser-pointer"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={picturePro2}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project 2
            </h2>
            <h3 className=" text-gray-900 dark:text-red-200">
              GEOMETRICS IN THE 1970'S
            </h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Laboriosam impedit officiis autem aperiam quod asperiores
              distinctio, soluta neque dolores saepe, pariatur ducimus
              repellendus recusandae iste!
            </p>
          </div>
        </a>
        {/* Project 3 */}
        <a
          onClick={() => navigate("/myprojects/pro3")}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-purple-900 mb-10 curser-pointer"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={picturePro3}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project 3
            </h2>
            <h3 className=" text-gray-900 dark:text-red-200">
              ACHITECTURE MEETING FRONTEND
            </h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Veniam, nesciunt fugiat est dolorum voluptate rerum distinctio
              exercitationem alias quasi dolores.
            </p>
          </div>
        </a>
        {/* Project 4 */}
        <a
          onClick={() => navigate("/myprojects/pro4")}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-purple-900 mb-10 curser-pointer"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={picturePro4}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project 4
            </h2>
            <h3 className=" text-gray-900 dark:text-red-200">ORIGAMI MAGIC</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Esse, itaque aliquam. Sequi reprehenderit iste vero a cupiditate,
              possimus minus odio error maiores saepe amet, exercitationem ipsa
              perspiciatis ipsum quasi nesciunt?
            </p>
          </div>
        </a>
        {/* Project 5 */}
        <a
          onClick={() => navigate("/myprojects/pro5")}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-purple-900 mb-10 curser-pointer"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={picturePro5}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project 5
            </h2>
            <h3 className=" text-gray-900 dark:text-red-200">TECHNO CRYPTIC</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Voluptate cum magnam harum minima nam placeat culpa pariatur sunt,
              tempora autem enim, eos quisquam iste repellendus expedita. Id
              illum libero suscipit!
            </p>
          </div>
        </a>
      </section>
    </>
  );
};

export default MyProjects;
