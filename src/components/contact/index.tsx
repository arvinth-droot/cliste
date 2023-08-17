"use client";
import React from "react";
import classes from "./contact.module.css";

function Contact() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_container}>
        <div className={classes.container}>
          <div style={{ width: "100%" }}>
            <div style={{ width: "80%" }}>
              <h2 className={classes.title}>
                We're eager to hear your friendly hello!
              </h2>
              <p className={classes.description}>
                Got a question, suggestion, or just want to say hi? We can't
                wait to connect with you! Fill out the form below, and we'll get
                back to you ASAP.
              </p>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <form>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 20,
                }}
              >
                <input
                  className={classes.input}
                  placeholder="Enter your first name"
                />
                <input
                  className={classes.input}
                  placeholder="Enter your last name"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 20,
                }}
              >
                <input
                  className={classes.input}
                  placeholder="Enter your email"
                />
                <input
                  className={classes.input}
                  placeholder="Enter your phone name"
                />
              </div>

              <textarea
                placeholder="Enter your message"
                rows={10}
                className={classes.text_area}
              />

              <button
                className={classes.btn}
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
