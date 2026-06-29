import React from '@fluentui/react'
import Top from './Top'
import { makeStyles } from '@fluentui/react-components';
import { DonutChart3 } from '../components/layout/DonutsChart3';
import StorageUsage from '../components/layout/StorageUsage';
import { LineChart1 } from '../components/layout/LineChart1';
import { LineChart2 } from '../components/layout/LineChart2';


const useStyles = makeStyles({
        content: {
          display:"flex",
          flexDirection:"column",
          width:"100%",
          marginRight: "20px",
          marginLeft: "10px",
          alignItems: "left"
        },
        subcont: {
          flexDirection: "row"
        },
        grid:{
          display: "grid",
          gap: "5px",
          gridTemplateColumns:"1fr 1fr 1fr 1fr",
          gridAutoRows:"minmax(auto,auto)",
          marginRight: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
         /*  border: "1px solid #384256", */
/*           backgroundColor: "lightblue" */
        },
        box:{
          padding: "20px",
          width: "180px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #384256",
          backgroundColor: "lightblue"
        },
        box1:{
          height:"200px",
          //alignContent:"center",
          gridColumn:"span 1",
          gridRow:"span 1",
          backgroundColor:"white",
          border: "1px solid #384256",
        },
        box2:{
          gridColumn:"span 3",
          gridRow:"span 1",
          border: "1px solid #384256",
          /* backgroundColor:"pink" */
        },
        box3:{
          gridColumn:"span 4",
          gridRow:"span 1",
          height:"100hz",
          border: "1px solid #384256",
        /*   backgroundColor:"green", */
        },
        box4:{
          gridColumn:"span 4",
          height:"100hz",
          border: "1px solid #384256",
          /* backgroundColor:"red" */
        }

})

function OverView() {
  const TopProps ={ title: "OverView"};
  const styles = useStyles();
  return (
    <>
    <div className={styles.content}>
      <Top {...TopProps}/>
    
      <div className={styles.grid}>
        <div className={styles.box1}>
          <DonutChart3 />
        </div>
        <div className={styles.box2}>
          <StorageUsage />
        </div>
        
     {/*    <TabList1/>
    */}
        <div className={styles.box3}>
          IOPS<hr></hr><LineChart1 />
        </div>
        <div className={styles.box4}>
          Latency<hr></hr><LineChart2 />
        </div>
      </div> 
   </div>
    </>
  )
}

export default OverView