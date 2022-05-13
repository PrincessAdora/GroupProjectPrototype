import React from "react";
import { BubbleChart } from "reaviz";

function BubbleButt(props) {
  return (
    <div style={{ margin: "55px", textAlign: "center" }}>
      <BubbleChart data={props.data} />
    </div>
  );
}

export default BubbleButt;
