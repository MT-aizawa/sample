import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "50px 20px",
    rowGap: "20px",
  },
});

export const TabList1 = (props: Partial<TabListProps>): JSXElement => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TabList {...props}>
        <Tab value="tab1">IOPS</Tab>
        <Tab value="tab2">Latecy</Tab>
        <Tab value="tab3">BandWidht</Tab>
      </TabList>
    </div>
  );
};
