import { useState, useEffect } from "react";
import { Sparkline, ISparklineProps } from '@fluentui/react-charting';
import { JSXElement } from "@fluentui/react-components";


//定数設定
const MAX_POINT = 120; //表示するデータ最大数
const UPDATE_INTERVAL_MS = 1000; //更新間隔(ms)

//データ型定義
interface IDataPoint {
    x: number;
    y: number;
}

export default function IopsLineSpark():JSXElement {
    //初期データ生成
    const [data, setData] = useState<IDataPoint[]>(
       Array.from({ length : MAX_POINT }, (_, i) => ({
        x: i,
        y: Math.floor(Math.random() * 50) + 50, //50～100の範囲
      }))
    );

    const [tick, setTick] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setData((prev) => {
                const nextY = Math.floor(Math.random() * 50) + 50;
                const nextX = prev.length > 0 ? prev[prev.length - 1].x + 1: 0;
                // 古いデータを削除、新規データを末尾に追加
                const update = [...prev.slice(1), {x:nextX, y:nextY}];
                return update;
            });
            setTick((t) =>t + 1);
        }, UPDATE_INTERVAL_MS);
        
        return () => clearInterval(timer); //アンマウント時にタイマー停止
    }, [])

    //SparklineChartに渡すデータ構造
    const chartProps:  ISparklineProps[`data`] = {
        chartTitle: 'IOPS (s)',
        lineChartData: [
            {
                legend: 'Random',
                data: data,
            },
        ],
    };


  return (
      <div>
        <Sparkline key={tick} data={chartProps} width={500} height={60}/>
      </div>
  );

}