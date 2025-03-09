import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Error from "./components/Error/Error";
import MyProjects from "./components/myProjects/MyProjects";
import Navigation from "./components/Navigation/Navigation";
import Pro1 from "./components/myProjects/Pro1";
import Pro2 from "./components/myProjects/Pro2";
import Pro3 from "./components/myProjects/Pro3";
import Pro4 from "./components/myProjects/Pro4";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div className="relative bg-tori h-screen -z-10 w-screen bg-cover bg-no-repeat bg-fixed"></div>
      <div className="z-10  fixed">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="myprojects" element={<MyProjects />}>
                <Route path="pro1" element={<Pro1 />} />
                <Route path="pro2" element={<Pro2 />} />
                <Route path="pro3" element={<Pro3 />} />
                <Route path="pro4" element={<Pro4 />} />
              </Route>
              <Route path="aboutme" element={<AboutMe />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
