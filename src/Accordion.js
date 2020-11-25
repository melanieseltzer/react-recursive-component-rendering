import React from "react";
import {
  BsArrowDownShort as DownArrow,
  BsArrowRightShort as RightArrow
} from "react-icons/bs";
import { isOpen, hasChildren } from "./utils";

export default function Accordion({ items, selectedItems, setSelectedItems }) {
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
