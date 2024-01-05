import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";
import { FaBookReader } from "react-icons/fa";

function SecondSection() {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.fone}>
          <div className={styles.gptimg}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/chatgpt.webp"
              width={180}
              height={54}
              loading="lazy"
            />
          </div>

          <div className={styles.inone}>
            <p>Master modern age skills like Data Science & Gen-AI</p>
          </div>
        </div>

        <hr className={styles.hrline} />

        <div className={styles.ftwo}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/userCertificate.jpeg"
            width={60}
            height={60}
            loading="lazy"
            alt=""
            className={styles.icons}
          />
          <p>Learn from courses designed by industry experts</p>
        </div>

        <div className={styles.ftwo}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/studyIcon.jpeg"
            width={60}
            height={60}
            loading="lazy"
            alt=""
            className={styles.icons}
          />
          <p>Self-paced learning. Learn anytime from anywhere</p>
        </div>

        <div className={styles.ftwo}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/lock.jpeg"
            width={60}
            height={60}
            loading="lazy"
            alt=""
            className={styles.icons}
          />
         <p>Lifetime free access to all our courses</p>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
