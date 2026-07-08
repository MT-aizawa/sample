import React, { useEffect, useRef, useState } from "react";
import {
  FluentProvider,
  webLightTheme,
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  DrawerFooter,
  Toolbar,
  ToolbarButton
} from "@fluentui/react-components";
import cytoscape from "cytoscape";

// ノードデータ型
type NodeData = {
  id: string;
  label: string;
  type: string;
};

export default function TopologyCytoscape() {
  const cyRef = useRef<HTMLDivElement | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const cyInstance = useRef<cytoscape.Core | null>(null);

  useEffect(() => {
    if (cyRef.current) {
      const cy = cytoscape({
        container: cyRef.current,
        elements: [
          { data: { id: "a", label: "Server A", type: "Server" }, position: { x: 100, y: 100 } },
          { data: { id: "a1", label: "Server B", type: "Server" }, position: { x: 100, y: 200 } },
          { data: { id: "b", label: "FC Switch B", type: "Switch" }, position: { x: 300, y: 100 } },
          { data: { id: "c", label: "Storage C", type: "Server" }, position: { x: 500, y: 200 } },
          { data: { id: "d", label: "Storage D", type: "Server" }, position: { x: 500, y: 240 } },
          { data: { source: "a", target: "b",lable:"FC" } },
          { data: { source: "a1", target: "d",label:"iSCSI" } },
          { data: { source: "b", target: "c",lable:"iSCSI" } }
        ],
        style: [
          {
            selector: "node",
            style: {
              "background-color": webLightTheme.colorBrandBackground,
              label: "data(label)",
              color: "#0d0c0c",
             // "text-valign": "center",
              "text-halign": "center",
              "font-size": 12,
              "border-width": 2,
              "border-color": "#ccc"
            }
          },
          {
            selector: "edge",
            style: {
              width: 2,
              label: "data(label)",
              "font-size": 12,
              "line-color": "#999",
              "target-arrow-color": "#999",
              "target-arrow-shape": "triangle",
              
            }
          },
          {
            selector: "node:selected",
            style: {
              "border-width": 3,
              "border-color": "#ff9800"
            }
          }
        ],
        layout: { name: "preset" }, // 初期位置を固定
        userZoomingEnabled: true,
        userPanningEnabled: true,
        boxSelectionEnabled: false,
        autoungrabify: false // ノードドラッグを許可
      });

      // ノードクリック
      cy.on("tap", "node", (evt) => {
        const nodeData = evt.target.data() as NodeData;
        setSelectedNode(nodeData);
        setDrawerOpen(true);
      });

      // 背景クリック
      cy.on("tap", (evt) => {
        if (evt.target === cy) {
          setDrawerOpen(false);
          setSelectedNode(null);
        }
      });

      cyInstance.current = cy;
    }
  }, []);

  // ズーム制御
  const zoomIn = () => {
    if (cyInstance.current) {
      cyInstance.current.zoom(cyInstance.current.zoom() * 1.2);
      cyInstance.current.center();
    }
  };

  const zoomOut = () => {
    if (cyInstance.current) {
      cyInstance.current.zoom(cyInstance.current.zoom() / 1.2);
      cyInstance.current.center();
    }
  };

  const resetView = () => {
    if (cyInstance.current) {
      cyInstance.current.fit();
    }
  };

  return (
    <FluentProvider theme={webLightTheme}>
      {/* ツールバー */}
      <Toolbar style={{ marginBottom: 8 }}>
        <ToolbarButton onClick={zoomIn}>＋ ズームイン</ToolbarButton>
        <ToolbarButton onClick={zoomOut}>－ ズームアウト</ToolbarButton>
        <ToolbarButton onClick={resetView}>🔄 リセット</ToolbarButton>
      </Toolbar>

      <div style={{ display: "flex", height: "400px" }}>
        {/* トポロジー描画領域 */}
        <div
          ref={cyRef}
          style={{ flex: 1, border: "1px solid #ccc", borderRadius: 4 }}
        />

        {/* 詳細パネル */}
        <Drawer
          open={isDrawerOpen}
          position="end"
          onOpenChange={(_, data) => setDrawerOpen(data.open)}
        >
          <DrawerHeader>
            <DrawerHeaderTitle>
              {selectedNode ? selectedNode.label : "詳細"}
            </DrawerHeaderTitle>
          </DrawerHeader>
          <DrawerBody>
            {selectedNode ? (
              <>
                <p><strong>ID:</strong> {selectedNode.id}</p>
                <p><strong>タイプ:</strong> {selectedNode.type}</p>
                <p>ここに追加情報を表示できます。</p>
              </>
            ) : (
              <p>ノードを選択してください。</p>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button appearance="secondary" onClick={() => setDrawerOpen(false)}>
              閉じる
            </Button>
          </DrawerFooter>
        </Drawer>
      </div>
    </FluentProvider>
  );
}
