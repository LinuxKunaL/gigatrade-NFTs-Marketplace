import React from "react";

import Section_1 from "./Components/Section_1";
import Section_2 from "./Components/Section_2";
import Section_3 from "./Components/Section_3";
import Section_4 from "./Components/Section_4";
import Section_5 from "./Components/Section_5";

function Home() {

  return (
    <div id="home" className="flex flex-col justify-around px-4 mt-7">
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
    </div>
  );
}

export default Home;
