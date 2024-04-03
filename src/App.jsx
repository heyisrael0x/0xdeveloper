import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import { Hero } from "./components";
import { Section1 } from "./components";
import { Section2, Section3, Section4 } from "./components";
import { Footer } from "./components";
function App() {
  return (
    <div>
      <div className="bg">
        <Header />
        <Hero />
      </div>
      <Section1 />
      <Section3 />
      <Section2 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <input
  aria-label="Resource Name"
  data-testid="resource-deletion-modal/name-input"
  name="resourceName"
  pattern="\s*gb0g0/supabase-nextjs-todo-list\s*"
  required=""
  aria-invalid="false"
  autocapitalize="none"
  autocomplete="off"
  autocorrect="off"
  class="input_input__1Zknj"
  data-geist-input=""
  spellcheck="false"
  type="text"
></input>; */
}
