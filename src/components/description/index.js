import React from "react";
import classes from "./description.module.css";

function Description() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container_wrapper}>
        <div className={classes.container}>
          <div style={{width:'100%'}}>
            <h4 className={classes.title}>The easiest way to level up your Lifestyle.</h4>
            <h6 className={classes.sub_title}>
              Plan your meals, take your medications on time, stay hydrated, and
              organize your daily activities with ease. Using Cliste Life app
              experience the future of effortless and sustainable living.
            </h6>
          </div>
          <div style={{width:'100%'}}>Accordion</div>
        </div>
      </div>
    </div>
  );
}

export default Description;
