import React from "react";
import classes from "./hero.module.css";
import PlaceHolder from "@/assets/image/hero.png";
import Image from "next/image";
import StoreButton from "@/components/common/button/store-button/StoreButton";
import AppleStore from "@/assets/image/appleStore.png";
import PlayStore from "@/assets/image/playStore.png";

export default function Hero() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container_wrapper}>
        <div className={classes.container}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <h2 className={classes.title}>
              Get ready for a transformative
              <span className={classes.title_highlight}> daily lifestyle!</span>
            </h2>
            <h6 className={classes.description}>
             {`Welcome to our world of wellness! Your health is our heartbeat.
              Together, we'll conquer your health goals with a sprinkle of
              creativity and a dash of friendly motivation.`}
            </h6>

            <StoreButton logo={PlayStore} title="Download for Android" />
            <StoreButton logo={AppleStore} title="Download for iOS" />
          </div>

          <div
            style={{
              width: "100%",
              borderRadius: "50px 0px 0px 0px",
              overflow: "hidden",
            }}
          >
            <Image
              src={PlaceHolder}
              alt="image"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
