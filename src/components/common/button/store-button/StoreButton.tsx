import React from "react";
import Image from "next/image";
import "./store_button.module.css";
import classes from "./store_button.module.css";

interface props {
  logo: any;
  title: string;
  styles?: object;
}

function StoreButton({ logo, title, styles }: props) {
  return (
    <div className={classes.btn}>
      <Image src={logo} height={28} width={28} alt="AppleStore" />

      <h6 className={classes.text} style={{ ...styles }}>
        {title}
      </h6>
    </div>
  );
}

export default StoreButton;
