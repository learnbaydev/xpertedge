import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import styles from "./CareerHome.module.css";
import { CareerHomeData } from "./CareerHomeData";
const Button = dynamic(() => import("../../Global/Button/Button"));

function CareerHome() {
  const [selectedValue, setSelectedValue] = useState("default");
  return (
    <section className={styles.about}>
      <div className={styles.Back}>
        <div>
          <p className={styles.pTop}>Career portal</p>
          <h4 style={{ textAlign: "left" }}>
            redesigning your <br />
            work EXPERIENCE
          </h4>
        </div>
        <div className="imgWrapper">
          <div className={styles.right}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/course.learnbay.co/Career-Portal.png"
              width="522"
              height="380"
              alt="data science course"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={styles.Placement}>
        <div className={styles.OurPlacementDiv}>
          <h3>Opportunities at Learnbay</h3>
          <div className={styles.iconBoxP}>
            {CareerHomeData.map((data) => {
              const { id, jobH1, jobD1, jobR, jobR1, jobQ, jobQ1, Applybtn } =
                data;

              return (
                <div className={styles.iconBoxInner} key={id}>
                  <div className={styles.iconBoxCont}>
                    <div className={styles.innerContent}>
                      <h1 className={styles.CareerH}>{jobH1}</h1>
                      <p className={styles.CareerP}>{jobD1} </p>
                      <p className={styles.CareerP}>
                        <b>{jobR}</b>
                      </p>

                      {jobR1.map((data) => {
                        return (
                          <p className={styles.contP} key={id}>
                            <FaCheckCircle className={styles.icons} />
                            {data}
                          </p>
                        );
                      })}

                      <p className={styles.CareerP}>
                        <b className={styles.CareerP}>{jobQ}</b>
                      </p>

                      {jobQ1.map((data) => {
                        return (
                          <p className={styles.contP} key={id}>
                            <FaCheckCircle className={styles.icons} />
                            {data}
                          </p>
                        );
                      })}

                      <Link
                        href={`/career-apply-now?selectedValue=${"HR-Manager"}`}
                      >
                        <div>
                          <Button
                            className={styles.btn}
                            style={{ marginTop: "25px" }}
                            text={Applybtn}
                            passIcon={<FaArrowRight className="bIconS" />}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHome;
