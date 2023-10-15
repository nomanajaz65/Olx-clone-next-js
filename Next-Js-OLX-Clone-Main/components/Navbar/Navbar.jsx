import classes from "./Navbar.module.css";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import LogInModal from "./LogInModal";
import LoginDropdown from "./LoginDropdown";
import { IconContext } from "react-icons";
import {
  clickedStyle,
  onClickDropdownCardStyle,
  unClickedStyle,
  modalStyleArray,
  loginDropdownCardStyleArray,
  setCStyleArray,
} from "./styleFunctions";

export default function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [style, setStyle] = useState({
    display: "none",
  });
  const [cStyle, setCStyle] = useState({ display: "none" });
  const ModalStyle = modalStyleArray;
  const loginDropdownCardStyle = loginDropdownCardStyleArray;
  function styleHandler() {
    setStyle(ModalStyle);
    setCStyle(setCStyleArray);
  }
  function bckdropHandler() {
    setStyle({
      diplay: "none",
    });
    setCStyle({
      display: "none",
    });
  }
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.logo}>
            <Link href="/">
              {/* <img src={"/images/download.png"}></img> */}
              <img src={"/images/olx-logo.JPG"}></img>
            </Link>
          </li>
          <a href="https://www.olx.com.pk/motors/" style={{ width: "100px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="24"
              viewBox="0 0 66 20"
              alt="OLX Motors"
              className={classes.motors}
            >
              <path d="M4.9 10a1.33 1.33 0 1 0 0 2.66 1.33 1.33 0 0 0 0-2.67zm0 1.8a.48.48 0 1 1 0-.95.48.48 0 0 1 0 .96zM15.65 10a1.33 1.33 0 1 0 0 2.66 1.33 1.33 0 0 0 0-2.67zm0 1.8a.48.48 0 1 1 0-.95.48.48 0 0 1 0 .96zm-2.03.22H7v.85h6.63v-.85zM24 13.48h1.14V8.72l2.13 4.76h.79l2.12-4.76v4.76h1.14V6.53H30.1l-2.43 5.45-2.44-5.45H24v6.95zM39.54 10a3.46 3.46 0 0 0-3.55-3.55A3.48 3.48 0 0 0 32.44 10a3.48 3.48 0 0 0 3.55 3.56A3.47 3.47 0 0 0 39.54 10zm-5.93 0c0-1.57 1-2.55 2.38-2.55s2.38.98 2.38 2.55c0 1.57-1 2.57-2.38 2.57s-2.38-1-2.38-2.57zm6.69-2.53h1.86v6.02h1.14V7.46h1.85v-.93H40.3v.93zM53.02 10a3.46 3.46 0 0 0-3.55-3.55A3.48 3.48 0 0 0 45.94 10a3.48 3.48 0 0 0 3.55 3.56A3.47 3.47 0 0 0 53.02 10zm-5.93 0c0-1.57 1-2.55 2.38-2.55s2.39.98 2.39 2.55c0 1.57-1 2.57-2.38 2.57s-2.38-1-2.38-2.57zm10.75-1.38c0 .7-.4 1.18-1.3 1.18H55.3V7.46h1.26c.89 0 1.29.45 1.29 1.15zm-3.7-2.08v6.95h1.15V10.7h.87l1.6 2.79h1.36L57.4 10.6A1.98 1.98 0 0 0 59 8.63c0-1.13-.8-2.08-2.45-2.08h-2.4zm11.02 4.98c0-2.54-3.68-1.56-3.68-3.13 0-.67.5-.99 1.17-.97.72.02 1.13.45 1.17.92h1.26c-.1-1.19-1.04-1.89-2.37-1.89-1.42 0-2.4.76-2.4 1.98 0 2.56 3.7 1.47 3.7 3.15 0 .6-.45 1.02-1.25 1.02s-1.2-.46-1.24-1.03H60.3c0 1.23 1.07 2 2.46 2 1.55 0 2.4-1 2.4-2.05z"></path>
              <path d="M19.09 7.26a1.23 1.23 0 0 0-1.54-.8l-.68.21L15.7 4.2l-.37-.12a17.75 17.75 0 0 0-5.3-.74 13.32 13.32 0 0 0-4.84.76l-.33.13-1.12 2.6-.48-.16a1.23 1.23 0 1 0-.74 2.34l.1.03-.08.14a4.5 4.5 0 0 0-.45 1.67c-.01.27 0 .82.02 1.35l.01 2.96v.03c-.02.26.01.53.08.8a.82.82 0 0 0 .83.54h1.75a.82.82 0 0 0 .82-.55c.07-.26.1-.53.09-.8v-.32c2.04.18 3.35.27 4.64.27 1.29 0 2.55-.09 4.5-.26v.32c-.02.26.01.53.09.8a.82.82 0 0 0 .82.54h1.75a.81.81 0 0 0 .82-.55c.08-.26.1-.53.09-.8V12.24c.05-.54.09-1.1.08-1.42A4.14 4.14 0 0 0 18 9.07l-.08-.16.35-.1a1.23 1.23 0 0 0 .8-1.55zM5.5 4.89h.02a12.48 12.48 0 0 1 4.5-.7c1.7-.02 3.4.21 5.03.7h.03l.96 2.03a19.57 19.57 0 0 1-4.74.46h-.79a31.31 31.31 0 0 1-5.94-.33l.93-2.16zm-.67 10.3a2.41 2.41 0 0 1-.03.48H3a2.4 2.4 0 0 1-.03-.49v-.64c.12.06.25.1.38.1l1.48.14v.4zm12.72-.04v.04a2.39 2.39 0 0 1-.03.48h-1.8a2.41 2.41 0 0 1-.03-.49v-.4l1.39-.12c.17-.02.33-.07.47-.15v.64zM18.03 8l-1.3.41.52 1.06c.22.43.35.9.38 1.37 0 .27-.03.78-.06 1.25h-.01v.15l-.05.78c-.01.32-.21.78-.51.8-3.32.32-4.99.47-6.67.47-1.7 0-3.43-.16-6.9-.47-.21-.02-.35-.36-.4-.66a11.35 11.35 0 0 1-.07-.97v-.1a18.51 18.51 0 0 1-.02-1.2 3.6 3.6 0 0 1 .36-1.3l.57-1.03-1.09-.34a.37.37 0 0 1 .23-.72l1.21.39.01-.03c1.82.32 3.66.45 5.5.39h1.57a19.82 19.82 0 0 0 5.12-.52l1.4-.44a.38.38 0 0 1 .46.24.37.37 0 0 1-.25.47z"></path>
            </svg>
          </a>
          <a
            href="https://www.olx.com.pk/properties/"
            style={{ width: "100px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="24"
              viewBox="0 0 73 20"
              alt="OLX Property"
              className={classes.property}
            >
              <path d="M17.42 17.72H2.5V16.7h.4V2.5h8.47v14.21h5.04v-8.7l-4.03-1.35V5.6l5.04 1.68v9.43h.4v1h-.4zM3.92 16.7h6.44V3.51H3.91v13.2zm10.31-2.94v-.81h.82v.81h-.82zm-1.63 0v-.81h.82v.81h-.82zm-4.88 0v-.81h1.63v.81H7.72zm-2.45 0v-.81H6.9v.81H5.27zm8.96-2.44v-.81h.82v.81h-.82zm-1.63 0v-.81h.82v.81h-.82zm-4.88 0v-.81h1.63v.81H7.72zm-2.45 0v-.81H6.9v.81H5.27zm8.96-1.63V8.9h.82v.81h-.82zm-1.63 0V8.9h.82v.81h-.82zm-4.88 0V8.9h1.63v.81H7.72zm-2.45 0V8.9H6.9v.81H5.27zm2.45-2.44v-.82h1.63v.82H7.7zm-2.45 0v-.82H6.9v.82H5.27zm2.45-1.63v-.81h1.63v.8H7.7zm-2.45 0v-.81H6.9v.8H5.27zm19.87 4.1V7.46h1.26c.89 0 1.29.42 1.29 1.14 0 .7-.4 1.14-1.29 1.14h-1.26zm3.72-1.13c0-1.12-.81-2.06-2.46-2.06H24v6.95h1.14v-2.83h1.26c1.81 0 2.46-1.07 2.46-2.06zm4.78.02c0 .69-.4 1.18-1.3 1.18H31.1V7.46h1.26c.89 0 1.29.45 1.29 1.15zm-3.7-2.08v6.95h1.15V10.7h.87l1.6 2.79h1.36L33.2 10.6a1.98 1.98 0 0 0 1.6-1.98c0-1.13-.8-2.08-2.45-2.08h-2.4zM43 10a3.46 3.46 0 0 0-3.55-3.55A3.48 3.48 0 0 0 35.89 10a3.48 3.48 0 0 0 3.55 3.56A3.47 3.47 0 0 0 42.99 10zm-5.93 0c0-1.57 1-2.55 2.38-2.55s2.38.98 2.38 2.55c0 1.57-1 2.57-2.38 2.57s-2.38-1-2.38-2.57zm8.19-.26V7.47h1.26c.89 0 1.29.42 1.29 1.14 0 .7-.4 1.13-1.3 1.13h-1.25zm3.72-1.13c0-1.13-.81-2.07-2.46-2.07h-2.4v6.95h1.14v-2.83h1.26c1.8 0 2.46-1.07 2.46-2.06zm4.92-2.08h-3.84v6.96h3.84v-.94h-2.7v-2.13h2.4V9.5h-2.4V7.46h2.7v-.93zM59 8.6c0 .7-.4 1.19-1.3 1.19h-1.25V7.46h1.26c.89 0 1.29.45 1.29 1.15zm-3.7-2.07v6.95h1.15V10.7h.87l1.6 2.79h1.36l-1.72-2.89a1.98 1.98 0 0 0 1.6-1.98c0-1.13-.8-2.08-2.45-2.08h-2.4zm5.97.93h1.86v6.01h1.14V7.46h1.85v-.93h-4.85v.93zm7.71 3.5v2.51h1.14v-2.52l2.3-4.43h-1.26l-1.6 3.42-1.62-3.41h-1.27l2.31 4.42z"></path>
            </svg>
          </a>
          <input
            type="search"
            className={classes.location}
            placeholder="    Pakistan"
          ></input>

          <input
            type="search"
            spellCheck="false"
            className={classes.search}
            autoComplete="free-text-search"
            placeholder="  Find Cars, Mobile Phones and more..."
          ></input>
          <div className={classes.icon}>
            <IconContext.Provider value={{ color: "white", size: "29px" }}>
              <div>
                <BiSearch className={classes.searchIcon} />
              </div>
            </IconContext.Provider>
          </div>
          {!isLoggedin && (
            <h3 className={classes.login} onClick={styleHandler}>
              Login
            </h3>
          )}
          <LogInModal
            style={style}
            onClick={bckdropHandler}
            cardStyle={cStyle}
            setIsLoggedin={setIsLoggedin}
            setStyle={setStyle}
            setCStyle={setCStyle}
          ></LogInModal>
          <LoginDropdown
            setInfoClicked={setInfoClicked}
            setIsLoggedin={setIsLoggedin}
            style={
              infoClicked ? loginDropdownCardStyle : onClickDropdownCardStyle
            }
          ></LoginDropdown>
          {isLoggedin && (
            <div
              className={classes.userIcon}
              onClick={() => {
                setArrowClicked(!arrowClicked);
                setInfoClicked(!infoClicked);
              }}
            >
              <img
                src="	https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                alt="User profile"
              />
              <i style={!arrowClicked ? clickedStyle : unClickedStyle}></i>
            </div>
          )}
          <div className={classes.sell}>
            <h3>+ Sell</h3>
            <img
              className={classes.sellBorder}
              src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
            ></img>
          </div>
        </ul>
      </nav>
    </>
  );
}
