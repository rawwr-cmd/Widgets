import React from "react";
import Accordion from "./Accordion";
const items = [
  {
    title: "What is React?",
    content: "React is  a framework",
  },
  {
    title: "How do we show?",
    content: "contents",
  },
  {
    title: "Why is React useful?",
    content: "Engineers are in love with react",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
