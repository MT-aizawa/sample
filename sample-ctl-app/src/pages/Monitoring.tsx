import React from '@fluentui/react'
import Top from './Top';
import { makeStyles } from '@fluentui/react-components';
import { AccordionPeform } from '../components/layout/AccordionPeform';

const useStyles = makeStyles({
        content: {
          display:"flex",
          flexDirection:"column",
          width:"100%",
          marginRight: "10px",
          marginLeft: "10px",
                    
        },
        subcont: {
          display: "flex",
          flexDirection: "column"
        }
})

function Monitoring() {
  const styles = useStyles();

  const TopProps ={ title: "Monitoring"};
  return (
  <>
    <div className={styles.content}>
      <Top {...TopProps}/>
      <hr></hr>
   
    <div className={styles.subcont}>
      <AccordionPeform />
    </div>
     </div>
  </>
  )
}

export default Monitoring