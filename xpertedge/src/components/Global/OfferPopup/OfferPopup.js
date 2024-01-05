import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
// import Button from "../Global/Button/Button";

const OfferPopup = ({ popupData, devops }) => {
  console.log(popupData);
  const [open, setOpen] = useState(false);
  // Use state to control audio playback

  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    // const audioElement = document.getElementById("popup-entry-sound");

    const timeOut = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  const firstPoint = popupData.para1.split("$$$");
  const secondPoint = popupData.para2.split("$$$");
  return (
    open && (
      <div className={open ? styles.OfferPopup : styles.hide}>
        <p
          className={styles.Icon}
          onClick={() => {
            console.log("Close button clicked");
            setOpen(false);
          }}
        >
          close[X]
        </p>
        <div className={styles.header}>
          <h6>{popupData.heading}</h6>
          <span>{popupData.subHeading}</span>
        </div>
        <div className={styles.valid}>
          <p>{popupData.validText}</p>
          <div className={styles.tag}>Filling Fast!</div>
        </div>
        <div className={styles.Offer}>
          {devops ? (
            <p className={styles.bHeading}> Details :</p>
          ) : (
            <p className={styles.bHeading}>Batch Details :</p>
          )}

          <div className={styles.batchPoint}>
            <p>
              <b>{firstPoint[0]}: </b>
              {firstPoint[1]}
            </p>

            {popupData.para2 === "" ? (
              ""
            ) : (
              <p>
                <b>{secondPoint[0]}: </b>
                {secondPoint[1]}
              </p>
            )}
          </div>
          {devops ? (
            <a
              href="https://zoom.us/webinar/register/WN_23X2MhqUQK2BqM_fvXhk4w"
              target="_blank"
              className={styles.btnWrap2}
              rel="noopener noreferrer"
            >
              <button className="button">Book Demo Now</button>
            </a>
          ) : (
            <a
              href="/submit-info"
              target="_blank"
              className={styles.btnWrap}
              rel="noopener noreferrer"
            >
              <button className="button" onClick={handelOpen}>
                Apply For Scholarship Now!
              </button>
            </a>
          )}
        </div>
        {/* <audio
          id="popup-entry-sound"
          src="/pop.wav"
          onError={(error) => console.error("Audio playback error:", error)}
        ></audio> */}
      </div>
    )
  );
};

export default OfferPopup;