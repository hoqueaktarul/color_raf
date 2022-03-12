import "./styles.css";
import React, { useState } from "react";
// import Counter from "./Class";
import Card from "./card";
export default function App() {
  const arr = ["apple", "banana", "orange"];
  const [color, setcolor] = useState();

  function calculatecolor(e) {
    if (e === "apple") {
      setcolor("red");
    } else if (e === "banana") {
      setcolor("green");
    } else if (e === "orange") {
      setcolor("orange");
    } else {
      return;
    }
  }
  return (
    <div className="App">
      {/* {arr.map((e) => {
        return <Card name={e} color={calculatecolor(e)} />;
      })} */}

      <Card name="aktarul" />
    </div>
  );
}
