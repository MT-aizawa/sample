import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@fluentui/react-components';
import { TableView } from './TableView';
import { FcGridView } from './FCGritView';
import { IscsiGridView } from './IscSIGridView';

export const Accordion1 = () => {
  return (
    <Accordion
    collapsible={true}
    multiple={true}
    onClick={() =>{}}
    onToggle={() => {}}>
      <AccordionItem  value="item value">
        <AccordionHeader>LDEV一覧</AccordionHeader>
          <AccordionPanel>
            <hr></hr>
            <TableView />
          </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item value1">
        <AccordionHeader>FC一覧</AccordionHeader>
        <AccordionPanel>
          <hr></hr>
           <FcGridView />
        </AccordionPanel>
      </AccordionItem>
            <AccordionItem value="item value2">
        <AccordionHeader>ISCSI一覧</AccordionHeader>
        <AccordionPanel>
          <hr></hr>
           <IscsiGridView isAdmin={true}/>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};