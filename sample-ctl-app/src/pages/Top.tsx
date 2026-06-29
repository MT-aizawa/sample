import React from '@fluentui/react'
import {makeStyles }from '@fluentui/react-components'
import {
  Storage32Regular,
} from "@fluentui/react-icons";

interface TopProps {
  title: string,
}
const useStyles = makeStyles({
        content: {
          marginRight: "10px",
          marginLeft: "10px",
          alignItems: "center",
          display: "flex",
          height: "30px",
          padding: "0 20"


        },
        header: {
          fontSize :"20px",
          display: "flex",
          width: "100%",
          height: "30px",
          color: "white",
          backgroundColor: "gray",
          padding: "0 20px",
          borderBottom: "1px solid #1a0101",
          listStyle: "none",
          verticalAlign: "middle"
      
        },
      })
function Top(props: TopProps) {
  const styles = useStyles();
 
  return (
    <>
       <div className={styles.header}>
         <Storage32Regular />
         {props.title? (<label  className={styles.content} > ＞ </label>) : (null)

         }
          {props.title}
         
       </div>
    </>
  )
}

export default Top