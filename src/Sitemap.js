import React from "react";
import { hasChildren } from "./utils";

export default function Sitemap({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.name}

            {/* ✨ Yay for recursion! ✨ */}
            {hasChildren(item) && <Sitemap items={item.children} />}
          </li>
        );
      })}
    </ul>
  );
}
