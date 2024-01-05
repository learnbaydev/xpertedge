import Image from "next/image";
import Button from "../../Global/Button/Button";
import styles from "./FirstSection.module.css";
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const FirstContent = ({
  firstToparaImg,
  firstHeading,
  cityParaCont,
  FirstRightImg,
}) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      let width = window.innerWidth;
      setMobile(width < 641);
    };

    // Initial check
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  const headingWords = firstHeading.split(" ");

  return (
    <section className={styles.container}>
      <div
        className={`bgWrap ${styles.imgss}`}
        style={{ height: mobile ? "750px" : "600px" }}
      >
        <Image
          src={
            mobile
              ? " https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/expert-mbl+.webp"
              : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/expert-back+.webp"
          }
          layout="fill"
          objectFit="cover"
          priority
          alt="Master program by learnbay"
        />
      </div>
      <>
        <div className={styles.First}>
          <div className={styles.FirstLeft}>
            <h1 className={styles.h1one}>
              {/* Map through the array and apply different styles to the desired word */}
              {headingWords.map((word, index) => (
                <span
                  key={index}
                  className={
                    word === "Data" || word === "Science"
                      ? styles.coloredWord
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <h1 className={styles.h1}> {firstToparaImg}</h1>

            <p className={styles.ptopCiity}>{cityParaCont}</p>
            <div className={styles.animationTextWrap}></div>
            <div className={styles.btnImage}>
              <div>
                <Button greenButton={true} text="Explore Free Courses" />
              </div>
              <div>
                <Button blackButton={true} text="Get Recommendation" />
              </div>
            </div>
          </div>
          <div className={styles.secondLeft}>
            <div className="bgImg">
              <Image
                width={380}
                height={350}
                src={FirstRightImg}
                // style={{ objectFit: "contain" }}
                alt="data science course"
                priority
                quality={100}
              />
            </div>
          </div>
          <div className={styles.btnmbl}>
            <div>
              <Button greenButton={true} text="Explore Free Courses" />
            </div>
            <div>
              <Button blackButton={true} text="Get Recommendation" />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default FirstContent;
