import React from "react";

import Sitemap from "./Sitemap";
import Accordion from "./Accordion";

import data from "./data.json";
import "./styles.css";

export default function App() {
  const [selectedItems, setSelectedItems] = React.useState({});

  return (
    <div className="App">
      <h1>Recursive Component rendering examples</h1>
      <p>
        <em>
          Please note: just playing around so markup probably won't be exactly
          semantically correct
        </em>{" "}
        😉
      </p>

      <section>
        <p>A basic sitemap list using recursive rendering with React.</p>

        <Sitemap items={data} />
      </section>

      <section>
        <p>
          We can take it a step further and create a simple navigation, with
          state tracking which items are open/closed.
        </p>

        <Accordion
          items={data}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </section>
    </div>
  );
}
