import React from "react";
import {Accordion} from "../Accordion";

export function App() {
  return (
      <div>
        <Accordion
            title="Hi, what's your name?"
            content="My name is Scooby Dooby Doo."
        />
        <Accordion
            title="Which languages do you speak?"
            content="I speak only animal langs."
        />
        <Accordion
            title="And how old are you?"
            content="I am  9 years old" />
      </div>
  );
}
