import classes from "./Body.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Card from "./Cards";
import Footer from "./Footer";
import { CardDescription, CardDescription2 } from "./utils";

export default function Body() {
  const [btnStyle, setBtnStyle] = useState({
    marginTop: "5rem",
  });
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("more");
  const [grid, setGrid] = useState({
    marginLeft: "7.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(4, 19rem)",
    gridTemplateRows: "repeat(6, 15.5rem)",
    gridColumnGap: "0.6%",
    gridRowGap: "0.6%",
  });
  function showHandler() {
    setShow(!show);
    if (!show) {
      setBtnText("less");
      setBtnStyle({
        marginTop: "25rem",
      });
      setGrid({
        marginLeft: "7.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 19rem)",
        gridTemplateRows: "repeat(16, 15.5rem)",
        gridColumnGap: "0.6%",
        gridRowGap: "0.6%",
      });
    } else if (show) {
      setBtnText("more");
      setBtnStyle({
        marginTop: "7%",
      });
      setGrid({
        marginLeft: "7.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 19rem)",
        gridTemplateRows: "repeat(6, 15.5rem)",
        gridColumnGap: "0.6%",
        gridRowGap: "0.6%",
      });
    }
  }
  return (
    <div className={classes.body}>
      <div style={grid}>
        {CardDescription.map((CardDescription) => (
          <Card
            key={CardDescription.id}
            title={
              <Link href={"/products/" + CardDescription.id}>
                <div>{CardDescription.title}</div>
              </Link>
            }
            Img={CardDescription.Img}
            price={CardDescription.price}
            location={CardDescription.price}
            featured={CardDescription.featured}
          />
        ))}
        {CardDescription2.map((CardDescription2) => (
          <Card
            style={!show ? { display: "none" } : { display: "flex" }}
            key={CardDescription2.id}
            title={
              <Link href={"/products/" + CardDescription2.id}>
                <div>{CardDescription2.title}</div>
              </Link>
            }
            Img={CardDescription2.Img}
            price={CardDescription2.price}
            location={CardDescription2.price}
            featured={CardDescription2.featured}
          />
        ))}
      </div>
      <div style={btnStyle} className={classes.showMore}>
        <button
          className={classes.showMoreBtn}
          style={{ color: "black" }}
          onClick={showHandler}
        >
          Load {btnText}
        </button>
      </div>
      <img
        src={"/images/footerBanner.JPG"}
        className={classes.footerBanner}
      ></img>
      <Footer></Footer>
    </div>
  );
}
