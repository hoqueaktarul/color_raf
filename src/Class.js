import React, { useState } from "react";
export default function Counter() {
  const [Value, setvalue] = useState(0);
  return (
    <div>
      <input type="number" value={Value} />
      <button
        onClick={() => {
          setvalue(Value + 1);
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          setvalue(Value - 1);
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          setvalue(0);
        }}
      >
        reset
      </button>
    </div>
  );
}
