import React from "react";
import Image from "next/image";
import "./store_button.module.css";
import classes from "./store_button.module.css";

interface props {
  logo: any;
  title: string;
  styles: object;
}

function StoreButton({ logo, title, styles }: props) {
  return (
    <div
      style={{
        borderRadius: 8,
        border: " 1.5px solid #CEC8C8",
        padding: "8px 16px",
        display: "flex",
        gap: 10,
        alignItems: "center",
        width: 260,
      }}
    >
      <Image src={logo} height={28} width={28} alt="AppleStore" />

      <h6 className={classes.text} style={{ ...styles }}>
        {title}
      </h6>
    </div>
  );
}

export default StoreButton;
