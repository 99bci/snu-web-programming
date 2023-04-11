import React from "react";
import World from "./world";

export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="Apple" />!
      </h1>

      <img src="magritte.jpeg" alt="apple" />
    </>
  );
}
