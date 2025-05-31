import Setup from "./Setup";
import { useState } from "react";
import data from "./data";

const App = () => {
  const [peoples, setPeoples] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        <Setup peoples={peoples} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            setPeoples([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
