"use client";

import React, { useState } from "react";
import Image from "next/image";
import classes from "./description.module.css";
import Calendar from "@/assets/icons/accordion/Calendar";
import Medic from "@/assets/icons/accordion/Medic";
import Coffee from "@/assets/icons/accordion/Coffee";
import Drop from "@/assets/icons/accordion/Drop";

import Meal from "@/assets/image/accordion/Meal.png";
import Medication from "@/assets/image/accordion/medication.png";
import Planning from "@/assets/image/accordion/Planning.png";

import StoreButton from "@/components/common/button/store-button/StoreButton";
import AppleStore from "@/assets/image/appleStore.png";
import PlayStore from "@/assets/image/playStore.png";

const accordionData = [
  {
    title: "Meal planning",
    description: `Effortlessly plan your weekly meals with our diverse
    collection of recipes and pre-designed menus. Whether
    you're aiming for weight management, specific dietary
    requirements, or something different to try, we've got you
    covered. Start your journey to a healthier, nourishing
    Meal Planning today.`,
    icon: <Coffee />,
    image: Meal,
    background_color: "#DDFFD1",
  },

  {
    title: "Medications",
    description: `Explore a variety of water intake plans, tailored to suit different preferences and needs. From gentle reminders to customized hydration goals, No worries, we've got your hydration plan ready! Follow easy guidelines and trackers to effortlessly monitor your water intake. Drink up and stay refreshed!`,
    icon: <Medic />,
    image: Medication,
    background_color: "#A6D8FF",
  },
  {
    title: "Water Intake",
    description: `Explore a variety of water intake plans, tailored to suit different preferences and needs. From gentle reminders to customized hydration goals, No worries, we've got your hydration plan ready! Follow easy guidelines and trackers to effortlessly monitor your water intake. Drink up and stay refreshed!`,
    icon: <Drop />,
    image: Meal,
    background_color: "#DBF8FE",
  },
  {
    title: "Custom Planning",
    description: `Explore a variety of water intake plans, tailored to suit different preferences and needs. From gentle reminders to customized hydration goals, No worries, we've got your hydration plan ready! Follow easy guidelines and trackers to effortlessly monitor your water intake. Drink up and stay refreshed!`,
    icon: <Calendar />,
    image: Planning,
    background_color: "#F0FFFE",
  },
];

function Description() {
  const [accordion, setAccordion] = useState(1);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container_wrapper}>
        <div className={classes.container}>
          <div style={{ width: "100%" }}>
            <div style={{ width: "80%" }}>
              <h4 className={classes.title}>
                The easiest way to level up your Lifestyle.
              </h4>
              <h6 className={classes.sub_title}>
                Plan your meals, take your medications on time, stay hydrated,
                and organize your daily activities with ease. Using Cliste Life
                app experience the future of effortless and sustainable living.
              </h6>
            </div>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={classes.accordion}
                style={{ backgroundColor: item?.background_color }}
                onClick={() => setAccordion(index)}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  {item?.icon}
                  <h5 className={classes.accordion_title}>{item?.title}</h5>
                </div>

                <div
                  className={classes.accordion_panel}
                  style={{ display: index == accordion ? "flex" : "none" }}
                >
                  <div style={{ width: "50%" }}>
                    <h6 className={classes.accordion_panel_text}>
                      {item?.description}
                    </h6>
                  </div>

                  <div style={{ width: "50%", textAlign: "center" }}>
                    <Image src={item?.image} width={"100%"} height={"100%"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <h5 className={classes.health_title}>
              Your health is our passion. Our app will help you reach your
              health goals.
            </h5>

            <p className={classes.health_description}>
              Feel the change in your wellness as you embrace enjoyable habits
              like nutritious meals, proper water intake, timely medications and
              routine planning.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <StoreButton logo={PlayStore} title="Download for Android" />
              <StoreButton logo={AppleStore} title="Download for iOS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
