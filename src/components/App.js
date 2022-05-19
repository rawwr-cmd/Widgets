import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

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

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
