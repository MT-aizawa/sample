import React from 'react'
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

type Storage = {
   "storageDeviceId":string,
   "model": string,
   "serialNumber": string,
   "ip" : string
}
/* type Storages[] = {
    Storage : Storage,
} */

function StorageInfos() {
  const [data, setData] = React.useState<Storage[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const styles = useStyles();
  const BASE_URL = "http://localhost:5001"
  const GET_URL = BASE_URL + "/storages"
  
  // データ取得関数
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(GET_URL);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json: Storage[] = await res.json();
      console.log(json)
      setData(json.slice(0, 5)); // 例として最初の5件だけ表示
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
    <>
    <div className={styles.top}>StorageInfos</div>
    <hr></hr>
    <Field >
      <Storage32Regular />
        <label className={styles.size}>Model
            <hr></hr>
            {data[0]?.model}
        </label>
        <hr></hr>
        <label className={styles.size}>SerialNumber
            <hr></hr>
            {data[0]?.serialNumber}
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