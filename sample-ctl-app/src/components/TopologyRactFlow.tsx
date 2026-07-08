// App.tsx
import React, { JSX, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Handle,
  Position,
  applyNodeChanges,
  NodeChange
} from "reactflow";
import "reactflow/dist/style.css";

import {
  Card,
  CardHeader,
  CardPreview,
  makeStyles
} from "@fluentui/react-components";
import {
  CheckmarkCircle24Filled,
  Warning24Filled,
  DismissCircle24Filled
} from "@fluentui/react-icons";


// 状態ごとの色とアイコン設定
type StatusType = "online" | "warning" | "offline";

interface NodeData {
  label: string;
  description: string;
  status: StatusType;
}
const statusStyles: Record<StatusType,{ borderColor: string; icon: JSX.Element }> = {
  online: {
    borderColor: "#107C10", // 緑
    icon: <CheckmarkCircle24Filled color="#107C10" />
  },
  warning: {
    borderColor: "#FFAA44", // オレンジ
    icon: <Warning24Filled color="#FFAA44" />
  },
  offline: {
    borderColor: "#A4262C", // 赤
    icon: <DismissCircle24Filled color="#A4262C" />
  }
};

// Fluent UI v9 用のスタイル
const useStyles = makeStyles({
  card: {
    width: "160px",
    height: "100px",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "2px solid",
    borderRadius: "8px",
    padding: "4px"
  },
  preview: {
    fontSize: "12px",
    color: "#666"
  }
});

// カスタムノードコンポーネント
const CustomNode: React.FC<{ data: NodeData}> = ({ data }) => {
  const styles = useStyles();
  const status = statusStyles[data.status] || statusStyles.offline;

  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <Card
        className={styles.card}
        style={{ borderColor: status.borderColor }}
      >
        <CardHeader
          header={data.label}
          description={status.icon}
        />
        <CardPreview className={styles.preview}>
          {data.description}
        </CardPreview>
      </Card>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

// ノードとエッジの初期データ
const defaultNodes: Node<NodeData>[] = [
  {
    id: "1",
    type: "customNode",
    position: { x: 100, y: 50 },
    data: {
      label: "Server",
      description: "Core network router",
      status: "online"
    },
     draggable: true
  },
  {
    id: "2",
    type: "customNode",
    position: { x: 100, y: 250 },
    data: {
      label: "Switch",
      description: "Distribution switch",
      status: "warning"
    },
     draggable: true
  },
  {
    id: "3",
    type: "customNode",
    position: { x: 300, y: 150 },
    data: {
      label: "Storage",
      description: "Application server",
      status: "offline"
    },
     draggable: true
  },
    {
    id: "4",
    type: "customNode",
    position: { x: 300, y: 350 },
    data: {
      label: "Storage",
      description: "Application server",
      status: "online"
    },
     draggable: true
  }
];

const defaultEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true ,label: "FC"},
  { id: "e1-3", source: "1", target: "3", animated: false, label: "iSCSI"},
  { id: "e1-4", source: "2", target: "4", animated: true, label: "FC"}
];
  const nodeTypes = { customNode: CustomNode };
export default function TopologyReactFlow() {

  const [nodes, setNodes] = useState<Node<NodeData>[]>(defaultNodes);
  const [edges] = useState<Edge[]>(defaultEdges);
  // applyNodeChanges を使って型安全に更新
 const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => {
      const updated = applyNodeChanges(changes, nds);
      return updated.map((node) => ({
        ...node,
        width: node.width ?? undefined,
        height: node.height ?? undefined
      }));
    });
  };
  return (
    <div style={{ width: "80%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
       fitView 
       nodesDraggable={true} // 全ノードドラッグ可能
       onNodesChange={onNodesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
