import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Combobox2 = (props: Partial<ComboboxProps>): JSXElement => {
  const comboId = useId("combo-default");
  const options = ["MB", "GB", "TB", "PB","ZB"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Unit Type</label>
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select Unit"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "ZB"}>
            {option}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};