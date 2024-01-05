// components/FAQ.js
import { useState } from 'react';
import faqData from './FaqData';
import styles from './faq.module.css';
import { FaAngleDown } from "react-icons/fa";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.head}>
      <h2 className={styles.headig}>FAQ</h2>
    <div className={styles.mainfaq}>
      
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
        
          <div
            className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
              
            {item.question}
               <FaAngleDown className={styles.icondown}/>
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswerContainer}>
              <div className={`${styles.faqAnswer} ${styles.faqAnswerBorder}`}>
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
