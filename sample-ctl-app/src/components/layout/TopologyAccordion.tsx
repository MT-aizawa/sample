import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@fluentui/react-components';
import TopologyReactFlow from '../TopologyRactFlow';
import TopologyView from '../TopologyNw';
import TopologyCytoscape from '../Topology';

export const TopologyAccordion = () => {
  return (
    <Accordion
    collapsible={true}
    multiple={true}
    onClick={() =>{}}
    onToggle={() => {}}>
      <AccordionItem  value="item value">
        <AccordionHeader>Cytoscape</AccordionHeader>
          <AccordionPanel>
            <hr></hr>
            <TopologyCytoscape />
          </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item value1">
        <AccordionHeader>React Flow Custom</AccordionHeader>
        <AccordionPanel>
          <hr></hr>
           <TopologyReactFlow />
        </AccordionPanel>
      </AccordionItem>
            <AccordionItem value="item value2">
        <AccordionHeader>React Flow Normal</AccordionHeader>
        <AccordionPanel>
          <hr></hr>
           <TopologyView/>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};