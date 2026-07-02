import { Field, InfoLabel, makeStyles } from '@fluentui/react-components'
import React from 'react'

const useStyles = makeStyles({
      top: {
         disabled:"required",
         fontSize:"Large",
         Weight:"semibold"
      },
      root: {
        marginLeft: "20px",
      //  justifyContent: "center",
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
type savingEffect = {
  "efficiencyDataReduction": number
};
type Storage1 = {
  "modelName": string,
  "serial": string,
  "nickname": string,
  "numberOfTotalVolumes": number,
  "numberOfFreeDrivers": number,
  "numberOfTotalServers": number,
  "totalPhysicalCapacity": number,
  "totalPoolCapacity": number,
  "usedPoolCapacity": number,
  "freePoolCapacity": number,
  "savingEffect" : savingEffect,
  "numberOfSnapshots": number,  
};
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
      const [data1, setData1] = React.useState<Storage1>();
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState<string | null>(null);
      const BASE_URL = "http://localhost:5001"
      const GET_URL = BASE_URL + "/storage/800103"
      
      // データ取得関数
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(GET_URL);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const json: Storage1 = await res.json();
          console.log(json)
          setData1(json); // 例として最初の5件だけ表示
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      };
    
      // 初回マウント時にデータ取得
      React.useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>StorageUsage
      <hr></hr>
      <br></br>
        <Field label="" className={styles.root}>
            <label className={styles.size}>UseSize / FreeSize (Byte)
                <hr></hr>
                <InfoLabel className={styles.labelInfo} info={<div>{infomationText}</div>}>
                   {/*  {useSize} / {freeSize} */}
                    {data1?.usedPoolCapacity} / {data1?.totalPoolCapacity} 
                </InfoLabel>
            </label>
            <label className={styles.dr}>Data Reduction
                 <hr></hr>
               {/*   {dr} */}
                 {data1?.savingEffect.efficiencyDataReduction}
            </label>
            <label className={styles.state}>Status 
                <hr></hr>
                {state}
            </label>
            <label className={styles.snap}>Snapshots
                 <hr></hr>
                 {data1?.numberOfSnapshots}
            </label>
            <label className={styles.system}>System
                 <hr></hr>
                 {system}
            </label>
            <label className={styles.total}>Total  (Byte)
                 <hr></hr>
                 {data1?.totalPhysicalCapacity}
            </label>
        </Field>
    </div>
  )
}

export default StorageUsage