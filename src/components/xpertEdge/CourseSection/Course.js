import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Course.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { courseDetails } from "./courseDetails";

import { BsCheckLg } from "react-icons/bs";

import { FaReact } from "react-icons/fa";
import { IoNewspaperOutline, IoPersonOutline } from "react-icons/io5";

const Course = ({
 
  organicADS,
  
}) => {
  // console.log("course component");
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3);
  const [popups, setPopups] = useState(false);

  const [CourseLoop, setCourseLoop] = useState([
    { title: "Technical Courses", value: true },
    { title: "Non-Tech Courses", value: false },
    { title: "Resume Building", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === CourseLoop[index].title) {
      setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
      for (let i = 0; i < CourseLoop.length; i++) {
        if (index === i) {
          setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
        } else {
          setCourseLoop([...CourseLoop], (CourseLoop[i].value = false));
        }
      }
    }
  };

  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
  
      if (width < 481) {
        setValue(1.2);
        setMobile(true);
      } else if (width < 600) {
        setValue(1);
        setMobile(true);
      } else if (width <= 641) {
        setValue(1);
      } else if (width <= 801) {
        setValue(2);
      } else if (width <= 961) {
        setValue(2.3);
      } else if (width <= 1024) {
        setValue(2.8);
      } else if (width <= 1280) {
        setValue(3.1);
      } else if (width <= 1281) {
        setValue(3.1);
      } else if (width > 1281) {
        setValue(3.4);
      }
    };
  
    // Initial setup
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.Course} id="course">
     
      <h2>Our Free Courses</h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          {courseDetails.map((CourseData, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  menuChange(CourseData.title, index);
                }}
                className={
                  CourseLoop[index].value ? styles.ActiveSpan : styles.span
                }
              >
                {CourseData.title === "Technical Courses" ? (
                  <FaReact
                    className={styles.iconslide}
                    style={`{ color: "grey", marginRight: "5px", size:"40px" } ${styles.ActiveSpan}`}
                  />
                ) : (
                  ""
                )}
                {CourseData.title === "Non-Tech Courses" ? (
                  <IoPersonOutline
                    className={styles.iconslide}
                    style={`{ color: "grey", marginRight: "5px" } ${styles.ActiveSpan}`}
                  />
                ) : (
                  ""
                )}

                {CourseData.title === "Resume Building" ? (
                  <IoNewspaperOutline
                    className={styles.iconslide}
                    style={`{ color: "grey", marginRight: "5px" }${styles.ActiveSpan}`}
                  />
                ) : (
                  ""
                )}

                {CourseData.title}
              </span>
            );
          })}
        </div>
        <div>
          {courseDetails.map((courseDetail, index) => {
            const { courses } = courseDetail;
            return CourseLoop[index].value ? (
              <div key={index}>
                {courses.map((courseDetail, index) => {
                  return (
                    <div key={index} className={styles.divBox}>
                      <h5 className={styles.h5font}>
                        {courseDetail.courseName}
                      </h5>
                      <div className={styles.gridPanel}>
                        <Swiper
                          slidesPerView={value}
                          spaceBetween={mobile ? 10 : 50}
                          // scrollbar={{ draggable: true }}
                          loop={true} // Add the loop prop to enable infinite loop
                          // modules={[Scrollbar]}
                          className= {`"mySwiper" ${styles.swipers}`}
                        >
                          {courseDetail.courseDetails.map(
                            (viewAllData, index) => {
                              const {
                                id,
                                title,
                                title1,
                                img,
                                description,
                                link1,
                                titleCourse,
                                brochureLinks,
                                courseTime,
                                Green,
                                newDesign,
                                newDesignOrange,
                              } = viewAllData;
                              return (
                                <SwiperSlide
                                  className={styles.leftSide}
                                  key={index}
                                >
                                  <div
                                    key={id}
                                    className={
                                      newDesignOrange
                                        ? styles.newSliderWrapOrange
                                        : newDesign
                                        ? styles.newSliderWrap
                                        : styles.SliderWrap
                                    }
                                  >
                                    {newDesign ? (
                                      <>
                                        {" "}
                                        <div
                                          className={
                                            newDesignOrange
                                              ? styles.OrangeLeftBorder
                                              : styles.leftBorder
                                          }
                                        ></div>
                                        <div
                                          className={
                                            newDesignOrange
                                              ? styles.OrangeRightBorder
                                              : styles.rightBorder
                                          }
                                        ></div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    {newDesign ? (
                                      ""
                                    ) : organicADS ? (
                                      <a
                                        onClick={() => {
                                          setTitleCourse(titleCourse);
                                          setBrochureLinks(brochureLinks);
                                          popupShow();
                                        }}
                                        className={styles.imgWrap}
                                      >
                                        <div
                                          className={`"bgWrapcourse" ${styles.bgwrap}`}
                                        >
                                          <Image
                                            src={img}
                                            fill={true}
                                            quality={80}
                                            loading="lazy"
                                            unoptimized={true}
                                            style={{ objectFit: "cover" }}
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    ) : (
                                      <a
                                        // href={`${process.env.BASE_PATH}${link1}`}
                                        href={link1}
                                        className={styles.imgWrap}
                                      >
                                        <div className="bgWrapcourse">
                                          <Image
                                            src={img}
                                            fill={true}
                                            quality={80}
                                            loading="lazy"
                                            unoptimized={true}
                                            style={{ objectFit: "cover" }}
                                            alt="data science course"
                                          />
                                        </div>
                                      </a>
                                    )}
                                    <div
                                      className={styles.contButton}
                                      style={
                                        newDesign
                                          ? { borderRadius: "20px" }
                                          : {
                                              borderRadius: "0px 0px 10px 10px",
                                              width: "100%%",
                                              // marginTop: "-12px",
                                              zIndex: "0",
                                              boxShadow:
                                                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                            }
                                      }
                                    >
                                      {newDesign ? (
                                        organicADS ? (
                                          <a
                                            onClick={() => {
                                              setTitleCourse(titleCourse);
                                              setBrochureLinks(brochureLinks);
                                              popupShow();
                                            }}
                                            className={styles.imgWrap}
                                          >
                                            <div className="bgWrapcourse">
                                              <Image
                                                src={img}
                                                fill={true}
                                                quality={80}
                                                unoptimized={true}
                                                loading="lazy"
                                                style={{ objectFit: "cover" }}
                                                alt="data science course"
                                              />
                                            </div>
                                          </a>
                                        ) : (
                                          <a
                                            // href={`${process.env.BASE_PATH}${link1}`}
                                            href={link1}
                                            className={styles.imgWrap}
                                          >
                                            <div className="bgWrapcourse">
                                              <Image
                                                src={img}
                                                fill={true}
                                                quality={80}
                                                unoptimized={true}
                                                loading="lazy"
                                                style={{ objectFit: "cover" }}
                                                alt="data science course"
                                              />
                                            </div>
                                          </a>
                                        )
                                      ) : (
                                        ""
                                      )}
                                      <div className={styles.contentBox}>
                                        <div className={styles.headWrapper}>
                                          <h6
                                            className={
                                              Green
                                                ? styles.mainHeadGreen
                                                : styles.mainHead
                                            }
                                          >
                                            {title}
                                          </h6>
                                          <h6
                                            className={
                                              Green
                                                ? styles.mainHeadGreen
                                                : styles.mainHead
                                            }
                                          >
                                            {title1}
                                          </h6>
                                        </div>
                                        <hr className={styles.hr} />
                                        <div className={styles.paraDiv}>
                                          <p className={styles.singleP}>
                                            {/* <IoTimeOutline
                                          className={styles.timeIcon}
                                        />{" "} */}
                                            {description[0]} {courseTime}
                                          </p>
                                          {/* <p>
                                      <AiOutlineFundProjectionScreen
                                        className={styles.checkCircle}
                                        style={{ color: "#edb552" }}
                                      />
                                      {description[1]}
                                    </p> */}
                                          <p className={styles.singleP}>
                                            {/* <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        /> */}

                                            {description[1]}
                                          </p>
                                          {description.length >= 3 ? (
                                            <p className={styles.singleP}>
                                              {/* <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        /> */}
                                              <BsCheckLg
                                                className={styles.checkIcon}
                                              />
                                              {description[2]}
                                            </p>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                        {/* <hr className={styles.hr1} /> */}
                                      </div>
                                      <div className={styles.btnWrapper}>
                                        {/* <a
                                          onClick={() => {
                                            setTitleCourse(titleCourse);
                                            setBrochureLinks(brochureLinks);
                                            popupShow();
                                          }}
                                        > */}
                                        {/* <button
                                            className="outLineBtn1"
                                            style={{
                                              color: "#2979AD",
                                              background: "#fff",
                                              borderRadius: "0px 0px 0px 20px",
                                            }}
                                          >
                                            Brochure
                                            <FaDownload
                                              className="bIcon"
                                              style={{ color: "#2979AD" }}
                                            />
                                          </button> */}
                                        {/* </a> */}
                                        {/* <hr className={styles.btnLine} /> */}
                                        {organicADS ? (
                                          <a
                                            onClick={() => {
                                              setTitleCourse(titleCourse);
                                              setBrochureLinks(brochureLinks);
                                              popupShow();
                                            }}
                                          >
                                            <button
                                              className={
                                                Green
                                                  ? styles.green
                                                  : styles.fillBtn
                                              }
                                            >
                                              Start Learning
                                            </button>
                                          </a>
                                        ) : (
                                          <a
                                            // href={`${process.env.BASE_PATH}${link1}`}
                                            href={link1}
                                            className={styles.link1}
                                          >
                                            <button
                                              className={
                                                Green
                                                  ? styles.green
                                                  : styles.fillBtn
                                              }
                                              style={
                                                newDesign
                                                  ? {
                                                      borderRadius:
                                                        "0 0 20px 0",
                                                    }
                                                  : {
                                                      borderRadius: "",
                                                    }
                                              }
                                            >
                                              Start Learning
                                            </button>
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              );
                            }
                          )}
                        </Swiper>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Course);
