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
  Field,
} from "@fluentui/react-components";
import { AddSquareRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const FormDialog1 = (): JSXElement => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const [name,setName] = React.useState("");
  const [id,setId] = React.useState("");
  const [isFine,setIsFine] = React.useState(true);
  const [error, setError] = React.useState<string | undefined>(undefined)

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!(name.includes("iqn-"))) {
        console.log("name-wrong not include iqn-");
                setIsFine(false);
                setError("Required 'iqn-' include of initiator name");
    } else if(!isFine) {
       if(!name.includes("iqn-")) {
                 console.log("name-wrong not include iqn-");
                setIsFine(false);
                setError("Required 'iqn-' include of initiator name");
       }

    }else {
        alert("form submitted!");
        setName("")
        setId("")
     //   setSize("")
        setError(undefined)
        setIsOpen(false)

    }
  };

  const handleClose = (ev: React.FormEvent) => {
        setName("")
        setId("")
    //    setSize("")
        setError(undefined)
  }


  
  const handleCheck = (ev: React.FormEvent, data: InputOnChangeData) => {
  
    switch (ev.currentTarget.id) {
       case  "name-input" :{
            if(data.value.length > 40) {
                 console.log("name.length > 40");
                setIsFine(false);
                setError("name.length > 40");
           /*  } else if (!data.value.includes("iqn-")) {
                setIsFine(false); */
            } else {
                setName(data.value);
                setIsFine(true);
                setError(undefined)
            }
         break;
        }
        case "port-input" : {
            setId(data.value)
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
            <DialogTitle>Add Iscsi initiator</DialogTitle>
            <DialogContent className={styles.content}>
                <Field label="name"
                validationState={!isFine ? 'error' : undefined}
                validationMessage={error}
                >
              <Label required htmlFor={"name"}>
                iqn-Name input
              </Label>
              <Input required type="text" id={"name-input"} value={name} onChange={handleCheck}/>
              </Field>
              <Label required htmlFor={"port"}>
                Port
              </Label>
              <Input required type="text" value={id} id={"port-input"} onChange={handleCheck}/>
  {/*              <Checkbox label="Auto ID" checked={isAuto} id={"auto-check"} onChange={e => setIsAuto(e.target.checked)}/>
              <Label required htmlFor={"size"}>
                Size input
              </Label>
              <Input required type="number" value={size} id={"size-input"} onChange={e => setSize(e.target.value)}/>
              <Combobox2 required id={"unit-select"} />
              
             <Label required htmlFor={"password-input"}>
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
  );
};