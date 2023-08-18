import React from "react";
import classes from "./recipe.module.css";
import Image from "next/image";
import CardImage from "@/assets/image/recipe/cardImage.png";
import Phone from "@/assets/image/recipe/phone.png";
import AppleStore from "@/assets/image/appleStore.png";
import PlayStore from "@/assets/image/playStore.png";
import StoreButton from "../common/button/store-button/StoreButton";

function Recipe() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_container}>
        <div className={classes.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "60%" }}>
              <h3 className={classes.title} style={{ marginBottom: 24 }}>
                Delight in delicious meals, thoughtfully curated just for you !
              </h3>
              <p className={classes.description}>
                Embark on a journey of mouthwatering recipe recommendations in
                our app! Discover breakfast, lunch, and dinner recipes
                personalized to your health needs, taste preferences.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              margin: "80px 0px",
              alignItems: "center",
            }}
          >
            <div className={classes.first_section}>
              <div className={classes.first_section_first_card}>
                <h6 className={classes.card_title}>
                  1. Seamlessly add any recipe to your meal planner
                </h6>
                <h3 className={classes.card_sub_tile}>Breakfast</h3>
                <h6 className={classes.card_description}> 490 Calories</h6>

                <div
                  style={{
                    border: "1px solid black",
                    backgroundColor: "black",
                    color: "white",
                    padding: 10,
                    display: "flex",
                    borderRadius: 8,
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Image src={CardImage} alt="image" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "40%",
                      }}
                    >
                      <h6 className={classes.inner_card_title}>
                        Hard Boiled Egg and chilly
                      </h6>
                      <h6 className={classes.inner_card_sub_title}>
                        1 servings | 490 Calories
                      </h6>
                      <p className={classes.inner_card_description}>9:30 AM</p>
                    </div>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M14.2776 5.34085C14.2776 4.2549 13.3891 3.36639 12.3031 3.36639C11.2172 3.36639 10.3287 4.2549 10.3287 5.34085C10.3287 6.4268 11.2172 7.31531 12.3031 7.31531C13.3891 7.31531 14.2776 6.4268 14.2776 5.34085ZM14.2776 19.1621C14.2776 18.0761 13.3891 17.1876 12.3031 17.1876C11.2172 17.1876 10.3287 18.0761 10.3287 19.1621C10.3287 20.248 11.2172 21.1365 12.3031 21.1365C13.3891 21.1365 14.2776 20.248 14.2776 19.1621ZM14.2776 12.2515C14.2776 11.1655 13.3891 10.277 12.3031 10.277C11.2172 10.277 10.3287 11.1655 10.3287 12.2515C10.3287 13.3374 11.2172 14.2259 12.3031 14.2259C13.3891 14.2259 14.2776 13.3374 14.2776 12.2515Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.first_section_second_card}>
                <h6 className={classes.card_title}>
                  3. Add your recipe ingredients, to your grocery list
                </h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 100,
                    backgroundColor: "white",
                    padding: "6px 12px",
                    borderRadius: 8,
                    marginTop: 24,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        fill="#315C66"
                        stroke="#315C66"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 className={classes.first_section_second_card_text}>
                      Avocado Oil
                    </h3>
                  </div>
                  <h6 className={classes.first_section_second_card_text}>
                    Avocado Oil
                  </h6>
                </div>
              </div>
            </div>
            <div className={classes.second_section}>
              <Image src={Phone} alt="img" style={{height:"100%"}}/>
            </div>

            <div className={classes.third_section}>
              <div className={classes.third_section_first_card}>
                <h6 className={classes.card_title}>
                  3. Enter Step by step mode to get a complete guide to a recipe
                  perfect.
                </h6>
                <div className={classes.third_section_first_card_btn}>
                  <h6 className={classes.third_section_first_card_btn_text}>
                    Step by step mode
                  </h6>
                </div>
              </div>

              <div className={classes.third_section_second_card}>
                <h6 className={classes.card_title}>4. Write recipe reviews</h6>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: 16,
                    marginTop: 24,
                  }}
                >
                  <div style={{ display: "flex", gap: 20 }}>
                    <div
                      style={{
                        width: 100,
                        height: 32,
                        backgroundColor: "brown",
                        borderRadius: 50,
                      }}
                    />

                    <div style={{ paddingRight: 20 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 15,
                          alignItems: "center",
                          marginBottom: 12,
                        }}
                      >
                        <p>Amyrobson</p>
                        <p>1 month ago</p>
                      </div>
                      <p>
                        Impressive! Though it seems the drag feature could be
                        improved. But overall it looks incredible. You’ve nailed
                        the design and the responsiveness at various breakpoints
                        works really well.
                      </p>
                      <div
                        style={{
                          marginTop: 20,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>12</p>
                        <p>Reply</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 30,
                flexDirection: "column",
                width: "50%",
              }}
            >
              <h3 className={classes.title}>
                Culinary Adventures - Whip Up Delicious Magic with Easy Recipes!
              </h3>
              <p className={classes.description}>
                Indulge in a variety of mouthwatering recipes from around the
                world. Master the art of cooking with step-by-step instructions
                and visual inspiration. Get ready to savor the flavors!
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginTop: 10,
                  justifyContent: "center",
                }}
              >
                <StoreButton logo={PlayStore} title="Download for Android" />
                <StoreButton logo={AppleStore} title="Download for iOS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
