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
    <div style={{ width: 700, height: 400, overflow: "hidden" }}>
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
