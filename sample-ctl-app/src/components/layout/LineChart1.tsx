import React, { useState, useEffect, useMemo } from "react";
import { LineChart, LineChartProps } from "@fluentui/react-charts";

interface ChartDataPoint {
  x: Date;  //Date型で保持　連続値
  y: number;
  xAxisCalloutData: string;  //ツールチップ用の時刻文字列
}

export default function IopsChart() {
  const MAX_POINTS = 120; // 表示する最大データ数
  const [dataPoints, setDataPoints] = useState<ChartDataPoint[]>([]);
 
 /*  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (event) => {
      try {
        const point = JSON.parse(event.data);
        setDataPoints((prev) =>{ 
         const updated = [...prev, point];
          // 最新MAX_POINTS件だけ保持
          return updated.length > MAX_POINTS
            ? updated.slice(updated.length - MAX_POINTS)
            : updated;
        });
      } catch (err) {
        console.error("Invalid WS data", err);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => ws.close();
  }, []);
*/
   useEffect(() => {  
     const interval = setInterval(() => {
      setDataPoints((prev) => {
        const now = new Date();
        const newPoint: ChartDataPoint = {
           x: now,
           y: Math.floor(Math.random() * 100),
           xAxisCalloutData: now.toLocaleString('ja-JP', { hour12: false}), //表示用
          };

        const updated = [...prev, newPoint];

        return updated.length > MAX_POINTS
        ? updated.slice(updated.length - MAX_POINTS)
        : updated;
        
      });
      
    }, 1000); 
    return () => clearInterval(interval);
  }, []); 
 
  const chartData:LineChartProps['data'] = useMemo(
    () => ({
       chartTitle: 'IOPS',
       lineChartData: [
          {
             legend: 'IOPS',
             data: dataPoints,
             color: 'blue',
          },
       ],
    }),
    [dataPoints]
  );

  return (
    <div style={{ width: "auto", height: 300}}>
      <LineChart
        data={chartData}
        xAxisTickCount={MAX_POINTS}
        enablePerfOptimization={true}
        xAxisTitle={'Time HH:MM:SS'}
        yAxisTitle={'IOPS'}
        hideLegend={true}
        tickFormat={'%-I:%M:%S %p'}      />
    </div>
  );
}
