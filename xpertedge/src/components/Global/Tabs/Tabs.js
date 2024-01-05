import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TabData } from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = ({ handleIcon }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuChange = (index) => {
    setSelectedIndex(index);
  };
  

  const renderCourses = () => {
    const selectedData = TabData[selectedIndex];
    if (!selectedData) return null;
    const domain = selectedData.domain;
    return (
      <div className={styles.RowWrap}>
        {selectedData.courseName.map((course, index) => (
          <div className={styles.Row} key={index}>
            <a href={`${domain}${course.url}`}>
              <div className={styles.Program} onClick={() => handleIcon(false)}>
                <div className={styles.ProLeft}>
                  <h5>{course.CName}</h5>
                  <span>{course.hours}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          {TabData.map((data, index) => (
            <div key={data.id}>
              <span
                onMouseOver={() => handleMenuChange(index)}
                className={
                  selectedIndex === index ? styles.spanActive : styles.span
                }
              >
                {data.title}
                <IoIosArrowForward />
              </span>
              {selectedIndex === index && (
                <div className={styles.middlePanel}>{renderCourses()}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.middlePanel}>{renderCourses()}</div>
      </div>
    </div>
  );
};

export default Tabs;
