import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState, useEffect, Component, useRef } from "react";
import styles from "./verificationmodal.module.scss";

import OtpInput from "react-otp-input";

import "react-phone-input-2/lib/material.css";

import GetLang from "@/hooks/getLang";

import coffeeVector from "../../../assets/images/coffeeVector.png";

export default function Verification({ isOpen, closeModal }: any) {
  const showHideClassName = isOpen ? "block" : "hidden";
  const lang = GetLang();

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          // Timer has expired, perform necessary actions here (e.g., show a message, trigger a callback)
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Convert remaining seconds to minutes and seconds format
  const minutes = Math.max(Math.floor(timer / 60), 0);
  const seconds = Math.max(timer % 60, 0);

  return (
    <>
      <div
        className={`${showHideClassName} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="relative lg:w-[610.55px] my-6 mx-auto lg:max-[610.55px] w-full lg:mx-[0] mx-[10px]">
          <div className="py-[33px] px-[28px] border-0 rounded-[24px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-end px-5  rounded-t">
              <button
                className={`${
                  lang == "en" ? " ml-auto" : "mr-auto"
                }  bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none`}
                onClick={closeModal}
              >
                <span className="bg-transparent text-[#000] opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mb-[15px]">
                  <h6 className="text-[18px] font-bold mb-[10px]">Verify Number</h6>
                  <p className="text-center text-[14px] font-normal">Please Enter the 6 digit verification code to sent to your phone.This helps us keep your account safe.</p>
            </div>
            <div className="flex justify-between mb-[24px]">
              <span className="text-[#212121] text-[18px] font-semibold">
                + 000-000-0000
              </span>
              <Link href="/" className="text-[#08BFB0] text-base">
                Edit Phone Number
              </Link>
            </div>
            <div className={`${styles.otpNumberWrp} justify-center`}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType={"number"}
                placeholder={"000000"}
                shouldAutoFocus={true}
                //renderSeparator={<span>-</span>}
                renderInput={(props: any) => <input {...props} />}
              />
            </div>
            <div className="flex flex-col  mb-[40px]  mt-[24px]">
              <span className="text-[#212121] text-[16px]  text-center">
                Verification Code
                <span>
                  <i className="icon-info mx-[9px] text-[#B7B7BC]"></i>
                  {minutes}:{seconds < 10 ? "0" : ""}
                </span>
                {seconds}
              </span>
              <Link
                href="/"
                className="text-[#08BFB0] text-base text-center mt-[5px]"
              >
                Resend OTP
              </Link>
            </div>
            <button type="button" className=" block  w-full lg:py-[6px] py-[10px] px-[15px] bg-[#08BFB0] border border-[#08BFB0] rounded-[12px] text-[#ffffff] text-[16px] font-medium">Continue</button>
          </div>
        </div>
      </div>
      <div
        className={`${showHideClassName} opacity-25 fixed inset-0 z-40 bg-[#4D4D4D]`}
      ></div>
    </>
  );
}
