import * as React from "react";

import {
  EditRegular,
  OpenRegular,
  PlugDisconnectedRegular,
  ServerRegular,
  ServerMultipleRegular,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  createTableColumn,
  Menu,
  MenuList,
  MenuPopover,
  MenuTrigger,
  MenuItem,
} from "@fluentui/react-components";

import type {
  JSXElement,
  PresenceBadgeStatus,
  TableColumnDefinition,
} from "@fluentui/react-components";

type HostGroupCell = {
  label: string;
  icon: JSXElement;
};

type PortCell = {
    label:string;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type LastUpdateCell = {
  label: string;
  icon: JSXElement;
};

type WWNCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  hostgroup: HostGroupCell;
  port: PortCell;
  worldwidname: WWNCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

const items: Item[] = [
      {
    hostgroup: { label: "Hyper-V01", icon: <ServerRegular /> },
    port : { label: "CL1-A"},
    worldwidname: { label: "AA:BB:CC:DD:EE:FF:GG:HH", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V02", icon: <ServerRegular /> },
    port : { label: "CL3-A"},
    worldwidname: { label: "BB:CC:DD:EE:FF:GG:HH:II", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V03", icon: <ServerMultipleRegular /> },
    port : { label: "CL2-A"},
    worldwidname: { label: "CC:DD:EE:FF:GG:HH:II:JJ", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V04", icon: <ServerMultipleRegular /> },
    port : { label: "CL1-B"},
    worldwidname: { label: "DD:EE:FF:GG:HH:II:JJ:KK", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <MoreHorizontalRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V08", icon: <ServerRegular /> },
    port : { label: "CL1-A"},
    worldwidname: { label: "EE:FF:GG:HH:II:JJ:KK:LL", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V07", icon: <ServerRegular /> },
    port : { label: "CL3-B"},
    worldwidname: { label: "FF:GG:HH:II:JJ:KK:LL:MM", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V05", icon: <ServerMultipleRegular /> },
    port : { label: "CL2-B"},
    worldwidname: { label: "GG:HH:II:JJ:KK:LL:MM:NN", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    hostgroup: { label: "Hyper-V06", icon: <ServerMultipleRegular /> },
    port : { label: "CL5-B"},
    worldwidname: { label: "HH:II:JJ:KK:LL:MM:NN:OO", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <MoreHorizontalRegular />,
    },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "hostgroup",
    compare: (a, b) => {
      return a.hostgroup.label.localeCompare(b.hostgroup.label);
    },
    renderHeaderCell: () => {
      return "hostgroup";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout truncate media={item.hostgroup.icon}>
          {item.hostgroup.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "Port",
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderHeaderCell: () => {
      return "Port";
    },

    renderCell: (item) => {
      return (
        <TableCellLayout truncate>{item.port.label}</TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "worldwidename",
    compare: (a, b) => {
      return a.worldwidname.label.localeCompare(b.worldwidname.label);
    },
    renderHeaderCell: () => {
      return "WWN";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          truncate
          media={
            <PlugDisconnectedRegular
              aria-label={item.worldwidname.label}
              name={item.worldwidname.label}
            /*   badge={{ status: item.initiator.status }} */
            />
          }
        >
          {item.worldwidname.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdated",
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderHeaderCell: () => {
      return "Last updated";
    },

    renderCell: (item) => {
      return (
        <TableCellLayout truncate>{item.lastUpdated.label}</TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdate",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Last update";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout truncate media={item.lastUpdate.icon}>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
];

const columnSizingOptions = {
  hostgroup: {
    minWidth: 50,
    defaultWidth: 180,
  },
  worldwidename: {
    defaultWidth: 230,
    minWidth: 230,
    idealWidth: 230,
  },
};

export const FcGridView = (): JSXElement => {
  const refMap = React.useRef<Record<string, HTMLElement | null>>({});

  return (
    <div style={{ overflowX: "auto" }}>
      <DataGrid
        items={items}
        columns={columns}
        sortable
        getRowId={(item) => item.hostgroup.label}
        selectionMode="multiselect"
        resizableColumns
        columnSizingOptions={columnSizingOptions}
        resizableColumnsOptions={{
          autoFitColumns: false,
        }}
      >
        <DataGridHeader>
          <DataGridRow
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select all rows" },
            }}
          >
            {({ renderHeaderCell, columnId }, dataGrid) =>
              dataGrid.resizableColumns ? (
                <Menu openOnContext>
                  <MenuTrigger>
                    <DataGridHeaderCell
                      ref={(el) => {
                        refMap.current[columnId] = el;
                      }}
                    >
                      {renderHeaderCell()}
                    </DataGridHeaderCell>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      <MenuItem
                        onClick={dataGrid.columnSizing_unstable.enableKeyboardMode(
                          columnId
                        )}
                      >
                        Keyboard Column Resizing
                      </MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              ) : (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )
            }
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<Item>>
          {({ item, rowId }) => (
            <DataGridRow<Item>
              key={rowId}
              selectionCell={{
                checkboxIndicator: { "aria-label": "Select row" },
              }}
            >
              {({ renderCell }) => (
                <DataGridCell>{renderCell(item)}</DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
};