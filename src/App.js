import "./styles.css";
import React, { useState } from "react";
// import Counter from "./Class";
import Card from "./card";
export default function App() {
  const arr = ["apple", "banana", "orange"];
  const [color, setcolor] = useState();

 
  
  return (
    <div className="App">
      {arr.map((e) => {
        return <Card name={e}  />;
      })}

    </div>
  );
    }
