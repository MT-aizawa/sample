import React from 'react';
import Top from './Top';
//import Top from './Top';

function HostGroup() {
  const TopProps = { title : "HostGroup"}
  return (
    <Top {...TopProps}></Top>
  )
}

export default HostGroup