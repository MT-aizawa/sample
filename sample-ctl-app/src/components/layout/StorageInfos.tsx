import React from '@fluentui/react'
import {Field,makeStyles} from '@fluentui/react-components'
import StorageUsage from './StorageUsage';
import { Storage32Regular } from '@fluentui/react-icons';
import RestData from '../../service/RestData';

const useStyles = makeStyles({
      top: {
         disabled:"required",
         fontSize:"Large",
         Weight:"semibold"
      },
      root: {
        marginTop:"0px",
        marginBottom:"20px",
        marginRight:"20px",
        marginLeft:"20px",

        display: "flex",
      },
      size:{
        marginRight:"20px",
      },
      dr:{
        marginRight:"20px",
      },
      state:{
        marginRight:"20px",
      },
      snap:{
        marginRight:"20px",
      },
      system:{
        marginRight:"20px",
      },
      total:{
        marginRight:"20px",
      },
      labelInfo:{
        marginBottom: "20px",
        backgroundColor:"#white",
        fontSize:"small"
        
      }
    })
function StorageInfos() {
    const styles = useStyles();
/*     const useSize ="10TB"
    const freeSize = "500TB"
    const dr = "1.663"
    const state = "Healthy"
    const snap = "30"
    const system = "---"
    const total = "1PB"
    const infomationText ="Usage is a Disk Size of StorageSystem" */
    const model = "OneBlock 85"
    const SN = "900109"

  return (
    <>
    <div className={styles.top}>StorageInfos</div>
    <hr></hr>
    <Field >
      <Storage32Regular />
        <label className={styles.size}>Model
            <hr></hr>
            {model}
        </label>
        <hr></hr>
        <label className={styles.size}>SerialNumber
            <hr></hr>
            {SN}
        </label>
    </Field>
    <hr></hr>
    <br></br>
{/*     <Field label="Usage" className={styles.root}>
        <hr></hr>
        <label className={styles.size}>UseSize / FreeSize
            <hr></hr>
            <InfoLabel info={<div className={styles.labelInfo}>{infomationText}</div>}>{useSize} / {freeSize}</InfoLabel>
        </label>
        <label className={styles.dr}>Data Reduuction
             <hr></hr>
             {dr}
        </label>
        <label className={styles.state}>Status 
            <hr></hr>
            {state}
        </label>
        <label className={styles.snap}>Snapshots
             <hr></hr>
             {snap}
        </label>
        <label className={styles.system}>System
             <hr></hr>
             {system}
        </label>
        <label className={styles.total}>Total
             <hr></hr>
             {total}
        </label>
    </Field> */}
    <StorageUsage/>
    <RestData />
    </>
  )
}

export default StorageInfos