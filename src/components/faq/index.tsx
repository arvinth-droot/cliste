import React from "react";
import classes from "./faq.module.css";

function Faq() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container_wrapper}>
        <div className={classes.container}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ width: "50%" }}>
              <h2 className={classes.title}>
                Frequently asked questions -All about Cliste life
              </h2>
              <p className={classes.description}>
                If for some reasons your doubts are not answered yet, please
                feel free to <span> contact us</span>
              </p>

              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 50,
              }}
            >
              <div>
                <p className={classes.question}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore ?
                </p>
                <p className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>

              <div>
                <p className={classes.question}>
                  Lorem ipsum dolor sit amet. elit, sed do eiusmod tempor
                  incididunt ut labore et dolore ?
                </p>

                <p className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
