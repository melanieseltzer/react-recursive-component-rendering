import React from "react";
import {
  BsArrowDownShort as DownArrow,
  BsArrowRightShort as RightArrow
} from "react-icons/bs";

import sitemap from "./data.json";
import { isOpen, hasChildren } from "./utils";

import "./styles.css";

function Sitemap({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.name}

            {/* ✨ Yay for recursion! ✨ */}
            {item.children && <Sitemap items={item.children} />}
          </li>
        );
      })}
    </ul>
  );
}

function Accordion({ items, selectedItems, setSelectedItems }) {
  const handleOnClick = (event, item) => {
    // Stops the parent onClick handler from running when clicking on a child
    event.stopPropagation();

    // We don't need to do anything if this item doesn't have children
    if (!hasChildren(item)) return;

    const { id } = item;

    setSelectedItems((state) => ({
      ...state,
      [id]: !state[id]
    }));
  };

  const renderArrow = (item) => {
    if (!hasChildren(item)) return null;
    return isOpen(item.id, selectedItems) ? <DownArrow /> : <RightArrow />;
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button onClick={(event) => handleOnClick(event, item)}>
            {item.name} {renderArrow(item)}
          </button>

          {/* ✨ Yay for recursion! ✨ */}
          {hasChildren(item) && isOpen(item.id, selectedItems) && (
            <Accordion
              items={item.children}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

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

        <Sitemap items={sitemap} />
      </section>

      <section>
        <p>
          We can take it a step further and create a simple navigation, with
          state tracking which items are open/closed.
        </p>

        <Accordion
          items={sitemap}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </section>
    </div>
  );
}
