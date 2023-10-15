import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Body/Body";
import ScrollToTopBtn from "../components/Body/ScrollToTopBtn";
import classes from "../styles/index.module.css";
import NavbarBottomLine from "../components/UnderNavbar/navbarBottomLine";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>OLX Clone</title>
        <meta name="description" content="OLX---your one stop e-commerce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.body}>
        <Navbar />
        <NavbarBottomLine />
        <img src={"/images/banner.JPG"} className={classes.image}></img>
        <h1 className={classes.recommendationLabel}>Fresh recommendations</h1>
        <Body />
        <ScrollToTopBtn></ScrollToTopBtn>
      </div>
    </Fragment>
  );
}
