import React from "react";
import classes from "./community.module.css";
import CommunityImage from "@/assets/image/community.png";
import Image from "next/image";

export default function Community() {
  return (
    <div style={{ marginTop: 50,backgroundColor:'#F3F8EA',padding:"44px 0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems:'center'
          }}
        >
          <div style={{ width: "50%" }}>
            <div style={{ width: "80%" }}>
              <h3 className={classes.title}>
                Bee a part a part of Cliste Community !
              </h3>
              <h6 className={classes.description}>
                Showcase your unique cooking skills and inspire others to try
                out your delectable dishes, show your culinary creativity by
                sharing your beloved recipes with the Cliste Life community.
                <br />
                <br />
                Connect with fellow food enthusiasts through lively discussions
                in the recipe comment section, share cooking tips, variations,
                and appreciation for each other's culinary masterpieces.
                <br />
                <br />
                Help the community discover the most loved and top-rated recipes
                for an exceptional culinary experience.. .
              </h6>
            </div>
          </div>

          <div>
            <Image src={CommunityImage} alt="image"/>
          </div>
        </div>
      </div>
    </div>
  );
}
