import { Field, InfoLabel, makeStyles } from '@fluentui/react-components'
import React from 'react'

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
        justifyContent: "center",
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
        weight:"semibold",
        fontSize:"medium",
      },
      Info:{
        marginTop:"50px",
        backgroundColor:"white",
        borderRadius: "10px",
        border: "1px solid #384256",
        fontSize:"small"
      }
    }
)

function StorageUsage() {
    const styles=useStyles()
    const useSize ="10 PB"
    const freeSize = "25 PB"
    const dr = "1.663"
    const state = "Healthy"
    const snap = "30"
    const system = "---"
    const total = "35 PB"
    const infomationText ="Usage is a Disk Size of StorageSystem"
  return (
    <div>StorageUsage
        <br></br>
        <Field label="" className={styles.root}>
            <label className={styles.size}>UseSize / FreeSize
                <hr></hr>
                <InfoLabel className={styles.labelInfo} info={<div>{infomationText}</div>}>
                    {useSize} / {freeSize}
                </InfoLabel>
            </label>
            <label className={styles.dr}>Data Reduction
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
        </Field>
    </div>
  )
}

export default StorageUsage