import * as React from "react";
import { FluentProvider, webLightTheme, Button, Card } from "@fluentui/react-components";
import ReactFlow, { Background, Controls, MiniMap, Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

// ノードとエッジの型定義
const initialNodes: Node[] = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "ServerA" }, type: "default" },
  { id: "2", position: { x: 100, y: 200 }, data: { label: "ServerB" }, type: "default" },
  { id: "3", position: { x: 300, y: 200 }, data: { label: "Switch" }, type: "default" },
  { id: "4", position: { x: 500, y: 100 }, data: { label: "StorageA" }, type: "default" },
  { id: "5", position: { x: 500, y: 200 }, data: { label: "StorageB" }, type: "default" },

];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "3" ,label:"FC"},
  { id: "e2-3", source: "2", target: "3" ,label:"iSCSI"},
  { id: "e2-5", source: "5", target: "3" ,label:"iSCSI"},
];

export default function TopologyView() {
  const [nodes, setNodes] = React.useState<Node[]>(initialNodes);
  const [edges, setEdges] = React.useState<Edge[]>(initialEdges);

  return (
    <FluentProvider theme={webLightTheme} style={{ height: "100vh" }}>
{/*       <Card style={{ padding: "8px", marginBottom: "8px" }}>
        <Button appearance="primary" onClick={() => alert("Add Node Clicked")}>
          ノード追加
        </Button>
      </Card> */}

      <div style={{ height: "90%", border: "1px solid #ccc" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
         {/*  <MiniMap /> */}
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </FluentProvider>
  );
}
