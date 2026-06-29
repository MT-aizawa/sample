import React from '@fluentui/react'
import Top from './Top'
import {makeStyles }from '@fluentui/react-components'
import StorageInfos from '../components/layout/StorageInfos';

const useStyles = makeStyles({
        content: {
          display:"flex",
          flexDirection:"column",
          width:"100%",
          marginRight: "10px",
          marginLeft: "10px",
          alignItems: "left"
        },
        subcont: {
          flexDirection: "row"
        }
})

function StorageSystem() {
    const styles = useStyles();
    const TopProps ={ title: "StorageSystem"};
  return (
    <div className={styles.content}>
      <Top {...TopProps} />
        <div>
          <StorageInfos />


        </div>
      

    </div>
    
  )
}

export default StorageSystem