import React from "react";

import under_construction from ".././assets/images/under-construction.jpg";

const AboutMe = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-slate-700 mb-6">About Me</h1>
      <img className="w-full" src={under_construction} alt="working place" />
    </div>
  );
};

export default AboutMe;
