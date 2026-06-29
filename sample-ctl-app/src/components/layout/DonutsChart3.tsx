import * as React from "react";
import { makeStyles, type JSXElement } from "@fluentui/react-components";
import type { ChartProps } from "@fluentui/react-charts";
import {
  DonutChart,
  getColorFromToken,
  DataVizPalette,
} from "@fluentui/react-charts";

const useStyles = makeStyles({
        content: {
          alignContent:"center",
          alignItems:"center",
          justifyContent:"space-between",
          flexDirection:"column",
          width:"250px",
          height:"160px"
          
        },
        subcont: {
          flexDirection: "row"
        }
})

export const DonutChart3 = (): JSXElement => {
  const styles = useStyles();
  const points = [
    {
      legend: "used",
      data: 20000,
      color: getColorFromToken(DataVizPalette.color2),
      xAxisCalloutData: "2020/04/30",
    },
    {
      legend: "free",
      data: 35000,
      color: getColorFromToken(DataVizPalette.color1),
      xAxisCalloutData: "2020/04/20",
    },
  ];

  const data: ChartProps = {
    chartTitle: "Storage Usage",
    chartData: points,
  };
  return (
    <>Capacity
    <DonutChart className={styles.content}
      culture={
        typeof window !== "undefined" ? window.navigator.language : "JP"
      }
      showYAxisLables={true}
      showYAxisLablesTooltip={false}
      hideLabels={false}
      hideTooltip={true}
      showLabelsInPercent={true}
      data={data}
      innerRadius={70}
      href={"https://developer.microsoft.com/en-us/"}
      legendsOverflowText={null}
      hideLegend={false}
      height={100}
      valueInsideDonut={"35000 TB"}
    />
    </>
  );
};
