import * as React from "@fluentui/react";



import type {
  JSXElement,
  //NavDensity,
  SplitNavItemProps,
  NavItemProps,
  NavCategoryItemProps,
  NavCategoryProps,
  MenuButtonProps,
} from "@fluentui/react-components";
import {
  NavCategory,
  NavCategoryItem,
  /* Hamburger, */
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  //AppItem,
  AppItemStatic,
  SplitNavItem,
  NavSubItemGroup,
  NavDivider,
  Menu,
  //MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  //Tooltip,
  makeStyles,
 // tokens,
} from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  People20Filled,
  People20Regular,
  //PersonLightbulb20Filled,
  //PersonLightbulb20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  bundleIcon,
/*   NotePin20Filled,
  NotePin20Regular,
  Person20Filled,
  Person20Regular, */
  Storage32Regular,
} from "@fluentui/react-icons";
import { NavLink, Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const useStyles = makeStyles({
  root: {
    display: "",
       
    
  },
  header: {
    display: "inline-flex",
    width: "800px",
    height: "60px",
    backgroundColor: "blue",
    padding: "0 16px",
    borderBottom: "1px solid #7d1010"

  },
  mainIcon: {
    marginLeft: "5px",
    fontSize: "20px"
  },
  nav: {
    minWidth: "150px",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
   
  },
  navLink :{
    textDecoration: "none",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    padding: "16px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  mainCont:{
    display: "flex",
    flexDirection: "row"
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    
  },
  pinned: {
    opacity: 1,
    transform: "translate3D(0, 0, 0)",
  },
});

const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular);
const PerformanceReviews = bundleIcon(
  PreviewLink20Filled,
  PreviewLink20Regular
);
const Interviews = bundleIcon(People20Filled, People20Regular);
/* const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const Person = bundleIcon(Person20Filled, Person20Regular);
 */
type SplitNavItemNestedProps = {
  splitNavItem?: SplitNavItemProps;
  navCategory?: NavCategoryProps;
  navCategoryItem?: NavCategoryItemProps;
  navSubItems?: SplitNavItemProps[];
};

type AppLayoutProps = {
  isAdmin: boolean,
};

const splitNavItemNestedProps: SplitNavItemNestedProps[] = [
  {
    splitNavItem: {
      navItem: { 
        value: "1",
        icon: <Dashboard />, 
        children: "Dashboard" ,
        href:"/OverView",
      },
    },
  },
  {
    splitNavItem: {
      navItem: {
        value: "2",
        icon: <Announcements />,
        children: "StorageSystem",
        href: "/StorageSystem",
      },
    },
  },
  {
    splitNavItem: {
      navItem: {
         value: "3",
         icon: <Search />, 
         children: "Provisioning",
         href: "/Provisioning",
        },
    },
  },
  {
    navCategory: { value: "4" },
    navCategoryItem: { icon: <Interviews />, children: "HostGroup" },
    navSubItems: [
      { navItem: { value: "5", children: "ISCSI" ,href:"/Iscsi"} },
      { navItem: { value: "6", children: "Fiber Chanel" ,href:"/Fc"} },
    ],
  },
  {
    splitNavItem: {
      navItem: {
        value: "7",
        icon: <PerformanceReviews />,
        children: "Performance",
        href: "/Monitoring",
      },
    },
  },
  /*
  {
    splitNavItem: {
      navItem: {
        value: "15",
        icon: <TrainingPrograms />,
        children: "Training Programs",
      },
    },
  },
  {
    navCategory: { value: "16" },
    navCategoryItem: {
      icon: <CareerDevelopment />,
      children: "Career Development",
    },
    navSubItems: [
      { navItem: { value: "17", children: "Career Paths" } },
      { navItem: { value: "18", children: "Planning" } },
    ],
  },
  {
    splitNavItem: {
      navItem: { value: "19", icon: <Analytics />, children: "Workforce Data" },
    },
  },
  {
    splitNavItem: {
      navItem: { value: "20", icon: <Reports />, children: "Reports" },
    },
  }, */

];

const DemoMenuPopover = () => {
  return (
    <MenuPopover>
      <MenuList>
 {/*    <MenuItemLink href="/Fc">Create </MenuItemLink>
        <MenuItemLink href="/Iscsi">Edit</MenuItemLink> */}
        <NavLink key={"fc"} to="/Fc"  style={({ isActive }) => ({
                  color: 'black',
                  textDecoration: isActive ? 'underline' : 'none',
                })}> FiberChanel </NavLink>
        <NavLink key={"iscsi"} to="/Iscsi"  style={({ isActive }) => ({
                  color: 'black',
                  textDecoration: isActive ? 'underline' : 'none',
                })}>iSCSI</NavLink>
      </MenuList>
    </MenuPopover>
  );
};

export const AppLayout = (AppLayoutProps:AppLayoutProps): JSXElement => {
  const styles = useStyles();
//  const icomExist= useRef(true);
    const density="small"
  //const [density, setNavDensity] = useState<NavDensity>("small");
 // const [enabledLinks, setEnabledLinks] = useState(true);
  //const [isAppItemIconPresent, setIsAppItemIconPresent] = useState(true);
  //const [isAppItemStatic, setIsAppItemStatic] = useState(true);
 // const { isAuthenticated, login, logout } = useAuth();
 // const linkDestination = enabledLinks ? "https://www.bing.com" : "";

  const appItemIcon =/*  isAppItemIconPresent ? (
    density === "small" ? (
      <Storage32Regular />
    ) : ( */
      <Storage32Regular />
   /*  )
  ) : undefined; */

  const appItem =/*  isAppItemStatic ? ( */
    <AppItemStatic icon={appItemIcon}>StorageSystem</AppItemStatic>
 /*  ) : (
    <AppItem icon={appItemIcon} href={linkDestination}>
      Storage Series XXXXYYYY
    </AppItem>
  ); */
/* 
  const handlePinClick = (value: string) => {
    if (pinnedValues.includes(value)) {
      setPinnedValues(pinnedValues.filter((v :any) => v !== value));
    } else {
      setPinnedValues([value, ...pinnedValues]);
    }
  };

  const getToggleButtonProps = (value?: string) => {
    const isPinned = pinnedValues.includes(value || "");

    if (value) {
      return {
        checked: isPinned,
        onClick: () => handlePinClick(value),
        icon: isPinned ? <Pin /> : <Pin20Regular />,
        className: isPinned ? styles.pinned : "",
      };
    }
  };

  const getToggleButtonTooltipProps = (value?: string): TooltipProps => {
    if (value) {
      return {
        content: pinnedValues.includes(value) ? "Unpin" : "Pin",
        relationship: "label",
      };
    }
    return { content: "Pin", relationship: "label" };
  };
 */
  const getSubItems = (subItems: SplitNavItemProps[]) => {
    return subItems.map((subItem, subItemIndex) => {
    //  const subItemValue = (subItem.navItem as NavItemProps).value;
      const path = (subItem.navItem as NavItemProps)?.href;

      return (
        <Menu key={subItemIndex}>
          <MenuTrigger key={`${subItemIndex}-sit`}>
            {(triggerProps: MenuButtonProps) => (
              <NavLink 
                key={path} 
                to={path? path:""}  
                style={({ isActive }) => ({
                  color: 'black',
                  textDecoration: isActive ? 'underline' : 'none',
                })}
              >
              <SplitNavItem
                key={`${subItemIndex}-sni`}
                navItem={subItem.navItem}
                menuButton={triggerProps}
                /* menuButtonTooltip={{
                  content: "More options",
                  relationship: "label",
                }} */
 /*                toggleButtonTooltip={getToggleButtonTooltipProps(subItemValue)}
                toggleButton={getToggleButtonProps(subItemValue)} */
              
              />
            </NavLink>
            )}
            </MenuTrigger>
          <DemoMenuPopover />
        </Menu>
      );
    });
  };

  const getNavItems = (isPinnable: boolean) => {
    // We don't want the top four items to be pinnable.
    const startIndex = isPinnable ? 4 : 0;
    const endIndex = isPinnable ? splitNavItemNestedProps.length : 4;

    return splitNavItemNestedProps
      .slice(startIndex, endIndex)
      .map((item, index) => {
        const itemValue = (item.splitNavItem?.navItem as NavItemProps)?.value;
        const path = (item.splitNavItem?.navItem as NavItemProps)?.href;
        let isSkip = (index === 2 ) && !AppLayoutProps.isAdmin
      console.log(isSkip)
        if (itemValue) {
          if(!isSkip){
          return (
        <NavLink 
          key={index} 
          /*ToDo pathが空なら、下記のto=行を設定しないようにする*/
          to={path? path:""}  
          style={({ isActive }) => ({
              color: 'black',
              textDecoration: isActive ? 'underline' : 'none',
        })}>
            <SplitNavItem
              key={index}
              navItem={item?.splitNavItem?.navItem}
/*               toggleButtonTooltip={
                isPinnable ? getToggleButtonTooltipProps(itemValue) : null
              }
              toggleButton={
                isPinnable ? getToggleButtonProps(itemValue) : undefined
              } */
            />
         </NavLink>
          );
        }
        } else if (item.navCategoryItem) {
          return (
/*             <NavLink 
              key={index} 
              to={path? path:""}  
              style={({ isActive }) => ({
              color: 'black',
              textDecoration: isActive ? 'underline' : 'none',
              })}> */
            <NavCategory key={index} value={item.navCategory?.value || ""}>
              <NavCategoryItem key={`${index}-cat`} {...item.navCategoryItem} />
              <NavSubItemGroup key={`${index}-sig`}>
                {getSubItems(item.navSubItems || [])}
              </NavSubItemGroup>
            </NavCategory>
 /*          </NavLink> */
          );
        }
        return null;
      });
  };

  return (
    <>
    <div className={styles.root}>
    
      <HeaderBar />
      <div className={styles.content}>
          <NavDrawer
            defaultSelectedValue="3"
            open={true}
            density={density}
            type={"inline"}
            className={styles.nav}
          >
            <NavDrawerHeader>
{/*               <Tooltip content="Navigation" relationship="label">
                <Hamburger />
              </Tooltip> */}
            </NavDrawerHeader>
            <NavDrawerBody className={styles.navLink}>
             <div className={styles.mainIcon}>{appItem}</div>
             {getNavItems(false)}
             <NavDivider />
              {getNavItems(true)}
            </NavDrawerBody>
          </NavDrawer>
        <Outlet />
      </div>
    </div>
   
    </>
  );
};
export default AppLayout