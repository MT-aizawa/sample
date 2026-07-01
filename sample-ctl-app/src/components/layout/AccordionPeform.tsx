import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@fluentui/react-components';
import  IopsChart  from './LineChart1';
import { LineChart2 } from './LineChart2';
//import { Sparkline1 } from './SparkLine1';
import IopsLineSpark from './IopsLineSpark';

export const AccordionPeform = () => {
  return (
    <Accordion
    collapsible={true}
    multiple={true}
    onClick={() =>{}}
    onToggle={() => {}}
    defaultOpenItems={"item value"}>
      <AccordionItem  value="item value">
        <AccordionHeader><b>IOPS</b></AccordionHeader>
          <AccordionPanel>
            <hr></hr>
            <IopsChart/>
          </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item value1">
        <AccordionHeader><b>Ratency</b></AccordionHeader>
        <AccordionPanel>
          <hr></hr>
           <LineChart2 />
        </AccordionPanel>
      </AccordionItem>
            <AccordionItem value="item value2">
        <AccordionHeader>BandWidht</AccordionHeader>
        <AccordionPanel>
          <hr></hr>
           <IopsLineSpark />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};