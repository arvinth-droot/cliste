"use client";
import React, { useState } from "react";
import classes from "./header.module.css";
import Logo from "@/assets/Logo";
import AppleStore from "@/assets/image/appleStore.png";
import PlayStore from "@/assets/image/playStore.png";
import Image from "next/image";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo_div}>
          <Logo className={classes.logo} />
          <h5 className={classes.title}>Life</h5>
        </div>

        <ul className={classes.nav_ul}>
          <li className={classes.nav_text}>Features</li>
          <li className={classes.nav_text}>Why Choose Us</li>
          <li className={classes.nav_text}>Recipe</li>
          <li className={classes.nav_text}>FAQs</li>
          <li className={classes.nav_text}>Contact Us</li>
        </ul>

        <div className={classes.image_div}>
          <Image src={PlayStore} height={28} width={28} alt="PlayStore" />
          <Image src={AppleStore} height={28} width={28} alt="AppleStore" />
        </div>

        {/* Mobile */}

        <div
          className={classes.menu_icon}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7H21M3 12H21M3 17H21"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>


      {openMenu && (
        <div className={classes.hamburger_menu}>
          <ul className={classes.mob_nav_ul}>
            <li className={classes.nav_text}>Features</li>
            <li className={classes.nav_text}>Why Choose Us</li>
            <li className={classes.nav_text}>Recipe</li>
            <li className={classes.nav_text}>FAQs</li>
            <li className={classes.nav_text}>Contact Us</li>
          </ul>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h4>Get Cliste Life app</h4>
            <h6>
              Get the Cliste Sense app now for the ultimate kitchen assistant in
              the palm of your hand
            </h6>

            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                border: "1.193px solid #CEC8C8",
                borderRadius: 6,
                padding: "6px 12px",
                width: 200,
              }}
            >
              <Image src={PlayStore} height={31} width={31} alt="PlayStore" />
              <h6 className={classes.download_button_text}>
                Download for Android
              </h6>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                border: "1.193px solid #CEC8C8",
                borderRadius: 6,
                padding: "6px 12px",
                width: 200,
              }}
            >
              <Image src={AppleStore} height={28} width={28} alt="AppleStore" />
              <h6 className={classes.download_button_text}>Download for iOS</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
