import React from '@fluentui/react'
import Top from './Top'
import { makeStyles } from '@fluentui/react-components';
import { Accordion1 } from '../components/layout/Accordion1';

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


function Provisioning() {
  const TopProps ={ title: "Provisioning"};
  const styles = useStyles();
  return (
    <div className={styles.content}>
    <Top {...TopProps}/>
    <Accordion1 />
  {/*   <TableView></TableView> */}
    </div>
  )
}

export default Provisioning