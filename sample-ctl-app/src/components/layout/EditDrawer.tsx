import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
//  makeStyles,
//  tokens,
  useRestoreFocusSource,
  useRestoreFocusTarget,
  Input,
  DrawerFooter,
} from "@fluentui/react-components";
import { Dismiss24Regular, EditRegular } from "@fluentui/react-icons";
import { Combobox1 } from "./CombBox1";

/* const useStyles = makeStyles({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    columnGap: tokens.spacingHorizontalXS,
  },
}); */

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
type props = {
  name:string,
  size:string,
  type:string,
};
export const EditDrawer = (props:props): JSXElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [nameValue, setNameValue] = React.useState(props.name);
  const [sizeValue, setSizeValue] = React.useState(props.size);
 // const [typeValue, setTypeValue] = React.useState(props.type);
  // all Drawers need manual focus restoration attributes
  // unless (as in the case of some inline drawers, you do not want automatic focus restoration)
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();
 
  const onClick = React.useCallback(() => {
    setIsOpen(true);
  
  },[]);

  const onChangeName = (ev:any, data:any) => {
    setNameValue(data.value)
  }
  const onChangeSize = (ev:any, data:any) => {
    if(data.value.length <= 10){
       setSizeValue(data.value)
    }
  }

  const handleSubmit = () => {
      setIsOpen(false)
      alert("Send Edit Data")
  }
/*   const onChangeType = (ev:any, data:any) => {
    setTypeValue(data.value)
  } */

  return (
    <div>
      <OverlayDrawer
        position="end"
        {...restoreFocusSourceAttributes}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            {capitalize} Edit Volume {props.name}
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Name</p>
          <Input value={nameValue} onChange={onChangeName}/>
          <p>Size</p>
          <Input value={sizeValue} onChange={onChangeSize}/>
 {/*          <p>Type</p>
          <Input value={typeValue} onChange={onChangeType}/> */}
          <p>
          <Combobox1 value={props.type} />
          </p>
          <div>

          </div>
        </DrawerBody>
            <DrawerFooter >


          <Button
            appearance="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DrawerFooter>
      </OverlayDrawer>
     <Button 
     {...restoreFocusTargetAttributes}
     icon={<EditRegular />}
     onClick={onClick}/>
    </div>
  );
};