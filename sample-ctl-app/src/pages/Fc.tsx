import React from 'react'
import Top from './Top';
import { FcGridView } from '../components/layout/FCGritView';

function Fc() {
  const TopProps ={ title: "Fiber Chanel"};
  return (
    <div>
    <Top {...TopProps}/>
    <FcGridView />
    </div>
  )
}

export default Fc