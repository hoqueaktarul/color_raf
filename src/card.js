import React, { useState } from "react";
export default function Card(props) {
  return (
    <div>
      <p style={{ background: "red" }}>{props.name}</p>
    </div>
  );
}
