import classes from "./ScrollToTopBtn.module.css";
import React, { useState, useEffect } from "react";
import { visibleStyles } from "./utils";

export default function ScrollToTopBtn() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {showTopBtn && (
        <button style={visibleStyles} onClick={goToTop} className={classes.btn}>
          <i className={classes.arrowDown}></i> Back to top
        </button>
      )}
    </React.Fragment>
  );
}
