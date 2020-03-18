import React from "react";
import { Sigma, RandomizeNodePositions, RelativeSize } from "react-sigma";
import "./SigmaBasic.css";

const SigmaBasic = function() {
  let myGraph = {
    nodes: [
      { id: "n1", label: "Alice" },
      { id: "n2", label: "Rabbit" },
      { id: "n3", label: "Hawk" },
      { id: "n4", label: "Joseph" },
      { id: "n5", label: "Adam" },
      { id: "n6", label: "Mad Man" }
    ],
    edges: [
      { id: "e1", source: "n1", target: "n2", label: "" },
      { id: "e2", source: "n2", target: "n3", label: "" },
      { id: "e3", source: "n3", target: "n4", label: "" },
      { id: "e4", source: "n5", target: "n6", label: "" },
      { id: "e5", source: "n6", target: "n1", label: "" }
    ]
  };

  return (
    <div>
      <Sigma
        graph={myGraph}
        settings={{ drawEdges: true, clone: false }}
        style={{ minHeight: "800px", maxWidth: "100%" }}
      >
        <RelativeSize initialSize={10} />
        <RandomizeNodePositions />
      </Sigma>
    </div>
  );
};

export default SigmaBasic;
