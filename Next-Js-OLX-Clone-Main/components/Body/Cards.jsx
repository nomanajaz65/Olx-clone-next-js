import classes from "./Cards.module.css";
import React from "react";

export default function Card(props) {
  return (
    <div className={classes.grid_item} style={props.style}>
      <img src={props.Img} alt="" />
      <div className={classes.title}>{props.title}</div>
      <h4>Rs, {props.price}</h4>
      <label className={classes.location}>{props.location}</label>
      {props.featured === "yes" && (
        <React.Fragment>
          <div className={classes.featured}>FEATURED</div>
          <div className={classes.strip}></div>
        </React.Fragment>
      )}
    </div>
  );
}
