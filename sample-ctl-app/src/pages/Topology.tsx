import { makeStyles } from '@fluentui/react-components'
import { TopologyAccordion } from '../components/layout/TopologyAccordion';
import Top from './Top';

const useStyles = makeStyles({
        content: {
         // display:"flex",
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
function Topology() {
    const styles = useStyles();
    const TopProps ={ title: "Topology"};
  return (
    <>
     <div className={styles.content}>
          <Top {...TopProps} />
  
        <TopologyAccordion />
    </div>
    </>
  )
}

export default Topology