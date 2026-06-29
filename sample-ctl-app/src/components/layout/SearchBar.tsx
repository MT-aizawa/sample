import * as React from "react";
import type { JSXElement, InputOnChangeData } from "@fluentui/react-components";
import { Field, SearchBox } from "@fluentui/react-components";
import type { SearchBoxChangeEvent } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
      root: {
        padding:"0px",
        marginTop:"0px",
        marginBottom:"0px",
        marginLeft: "30px"
      
        
  
      },
    })
export const SearchBar = (): JSXElement => {
  const [value, setValue] = React.useState("");
  const [valid, setValid] = React.useState(true);
  const styles = useStyles();
  const onChange: (
    ev: SearchBoxChangeEvent,
    data: InputOnChangeData
  ) => void = (_, data) => {
    if (data.value.length <= 20) {
      setValue(data.value);
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <Field label="" className={styles.root}
      validationState={valid ? "none" : "warning"}
      validationMessage={valid ? "" : "Input is limited to 20 characters."}
    >
      <SearchBox value={value} onChange={onChange} />
    </Field>
  );
};

export default SearchBar