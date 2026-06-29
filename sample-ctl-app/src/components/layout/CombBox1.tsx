import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
//import type { ComboboxProps } from "@fluentui/react-components";

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

type props = {
    value:string
}

export const Combobox1 = (props: props): JSXElement => {
  const comboId = useId("combo-default");
  const options = ["CSV", "NTFS", "EXT4", "FAT32","Initialize"];
  const [selectedOptions, setSelectedOptions] = React.useState(props.value)
//  const [typeValue, setTypeValue] = React.useState<string>(props.value)
  const styles = useStyles();

const onOptionSelect = (e: any, data: any) => {
    setSelectedOptions(data.selectedOptions);
//    setTypeValue(data.optionText || "");
}

  return (
    <div className={styles.root}>
      <label id={comboId}>Volume Type</label>
      <Combobox
        value={selectedOptions}
        aria-labelledby={comboId}
        defaultSelectedOptions={[props.value]}
        onOptionSelect={onOptionSelect}
        placeholder="Select File Format"
      /*   {...props} */
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "FAT32"}>
            {option}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};