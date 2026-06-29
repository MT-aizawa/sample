import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogActions,
  Button,
  useId,
  Toaster,
  useToastController,
  Link,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
} from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";



type props = {
   item : string,
   id : string,
};


export const DeleteItemConfirmation = (props:props): JSXElement => {
  const dialogId = useId("dialog-");
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
    console.log("call notify")
    dispatchToast(
      <Toast>
        <ToastTitle action={<Link>Undo</Link>}>Delete Volume</ToastTitle>
        <ToastBody subtitle="Subtitle">Delete Volume Failed</ToastBody>
        <ToastFooter>
          <Link>Action</Link>
          <Link>Action</Link>
        </ToastFooter>
      </Toast>,
      { intent: "error" }
    );

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
       {/*  <Button>Delete file</Button> */}
        <Button icon={<DeleteRegular />}></Button>
      </DialogTrigger>
      <DialogSurface
        
        aria-labelledby={`${dialogId}-title`}
        aria-describedby={`${dialogId}-content`}
      >
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            <h3>Delete {props.item}  {props.id}</h3>
          </DialogTitle>
          <DialogContent id={`${dialogId}-content`}>
            This action is permanent. Are you sure you want to continue?
          </DialogContent>
          <DialogActions>
            <Toaster toasterId={toasterId} />
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary" onClick={notify}>Delete file</Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Cancel</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>

  );
};