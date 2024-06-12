import { useState, useReducer, useEffect, useContext, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownMenu,
  Avatar,
  DropdownTrigger,
  DropdownItem,
  AvatarIcon,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LinkProvider from "./LinkProvider.jsx";
import { AuthContext } from "../App.jsx";
import { Toast } from "primereact/toast";
import { getAuth } from "firebase/auth";
import { appConfig } from "../config/firebase.config.js";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = getAuth(appConfig);
  const menuItems = [
    {
      navText: "Home",
      path: "/little-lemon-restaurant/",
    },
    {
      navText: "About",
      path: "/little-lemon-restaurant/about",
    },
    {
      navText: "Menu",
      path: "/little-lemon-restaurant/menu",
    },
    {
      navText: "Reservations",
      path: "/little-lemon-restaurant/reservation",
    },
    {
      navText: "Order Online",
      path: "/little-lemon-restaurant/order_online",
    },
  ];
  const [active, dispatchActive] = useReducer(
    (state, action) => {
      switch (action.index) {
        case 0:
          return {
            activeIndex: 0,
          };
        case 1:
          return {
            activeIndex: 1,
          };
        case 2:
          return {
            activeIndex: 2,
          };
        case 3:
          return {
            activeIndex: 3,
          };
        case 4:
          return {
            activeIndex: 4,
          };
        default:
          return action.index;
      }
    },
    {
      activeIndex: 0,
    }
  );
  const toast = useRef(null);
  const location = useLocation();
  useEffect(() => {
    let idx;
    if (location.pathname === "/little-lemon-restaurant/") {
      idx = 0;
    } else if (location.pathname === "/little-lemon-restaurant/about") {
      idx = 1;
    } else if (location.pathname === "/little-lemon-restaurant/menu") {
      idx = 2;
    } else if (location.pathname === "/little-lemon-restaurant/reservation") {
      idx = 3;
    } else if (location.pathname === "/little-lemon-restaurant/order_online") {
      idx = 4;
    } else {
      idx = 999;
    }
    dispatchActive({
      index: idx,
    });
  }, [location]);
  const [isLogin, setIsLogin] = useState(false);
  const user = useContext(AuthContext);
  // const logoLetterText = isLogin.email.charAt(0);

  useEffect(() => {
    setIsLogin(user);
  }, [user]);
  const showInfoToast = () => {
    toast.current.show({
      severity: "info",
      summary: "Information",
      detail: "This page is under construction.",
      life: 3000, // Adjust the duration as needed
    });
  };
  const confirmSignOut = () => {
    confirmDialog({
      message: "Do you want to sign out from this browser?",
      header: "Sign Out Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };
  const accept = () => {
    auth.signOut();
    toast.current.show({
      severity: "info",
      summary: "Signed Out",
      detail: "You have sign out successfully.",
      life: 3000, // Adjust the duration as needed
    });
  };
  const reject = () => {
    toast.current.show({
      severity: "info",
      summary: "Sign Out Denied",
      detail: "You have cancled your sign out.",
      life: 3000, // Adjust the duration as needed
    });
  };
  return (
    <>
      <Navbar
        maxWidth="xl"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        style={{
          background: "rgba(255,255,255,0.3)",
          borderColor: "#495E57",
        }}
      >
        <NavbarContent className="sm:hidden min-[950px]:flex">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden transition-all sm:flex gap-2 lg:gap-6"
          justify="center"
        >
          <LinkProvider to={"/little-lemon-restaurant/"}>
            <NavbarItem
              className={
                active.activeIndex === 0
                  ? "bg-[#495E57] hover:bg-[#495E57] cursor-default py-2 px-4 max-[765px]:py-1 max-[765px]:px-2 rounded-lg transition-colors"
                  : "hover:bg-[#495E57] cursor-default py-2 px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
              }
            >
              <Link
                className={
                  active.activeIndex === 0
                    ? "text-[18px] max-[765px]:text-[14px] text-[#f4ce14] font-semibold tracking-wide cursor-default"
                    : "text-[18px] text-[#33413c] max-[765px]:text-[14px] font-semibold tracking-wide cursor-default "
                }
                color="foreground"
                to={"/little-lemon-restaurant/"}
              >
                Home
              </Link>
            </NavbarItem>
          </LinkProvider>
          <LinkProvider to={"/little-lemon-restaurant/about"}>
            <NavbarItem
              className={
                active.activeIndex === 1
                  ? "bg-[#495E57] py-2 cursor-default px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
                  : "hover:bg-[#495E57] cursor-default py-2 px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
              }
            >
              <Link
                className={
                  active.activeIndex === 1
                    ? "text-[18px]  max-[765px]:text-[14px] text-[#f4ce14] font-semibold tracking-wide  cursor-default"
                    : "text-[18px]  text-[#33413c] max-[765px]:text-[14px] font-semibold tracking-wide  cursor-default"
                }
                color="foreground"
                to={"/little-lemon-restaurant/about"}
              >
                About
              </Link>
            </NavbarItem>
          </LinkProvider>
          <Link to={"/little-lemon-restaurant/menu"}>
            <NavbarItem
              className={
                active.activeIndex === 2
                  ? "bg-[#495E57] py-2 px-4 rounded-lg cursor-default transition-colors max-[765px]:py-1 max-[765px]:px-2"
                  : "hover:bg-[#495E57] cursor-default py-2 px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
              }
            >
              <Link
                className={
                  active.activeIndex === 2
                    ? "text-[18px] text-[#f4ce14]  max-[765px]:text-[14px] font-semibold tracking-wide cursor-default"
                    : "text-[18px]  text-[#33413c] font-semibold tracking-wide   max-[765px]:text-[14px] cursor-default"
                }
                color="foreground"
                to={"/little-lemon-restaurant/menu"}
              >
                Menu
              </Link>
            </NavbarItem>
          </Link>
          <Link to={"/little-lemon-restaurant/reservation"}>
            <NavbarItem
              className={
                active.activeIndex === 3
                  ? "bg-[#495E57] py-2 px-4 cursor-default rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
                  : "hover:bg-[#495E57] cursor-default py-2 px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
              }
            >
              <Link
                className={
                  active.activeIndex === 3
                    ? "text-[18px] text-[#f4ce14] font-semibold tracking-wide  max-[765px]:text-[14px] cursor-default"
                    : "text-[18px] text-[#33413c] font-semibold tracking-wide  cursor-default  max-[765px]:text-[14px]"
                }
                color="foreground"
                to={"/little-lemon-restaurant/reservation"}
              >
                Reservations
              </Link>
            </NavbarItem>
          </Link>
          <Link to={"/little-lemon-restaurant/order_online"}>
            <NavbarItem
              className={
                active.activeIndex === 4
                  ? "bg-[#495E57] py-2 px-4 rounded-lg cursor-default transition-colors max-[765px]:py-1 max-[765px]:px-2"
                  : "hover:bg-[#495E57] py-2 px-4 rounded-lg transition-colors cursor-default max-[765px]:py-1 max-[765px]:px-2"
              }
            >
              <Link
                className={
                  active.activeIndex === 4
                    ? "text-[18px] text-[#f4ce14] font-semibold tracking-wide cursor-default  max-[765px]:text-[14px]"
                    : "text-[18px] text-[#33413c] font-semibold tracking-wide cursor-default  max-[765px]:text-[14px]"
                }
                color="foreground"
                to={"/little-lemon-restaurant/order_online"}
              >
                Order Online
              </Link>
            </NavbarItem>
          </Link>
        </NavbarContent>
        <NavbarContent justify="end">
          {isLogin ? (
            <>
              <NavbarItem>
                <Dropdown className="bg-[#DFC338]" placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      icon={<AvatarIcon />}
                      isBordered
                      classNames={{
                        base: "bg-gradient-to-br from-[#495E57] to-[#F4CE14] ring-[#495E57] text-[18px] text-[#F4CE14]/80",
                      }}
                      as="button"
                      className="transition-transform custom-shadow"
                      name={""}
                      size="sm"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                      key="profile"
                      textValue="Profile Information"
                      className="h-14 gap-2 text-[#495E57] custom-profile-dropdown transition-all"
                    >
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">
                        {user ? user.email : "----"}
                      </p>
                    </DropdownItem>
                    <DropdownItem
                      key="settings"
                      textValue="Profile Information"
                      className="text-[#495E57] hover:text-[#495E57]  custom-profile-dropdown transition-all"
                      onPress={() => {
                        showInfoToast();
                      }}
                    >
                      My Settings
                    </DropdownItem>
                    <DropdownItem
                      key="team_settings"
                      onPress={() => {
                        showInfoToast();
                      }}
                      textValue="Profile Information"
                      className="text-[#495E57] hover:text-[#495E57]  custom-profile-dropdown transition-all"
                    >
                      Team Settings
                    </DropdownItem>
                    <DropdownItem
                      className="text-[#495E57] hover:text-[#495E57]  custom-profile-dropdown transition-all"
                      key="analytics"
                      onPress={() => {
                        showInfoToast();
                      }}
                      textValue="Profile Information"
                    >
                      Analytics
                    </DropdownItem>
                    <DropdownItem
                      className="text-[#495E57] hover:text-[#495E57]  custom-profile-dropdown transition-all"
                      key="system"
                      onPress={() => {
                        showInfoToast();
                      }}
                      textValue="Profile Information"
                    >
                      System
                    </DropdownItem>
                    <DropdownItem
                      className="text-[#495E57] hover:text-[#495E57]  custom-profile-dropdown transition-all"
                      key="configurations"
                      onPress={() => {
                        showInfoToast();
                      }}
                      textValue="Profile Information"
                    >
                      Configurations
                    </DropdownItem>
                    <DropdownItem
                      className="text-[#495E57] hover:text-[#495E57]  custom-profile-dropdown transition-all"
                      key="help_and_feedback"
                      onPress={() => {
                        showInfoToast();
                      }}
                      textValue="Profile Information"
                    >
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem
                      className="text-[#495E57] hover:text-[#495E57] transition-all"
                      key="logout"
                      color="danger"
                      textValue="Profile Information"
                      onPress={() => {
                        confirmSignOut();
                      }}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </>
          ) : (
            <>
              <Link to={"/little-lemon-restaurant/login"}>
                <NavbarItem
                  className={
                    "bg-[#495E57] py-2 px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
                  }
                >
                  <Link
                    className={
                      "text-[18px] text-[#f4ce14] font-semibold tracking-wide  max-[765px]:text-[14px]"
                    }
                    color="foreground"
                    to={"/little-lemon-restaurant/login"}
                  >
                    Login
                  </Link>
                </NavbarItem>
              </Link>
              <Link to={"/little-lemon-restaurant/sign_up"}>
                <NavbarItem
                  className={
                    "bg-[#495E57] py-2 px-4 rounded-lg transition-colors max-[765px]:py-1 max-[765px]:px-2"
                  }
                >
                  <Link
                    className={
                      "text-[18px] text-[#f4ce14] font-semibold tracking-wide  max-[765px]:text-[14px]"
                    }
                    color="foreground"
                    to={"/little-lemon-restaurant/sign_up"}
                  >
                    Sign Up
                  </Link>
                </NavbarItem>
              </Link>
            </>
          )}
        </NavbarContent>
        <NavbarMenu className="bg-[rgba(255,255,255,0.5)]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              style={{
                // marginBottom: "20px",
                // padding: "10px",
                paddingTop: "20px",
              }}
              key={`${item.navText}-${index}`}
            >
              <Link
                color={"foreground"}
                className={
                  active.activeIndex === index
                    ? "w-full mobile-links-active mobile-links"
                    : "w-full mobile-links"
                }
                style={{
                  width: "100%",
                  display: "block",
                }}
                size="lg"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                to={item.path}
              >
                {item.navText}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Toast ref={toast} position="bottom-right" />
      <ConfirmDialog />
    </>
  );
}
