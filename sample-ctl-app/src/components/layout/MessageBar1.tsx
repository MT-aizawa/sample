import * as React from "react";
import type { JSXElement, MessageBarIntent } from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  Button,
  Link,

} from "@fluentui/react-components";

type props = {
    single : boolean,
    message : string,
    intent : MessageBarIntent,
}
//const intents = ["info", "warning", "error", "success"] as const;
export const MessageBar1 = (props:props): JSXElement => {
 // const [single, setSingle] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(true);
  function handleClose() {
      setIsOpen(false)
  }

  if(!isOpen) return <></>;
  return (
    <>
{/*       <Switch
        label={single ? "Single line layout" : "Multi line layout"}
        checked={single}
        onChange={(_, { checked }) => setSingle(checked)}
      /> */}

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/*   {intents.map((intent) => ( */}
          <MessageBar
            key={props.intent}
            layout={props.single ? "singleline" : "multiline"}
            intent={props.intent}
          >
            <MessageBarBody>
              <MessageBarTitle>{props.intent}</MessageBarTitle>
              {props.message} <Link>Link</Link>
            </MessageBarBody>
            <MessageBarActions
              containerAction={
                <Button
                  aria-label="dismiss"
                  appearance="transparent"
                  icon={<DismissRegular />}
                  onClick={handleClose}
                />
              }
            >
              <Button>Action</Button>
              <Button>Action</Button>
            </MessageBarActions>
          </MessageBar>
      {/*   ))} */}
      </div>
    </>
  );
};