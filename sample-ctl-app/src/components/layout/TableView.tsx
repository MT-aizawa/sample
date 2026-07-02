import * as React from "react";

import {
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentCsvRegular,
  NextFrameRegular,
  PreviousFrameRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  Link,
  Button,
  useArrowNavigationGroup,
  useFocusableGroup,
  SearchBox,
  makeStyles
} from "@fluentui/react-components";
import type {
  JSXElement,

} from "@fluentui/react-components";
import { DeleteItemConfirmation } from "./DeleteItemConfirm";
import { EditDrawer } from "./EditDrawer";
import { FormDialog } from "./FormDialog";


const items = [
   {
  //  file: { label: "", icon: <DocumentRegular /> },
    name: { label:"LDEV_0001"},
    ID: { label: "256 (0x00FF)" ,link: "https://example.com"},
    Size: { label: "800GB", },
    connect: { label: "1"},
    type: { label: "NTFS"},
    snap: { label: "0"},
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
   // file: { label: "", status: "busy",icon: <DocumentCsvRegular /> },
    name: { label: "LDEV_0002"},
    ID: { label: "1 (0x0001)" ,link: "https://example.com"},
    Size: { label: "500GB", },
    connect: { label: "3" },
    type: { label: "CSV" },
    snap: { label: "2" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
   // file: { label: "", icon: <DocumentRegular /> },
    name: {label: "LDEV_0010"},
    ID: { label: "5 (0x0005)",link: "https://example.com" },
    Size: { label: "100GB", },
    connect: { label: "1" },
    type: { label: "CSV" },
    snap: { label: "2" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
  //  file: { label: "", icon: <DocumentCsvRegular /> },
    name: { label: "TEST_WAC"},
    ID: { label: "10 (0x000a)",link: "https://example.com" },
    Size: { label: "10TB", },
    connect: { label: "6" },
    type: { label: "CSV" },
    snap: { label: "2" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  }, 
     {
  //  file: { label: "", icon: <DocumentRegular /> },
    name: { label:"LDEV_0201"},
    ID: { label: "513 (0x01FF)" ,link: "https://example.com"},
    Size: { label: "800GB", },
    connect: { label: "1"},
    type: { label: "NTFS"},
    snap: { label: "0"},
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
  //  file: { label: "", status: "busy",icon: <DocumentCsvRegular /> },
    name: { label: "LDEV_0032"},
    ID: { label: "4 (0x0004)" ,link: "https://example.com"},
    Size: { label: "550GB", },
    connect: { label: "3" },
    type: { label: "NTFS" },
    snap: { label: "2" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
//file: { label: "", icon: <DocumentRegular /> },
    name: {label: "LDEV_0040"},
    ID: { label: "21 (0x0015)" ,link: "https://example.com"},
    Size: { label: "400GB", },
    connect: { label: "1" },
    type: { label: "NTFS" },
    snap: { label: "0" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
  //  file: { label: "", icon: <DocumentCsvRegular /> },
    name: { label: "TEST2_WAC"},
    ID: { label: "11 (0x000b)" ,link: "https://example.com"},
    Size: { label: "5TB", },
    connect: { label: "4" },
    type: { label: "CSV" },
    snap: { label: "1" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  }, 
];

type volumes = {
   "id": number,
   "nickname": string,
   "poolId": number,
   "poolName": string,
   "totalCapacity": number,
   "usedCapacity": number,
   "numberOfCounnectiongServers": number,
   "numberOfSnapshots": number
}


const columns = [
 // { columnkey: "file", label:"Icon"},
  { columnKey: "name", label: "Name" },
  { columnKey: "ID", label: "ID" },
  { columnKey: "Size", label: "Size" },
  { columnKey: "connect", label: "connect" },
  { columnKey: "type", label: "type"},
  { columnKey: "snap", label: "Snapshot"},
  { columnKey: "actions", label: "Actions" },
];

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

export const TableView = (): JSXElement => {
  const [searchName, setSearchName] = React.useState("");
  //const [isOpen, setIsOpen] = React.useState(false);
  const [itemsPerPage, setItemsPerPage] = React.useState(4);
  const keyboardNavAttr = useArrowNavigationGroup({ axis: "grid" });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: "limited-trap-focus",
  });
  const [data, setData] = React.useState<volumes[]>([]);
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState<string | null>(null);
   const styles = useStyles();
   const BASE_URL = "http://localhost:5001"
   const GET_URL = BASE_URL + "/volumes"
   
   // データ取得関数
   const fetchData = async () => {
     setLoading(true);
     setError(null);
     try {
       const res = await fetch(GET_URL);
       if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
       }
       const json: volumes[] = await res.json();
       console.log(json)
       setData(json.slice(0, 5)); // 例として最初の5件だけ表示
     } catch (err) {
       setError(err instanceof Error ? err.message : "Unknown error");
     } finally {
       setLoading(false);
     }
   };
 
   // 初回マウント時にデータ取得
   React.useEffect(() => {
     fetchData();
   }, []);

  const filteredName = React.useMemo(() => {
    if(!searchName) return items;
    return items.filter((item) =>
     Object.values(item.name).some((value) =>
      //console.log(value)
       value.toLowerCase().includes(searchName.toLowerCase())
    )
    );
  } ,[searchName]);
 // ページネーション設定
 // const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(filteredName.length / itemsPerPage);

  // 現在ページのデータを抽出
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = React.useMemo(() => {
    return filteredName.slice(startIndex, startIndex + itemsPerPage);
  },[filteredName,startIndex,itemsPerPage]);

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
               placeholder="Name 検索..."
               value={searchName}
               onChange={(e, data) => setSearchName(data.value)}
               />
      <Button icon={<FormDialog />}></Button>
      <label><b> TotalPage:</b>{totalPages}</label>      
      <label>  抽出件数:{filteredName.length}</label>
      <label>  全件数:{items.length}</label>
    </div>
    <Table
      {...keyboardNavAttr}
      role="grid"
      sortable
      aria-label="Table with grid keyboard navigation"
      style={{ minWidth: "620px" }}
    >
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey}>
              {column.label}

            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentData.map((filteredName) => (
          <TableRow key={filteredName.name.label}>
          {/*   <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout media={filteredName.file.icon}>
                {/* {filteredName.name.label} 
              </TableCellLayout>
            </TableCell> */}
             <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>
                {filteredName.name.label}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout
  /*               media={
                  <Avatar
                    aria-label={item.ID.label}
                    name={item.ID.label}
                    badge={{
                      status: item.ID.status as PresenceBadgeStatus,
                    }}
                  />
                } */
              >
                <Link href={filteredName.ID.link} target=" blank">
                {filteredName.ID.label}
                </Link>
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              {filteredName.Size.label}
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
                {filteredName.connect.label}
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>
                {filteredName.type.label}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>
                {filteredName.snap.label}
              </TableCellLayout>
            </TableCell>
            <TableCell role="gridcell" tabIndex={0} {...focusableGroupAttr}>
              <TableCellLayout>
              {/*   <Button icon={<EditRegular />}  aria-label="Edit" /> */}
                <Button icon={<EditDrawer
                  name={filteredName.name.label}
                  size={filteredName.Size.label}
                  type={filteredName.type.label}
                />}  aria-label="Edit" />
                <Button icon={<DeleteItemConfirmation 
                  item={filteredName.name.label}
                  id={filteredName.ID.label}
                  />}  aria-label="Delete" />
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
     {/* ページネーション UI */}
      <div className={styles.pagination}>
        <Button
          appearance="secondary"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          <PreviousFrameRegular />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            appearance={currentPage === i + 1 ? "primary" : "secondary"}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}

        <Button
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