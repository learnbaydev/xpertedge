import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/xpertEdge/ExNavbar/Navbar/Navbar";
import FirstSection from "@/components/xpertEdge/FirstSection/FirstSection";
import SecondSection from "@/components/xpertEdge/SecondSection/SecondSection";
import Course from "@/components/xpertEdge/CourseSection/Course";

const Faq = dynamic(() => import("@/components/xpertEdge/ExpertFAQ/FAQ/Faq"));





export default function Home() {
  
  return (
    <>
      <Head>
        <title>XpertEdge</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with XpertEdge comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://course.xpertedge.co/" />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/xe-favicon.webp"
        />
      </Head>
      <Navbar
        radio={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      
      
      <FirstSection
        cityParaCont="Free Data Science courses with certification"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/xpert-first.webp"
        firstToparaImg="for free from Experts"
        firstHeading="Master Data Science"
        mblToparaImg="Skills for free from Industry Experts"
        
      />
      <SecondSection />
      <Course />
    < Faq />
     
   
    </>
  );
}
