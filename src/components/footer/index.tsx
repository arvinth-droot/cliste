import React from "react";
import classes from "./footer.module.css";
import StoreButton from "../common/button/store-button/StoreButton";
import AppleStore from "@/assets/image/appleStore.png";
import PlayStore from "@/assets/image/playStore.png";

export default function Footer() {
  return (
    <div className={classes.container_wrapper}>
      <div className={classes.container}>
        <div className={classes.main_div}>
          <h4 className={classes.title}>Cliste Life</h4>
          <p className={classes.text}>Feel the change in your wellness.</p>

          <ul className={classes.list}>
            <li>Start</li>
            <li>Features</li>
            <li>Why Choose Us </li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={classes.main_div}>
          <h4 className={classes.title}>Get Cliste Life app</h4>
          <p className={classes.text}>
            Get the Cliste Sense app now for the ultimate kitchen assistant in
            the palm of your hand
          </p>

          <div style={{ display: "flex", gap: 20, marginTop: 10 }}>
            <StoreButton
              logo={PlayStore}
              title="Download for Android"
              styles={{ color: "white" }}
            />
            <StoreButton
              logo={AppleStore}
              title="Download for iOS"
              styles={{ color: "white" }}
            />
          </div>
        </div>

        <div className={classes.main_div}>
          <h4 className={classes.title}>
            Join the movement
          </h4>
          <div className={classes.news_letter}>
            <input placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className={classes.icon_div}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M16.9998 42.2221H28.3331C37.7776 42.2221 41.5554 38.4443 41.5554 28.9999V17.6666C41.5554 8.22211 37.7776 4.44434 28.3331 4.44434H16.9998C7.55536 4.44434 3.77759 8.22211 3.77759 17.6666V28.9999C3.77759 38.4443 7.55536 42.2221 16.9998 42.2221Z"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.6668 29.9446C23.535 29.9446 24.3946 29.7736 25.1967 29.4414C25.9988 29.1092 26.7276 28.6222 27.3415 28.0083C27.9554 27.3944 28.4424 26.6656 28.7746 25.8635C29.1069 25.0614 29.2779 24.2017 29.2779 23.3335C29.2779 22.4653 29.1069 21.6057 28.7746 20.8036C28.4424 20.0015 27.9554 19.2727 27.3415 18.6588C26.7276 18.0449 25.9988 17.5579 25.1967 17.2257C24.3946 16.8934 23.535 16.7224 22.6668 16.7224C20.9134 16.7224 19.2318 17.4189 17.992 18.6588C16.7522 19.8986 16.0557 21.5801 16.0557 23.3335C16.0557 25.0869 16.7522 26.7685 17.992 28.0083C19.2318 29.2481 20.9134 29.9446 22.6668 29.9446Z"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.3125 13.8889H33.3334"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M27.1112 18.2333V23.7111H32.0223C32.4001 23.7111 32.589 24.0889 32.589 24.4667L31.8334 28.0556C31.8334 28.2444 31.4556 28.4333 31.2667 28.4333H27.1112V42.2222H21.4445V28.6222H18.2334C17.8556 28.6222 17.6667 28.4333 17.6667 28.0556V24.4667C17.6667 24.0889 17.8556 23.9 18.2334 23.9H21.4445V17.6667C21.4445 14.4556 23.9001 12 27.1112 12H32.2112C32.589 12 32.7779 12.1889 32.7779 12.5667V17.1C32.7779 17.4778 32.589 17.6667 32.2112 17.6667H27.6779C27.3001 17.6667 27.1112 17.8556 27.1112 18.2333Z"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M28.9999 42.2221H17.6666C8.22211 42.2221 4.44434 38.4443 4.44434 28.9999V17.6666C4.44434 8.22211 8.22211 4.44434 17.6666 4.44434H28.9999C38.4443 4.44434 42.2221 8.22211 42.2221 17.6666V28.9999C42.2221 38.4443 38.4443 42.2221 28.9999 42.2221Z"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M32.4444 38.4446H13.5555C7.88886 38.4446 4.11108 34.6669 4.11108 29.0002V17.6669C4.11108 12.0002 7.88886 8.22241 13.5555 8.22241H32.4444C38.1111 8.22241 41.8889 12.0002 41.8889 17.6669V29.0002C41.8889 34.6669 38.1111 38.4446 32.4444 38.4446Z"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.8668 18.6112L26.589 21.4445C28.289 22.5778 28.289 24.2778 26.589 25.4112L21.8668 28.2445C19.9779 29.3778 18.4668 28.4334 18.4668 26.3556V20.6889C18.4668 18.2334 19.9779 17.4778 21.8668 18.6112Z"
            stroke="#F2F2F2"
            stroke-width="2.66667"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
