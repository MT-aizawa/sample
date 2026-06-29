import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  useId,
  Link,
  Button,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
} from "@fluentui/react-components";


export const Toast1 = (): JSXElement => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
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
    <>
      <Toaster toasterId={toasterId} />
      <Button onClick={notify}/>
    </>
  );
};