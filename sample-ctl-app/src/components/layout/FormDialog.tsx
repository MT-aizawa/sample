import * as React from "react";
import type { InputOnChangeData, JSXElement } from "@fluentui/react-components";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  Input,
  Label,
  makeStyles,
  Checkbox,
  Field,
  Toast,
  ToastTitle,
  ToastBody,
  useToastController,
  useId,
  Toaster,
} from "@fluentui/react-components";
import { AddSquareRegular } from "@fluentui/react-icons";
import { Combobox2 } from "./CombBox2";



const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const FormDialog = (): JSXElement => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const [name,setName] = React.useState("");
  const [id,setId] = React.useState("");
  const [size,setSize] = React.useState("");
  const [isAuto, setIsAuto] = React.useState(false);
  const [isFine,setIsFine] = React.useState(true);
  const [error, setError] = React.useState<string | undefined>(undefined)
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(isFine)
    if(!isFine) {
      dispatchToast(
        <Toast>
          <ToastTitle>LDEV作成失敗</ToastTitle>
          <ToastBody>{name}のIDはすでに定義されています。</ToastBody>
        </Toast>,
        { intent: "error", timeout: 3000 }
      );
    } else {
        //alert("form submitted! Add Ldev!");
        setName("")
        setId("")
        setSize("")
        setError(undefined)
        setIsOpen(false)
        dispatchToast(
        <Toast>
          <ToastTitle>データ送信成功</ToastTitle>
          <ToastBody>{name}</ToastBody>
        </Toast>,
        { intent: "success", timeout: 3000 }
      );
    }

  };

  const handleClose = (ev: React.FormEvent) => {
        setName("")
        setId("")
        setSize("")
        setError(undefined)
  }


  
  const handleCheck = (ev: React.FormEvent, data: InputOnChangeData) => {
  
    switch (ev.currentTarget.id) {
       case  "name-input" :{
            if(data.value.length > 10) {
                 console.log("name-length > 9");
                setIsFine(false);
                setError("Controlled input limiting the value to 10 charactoers");
            } else {
                setName(data.value);
                setIsFine(true);
                setError(undefined)
            }
         break;
       }
       case "id-input" : {
           if(isAuto) {
            setId("auto")
            setIsFine(false)
           } else {
            setId(data.value)
              console.log(isFine)
            if(data.value === "0") {
              setIsFine(false)
            } else {
              setIsFine(true)
            }
           }
        break;
       }
       case "auto-check" : {
            console.log("isAuto called")
               break;
       }
       default : {
         console.log("not defind id")
         setIsFine(false)
       }
    }
    return isFine
  };

  return (
    <>
    <Dialog modalType="non-modal"
       open={isOpen}
       onOpenChange={(e, data) => setIsOpen(data.open)}
    >
      <DialogTrigger disableButtonEnhancement>
        <Button icon={<AddSquareRegular />} onClick={() => setIsOpen(true)}/>
      </DialogTrigger>
      <DialogSurface aria-describedby={undefined}>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <DialogTitle>Add Volume</DialogTitle>
            <DialogContent className={styles.content}>
                <Field label="name"
                validationState={!isFine ? 'error' : undefined}
                validationMessage={error}
                >
              <Label required htmlFor={"name"}>
                Name input
              </Label>
              <Input required type="text" id={"name-input"} value={name} onChange={handleCheck}/>
              </Field>
              <Label required htmlFor={"ID"}>
                ID input
              </Label>
              <Input required type="number" disabled={isAuto} value={id} id={"id-input"} onChange={handleCheck}/>
              <Checkbox label="Auto ID" checked={isAuto} id={"auto-check"} onChange={e => setIsAuto(e.target.checked)}/>
              <Label required htmlFor={"size"}>
                Size input
              </Label>
              <Input required type="number" value={size} id={"size-input"} onChange={e => setSize(e.target.value)}/>
              <Combobox2 required id={"unit-select"} />
              
 {/*              <Label required htmlFor={"password-input"}>
                Password input
              </Label>
              <Input required type="password" id={"password-input"} /> */}
            </DialogContent>
            <DialogActions>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary" onClick={handleClose}>Cancel</Button>
              </DialogTrigger>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
      <Toaster toasterId={toasterId} position="top-end" />
      </>
  );
};