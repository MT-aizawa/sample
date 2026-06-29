import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Button, makeStyles } from "@fluentui/react-components";
import { AlertBadgeRegular,  WarningRegular } from '@fluentui/react-icons';
import { MessageBar1 } from './MessageBar1';
import { useAuth} from "../layout/useAuth"
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
      root: {
        
           
        
      },
      header: {
        fontSize :"20px",
        display: "flex",
        justifyContent:"flex-start",
        width: "100%",
        height: "100hz",
        color: "white",
        backgroundColor: "#0f6cbd",
        padding: "0 20px",
        borderBottom: "2px solid #1a0101",
   
    
      },
      label: {
        verticalAlign: "middle",
        margin: "auto 0"

      },
      button:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#0f6cbd",
        margin: "10px",
        marginLeft: "20px",
        padding:"20 0",
        lineHeight: "50px"
      }
    })
function HeaderBar() {
    
const styles = useStyles();
const [openWarn, setOpenWarn] = useState(false);
const [openInfo, setOpenInfo] = useState(false);
const { logout } = useAuth();
const navigate = useNavigate();
function handleWarnClick() {
     setOpenWarn(!openWarn);
}
function handleInfoClick() {
     setOpenInfo(!openInfo)
}
function handlelogout() {
  logout()
  navigate("/login", { replace:false})
}
  return (
    <>
    <div className={styles.header}>
        <label className={styles.label}>Windows Admin Center</label>
        <SearchBar />
       <div className={styles.button}>
        <Button size="small" icon={<AlertBadgeRegular/>} 
        onClick={handleWarnClick}/>
        <Button size="small" icon={<WarningRegular/>}
        onClick={handleInfoClick}/>
        <Button onClick={handlelogout}>ログアウト</Button>
       </div>
       <label className={styles.label}>login : {localStorage.getItem('user')}</label>
    </div>
    {openWarn && <MessageBar1 
         single={true}
         message='Disk threshhold is over 81%'
         intent="warning"
      />   
    }
    {openInfo &&<MessageBar1 
         single={true}
         message='StorageSystem all ready!'
         intent="info"
  
     />
     
  }

    </>
  )
}

export default HeaderBar