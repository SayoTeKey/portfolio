import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <section className="absolute">
        <h1 className=" top-0 z-10 font-bold text-4xl text-slate-700">
          Welcome to my Homepage
        </h1>
        <h2>I'm an UX-UI-designer and future frontend developer</h2>
        <button className="btn btn-danger">Let's chat</button>
      </section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
