import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "./NotFound.module.css";
import Footer from "../Body/Footer";
import Navbar from "../Navbar/Navbar";

const NotFound = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }, [timeLeft]);
  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <h1 className={classes.h1}>Ooooops....</h1>
      <h2 className={classes.h2}>That page cannot be found.</h2>
      <p className={classes.p}>
        You will be redirected to the <Link href="/">Homepage</Link>
      </p>
      <label className={classes.label}>in {timeLeft} seconds.</label>
      <Footer />
    </div>
  );
};

export default NotFound;
