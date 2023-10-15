import React, { useState } from "react";
import classes from "./LogInModal.module.css";
import Image from "next/image";

export default function LogInModal(props) {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [entrance, setEntrance] = useState("Log in");
  const [btnText, setBtnText] = useState("Sign in");
  const [membership, setMembership] = useState("Already a member?");
  const [valid, setValid] = useState(true);

  function inHandler() {
    if (entrance === "Log in") {
      setEntrance("Sign in");
      setBtnText("Log in");
    } else if (entrance === "Sign in") {
      setEntrance("Log in");
      setBtnText("Sign in");
    }
    if (membership === "Already a member?") {
      setMembership("Not a member?");
    } else if (membership === "Not a member?") {
      setMembership("Already a member?");
    }
  }
  function btnClickHandler(e) {
    e.preventDefault();
    if (eMail.includes("@") && password != "") {
      props.setIsLoggedin(true);
      setEMail("");
      setPassword("");
      props.setStyle({
        diplay: "none",
      });
      props.setCStyle({
        display: "none",
      });
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <div style={props.style} className={classes.backdrop}>
      <div className={classes.div} style={props.cardStyle}>
        <div className={classes.Xcontainer} onClick={props.onClick}></div>
        <div className={classes.X} onClick={props.onClick}></div>
        <img src={"/images/LogoForLogin.JPG"} className={classes.logo}></img>
        <h3 classes={classes.welcome}>WELCOME TO OLX</h3>
        <h5 classes={classes.trust}>
          The trusted community of buyers and sellers.
        </h5>
        <label>Enter Email: </label>
        <input
          placeholder="Enter email here..."
          value={eMail}
          onChange={(e) => {
            setEMail(e.target.value);
          }}
        ></input>
        <label>Enter Password: </label>
        <input
          type="password"
          placeholder="Enter password here..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className={classes.btn} onClick={btnClickHandler}>
          {btnText}
        </button>
        {!valid && (
          <lable className={classes.warning}>Email or Password not valid</lable>
        )}
        <h6>
          {membership} <a onClick={inHandler}>{entrance}</a> instead
        </h6>
        <p>
          By continuing, you are accepting <a>OLX Terms of use</a> and{" "}
          <a>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
