import React from 'react'
import Top from './Top';
import { IscsiGridView } from '../components/layout/IscSIGridView';

type IscsiGridViewProps = {
   isAdmin:boolean,
};

function Iscsi(isAdmin:IscsiGridViewProps) {
  const TopProps ={ title: "ISCSI"};
  return (
    <div>
    <Top {...TopProps}/>
    <IscsiGridView isAdmin={isAdmin.isAdmin}></IscsiGridView>
    </div>
  )
}

export default Iscsi