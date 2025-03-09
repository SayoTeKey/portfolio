import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import MyProjects from "./components/myProjects/MyProjects";
import Navigation from "./components/Navigation/Navigation";
import Pro1 from "./components/myProjects/Pro1";
import Pro2 from "./components/myProjects/Pro2";
import Pro3 from "./components/myProjects/Pro3";
import Pro4 from "./components/myProjects/Pro4";
import Pro5 from "./components/myProjects/Pro5";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative bg-tori h-[500px] w-full -z-10 bg-cover bg-no-repeat bg-fixed"></div>
      <div className="z-10 absolute w-[60%]  left-1/2 transform -translate-x-1/2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="myprojects" element={<MyProjects />}>
                <Route path="pro1" element={<Pro1 />} />
                <Route path="pro2" element={<Pro2 />} />
                <Route path="pro3" element={<Pro3 />} />
                <Route path="pro4" element={<Pro4 />} />
                <Route path="pro5" element={<Pro5 />} />
              </Route>
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
