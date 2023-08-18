"use client";

import React from "react";

import classes from "./slider.module.css";
import Image from "next/image";
import Phone from "@/assets/image/recipe/phone.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

function Slider() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_container}>
        <div className={classes.container}>
          <Swiper 
          className={classes.swiper_style} 
          // className="mySwiper"
          pagination={true}
          modules={[Pagination]}>
            {[1, 2, 3, 4].map((e) => (
              <SwiperSlide key={e}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding:'20px 0px'
                  }}
                >
                  <div>
                    <Image src={Phone} alt="img" />
                  </div>
                  <div style={{ width: "50%" }}>
                    <h2 className={classes.title}>
                      Easing the Medication Process
                    </h2>
                    <h6 className={classes.sub_title}>
                      You can either take your medications on time and feel
                      better, or you can miss a dose and risk your health. Which
                      will it be?
                    </h6>

                    <p className={classes.description}>
                      Taking your medications on time has never been easier.
                      Here our app that supports you in your busy schedule by
                      providing timely reminders for on-time medications. You
                      can set up personalized reminders to ensure you never miss
                      a dose again.
                    </p>
                  </div>
                </div>

                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
