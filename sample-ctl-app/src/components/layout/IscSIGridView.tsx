import * as React from "react";

import {
  EditRegular,
  OpenRegular,
  PeopleRegular,
  PlugDisconnectedRegular,
  NextFrameRegular,
  PreviousFrameRegular,
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
  Button,
  makeStyles,
  DataGridProps,
} from "@fluentui/react-components";

import type {
  JSXElement,
  PresenceBadgeStatus,
  TableColumnDefinition,
} from "@fluentui/react-components";
import { SearchBox } from "@fluentui/react";
import { FormDialog1 } from "./FormDaialog1";

type TargetCell = {
  label: string;
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

type InitiatorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  target: TargetCell;
  port: PortCell;
  initiator: InitiatorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

const items: Item[] = [
      {
    target: { label: "Hyper-V01" },
    port : { label: "CL1-A"},
    initiator: { label: "iqn.2026-04.com.example:0001", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    target: { label: "Hyper-V02" },
    port : { label: "CL3-A"},
    initiator: { label: "iqn.2026-04.com.example:0022", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    target: { label: "Hyper-V03" },
    port : { label: "CL2-A"},
    initiator: { label: "iqn.2026-04.com.example:0003", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    target: { label: "Hyper-V04" },
    port : { label: "CL1-B"},
    initiator: { label: "iqn.2026-04.com.example:2200", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  },
  {
    target: { label: "Hyper-V08" },
    port : { label: "CL1-A"},
    initiator: { label: "iqn.2026-04.com.example:0001", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    target: { label: "Hyper-V07" },
    port : { label: "CL3-B"},
    initiator: { label: "iqn.2026-04.com.example:0022", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    target: { label: "Hyper-V05" },
    port : { label: "CL2-B"},
    initiator: { label: "iqn.2026-04.com.example:0003", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    target: { label: "Hyper-V06" },
    port : { label: "CL5-B"},
    initiator: { label: "iqn.2026-04.com.example:2201", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "file",
    compare: (a, b) => {
      return a.target.label.localeCompare(b.target.label);
    },
    renderHeaderCell: () => {
      return "Target";
    },
    renderCell: (currentData) => {
      return (
        <TableCellLayout truncate>
          {currentData.target.label}
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

    renderCell: (currentData) => {
      return (
        <TableCellLayout truncate>{currentData.port.label}</TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "initiator",
    compare: (a, b) => {
      return a.initiator.label.localeCompare(b.initiator.label);
    },
    renderHeaderCell: () => {
      return "initiator";
    },
    renderCell: (currentData) => {
      return (
        <TableCellLayout
          truncate
          media={
            <PlugDisconnectedRegular
              aria-label={currentData.initiator.label}
              name={currentData.initiator.label}
            /*   badge={{ status: item.initiator.status }} */
            />
          }
        >
          {currentData.initiator.label}
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

    renderCell: (currentData) => {
      return (
        <TableCellLayout truncate>{currentData.lastUpdated.label}</TableCellLayout>
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
    renderCell: (currentData) => {
      return (
        <TableCellLayout truncate media={currentData.lastUpdate.icon}>
          {currentData.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
];

const columnSizingOptions = {
  target: {
    minWidth: 50,
    defaultWidth: 180,
  },
  initiator: {
    defaultWidth: 230,
    minWidth: 230,
    idealWidth: 230,
  },
};
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent:"space-between",
    marginLeft: "10px",
    alignItems: "center"
  },
  pagination: {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
  },
});
type IscsiGridViewProps = {
   isAdmin:boolean,
};
export const IscsiGridView = (isAdmin:IscsiGridViewProps): JSXElement => {
  const refMap = React.useRef<Record<string, HTMLElement | null>>({});
  const styles = useStyles();
  const [searchName, setSearchName] = React.useState<string>("");
  const [itemsPerPage, setItemsPerPage] = React.useState(4);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [sortState, setSortState] = React.useState<DataGridProps["sortState"]>({
    sortColumn: "target",
    sortDirection: "ascending",
  });

  const onSortChange:DataGridProps["onSortChange"] = (e, nextSortState) => {
    setSortState(nextSortState);
  };

  const onChangeSearch= (e:any) => {
    setSearchName(e.target.value)
  }

  const filteredName = React.useMemo(() => {
    let filtered = items; 
    if(searchName) {
      //return items.filter((item) =>
      filtered = items.filter((item) =>
        item.target.label.toLowerCase().includes(searchName.toLowerCase()) ||
        item.port.label.toLowerCase().includes(searchName.toLowerCase()) 
      /*   Object.values(item.port).some((value) =>
        //console.log(value)
         value.toLowerCase().includes(searchName.toLowerCase()) */

      );
    } 
    if(sortState?.sortColumn) {
        const column = columns.find((col) => col.columnId === sortState.sortColumn);
        if(column?.compare) {
            filtered.sort((a,b) => {
               const mod = sortState.sortDirection === "ascending" ? 1: -1;
               return column.compare!(a, b) *mod;                 
            });
        }

    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    setTotalPages( Math.ceil(filtered.length / itemsPerPage));
    return filtered.slice(startIndex, startIndex + itemsPerPage);
    } ,[searchName,sortState,itemsPerPage,currentPage]);
   // ページネーション設定
   // const itemsPerPage = 4;

  
   // const totalPages = Math.ceil(filteredName.length / itemsPerPage);
  
    // 現在ページのデータを抽出
/*     const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = React.useMemo(() => {
      return filteredName.slice(startIndex, startIndex + itemsPerPage);
    },[filteredName,startIndex,itemsPerPage]); */
  
    // ページ切り替え関数
    const goToPage = (page:any) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      } 
    };
  return (
    <>
        <div className={styles.root}>
         <SearchBox
                   placeholder="Port 検索..."
                   value={searchName}
                  /*  onChange={(e, data) => setSearchName(data.value)} */
                   onChange={onChangeSearch}
                   />
          {isAdmin.isAdmin && <Button size="small" icon={<FormDialog1 />}></Button>}
          <label><b> TotalPage:</b>{totalPages}</label>      
          <label>  抽出件数:{filteredName.length}</label>
          <label>  全件数:{items.length}</label>
        </div>
    <div style={{ overflowX: "auto" }}>
      <DataGrid
        items={filteredName}
        columns={columns}
        sortable
        sortState={sortState}
        onSortChange={onSortChange}
        getRowId={(item) => item.target.label}
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
     {/* ページネーション UI */}
          <div className={styles.pagination}>
            <Button
             size="small"
              appearance="secondary"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              <PreviousFrameRegular />
            </Button>
    
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                size="small"
                appearance={currentPage === i + 1 ? "primary" : "secondary"}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
    
            <Button
              size="small"
              appearance="secondary"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              <NextFrameRegular />
            </Button>
            PerPage:<select defaultValue="4" onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option>2</option>
              <option>4</option>
              <option>6</option>
            </select>
    
          </div>
    </>
  );
};