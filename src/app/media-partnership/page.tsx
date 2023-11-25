'use client';
import React from 'react'
import styles from '../styles/Partnerships.module.css';
import Image from 'next/image';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import { Col, Row } from 'antd';

function Partnerships() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={MediumAnimationVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.HeroSection}>
        <h1 className={styles.HeroSection_Heading}>Media Partnerships</h1>
      </div>

      <h2 className={styles.first_master_heading}>Master Templates <span className={styles.heading_span}>and</span> Subtitling</h2>

      <Image
        src="/assets/Partnerships/Partnerships-icon.png"
        alt="Transcription"
        width={120}
        height={12}
        className={styles.Partnerships_Image}
      />
      <Row>
        <Col xs={24} sm={24} md={24} lg={{ span: 6 }} xl={{ span: 6 }}>
          <Image
            src="/assets/Partnerships/Partnerships_Blog1_Image.png"
            alt="Blog"
            width={560}
            height={400}
            className={styles.Partnerships_Blog_Image}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={{ span: 18 }} xl={{ span: 18 }}>
          <div className={styles.blog1_content}>
            <h3 className={styles.heading1}>Streamlining the Multilingual Subtitling Process</h3>
            <p className={styles.blog_Paragraph1}>
              At Eblingo, we believe in the power of language and the<br />
              synergy of partnerships. We are proud to work hand-in-<br />
              hand  with numerous esteemed language service<br />
              providers, video streaming platforms, and innovative<br />
              video content creators. Together, we are revolutionizing<br />
              the multilingual subtitling process.</p>
          </div>
        </Col>
      </Row>
      

        <Image
          src="/assets/Partnerships/arrow_right.png"
          alt="Arrow"
          width={130}
          height={130}
          className={styles.arrow_right1}
        />
        <div className={styles.blog2_content}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={{ span: 5 }} xl={{ span: 5 }}>
            <Image
              src="/assets/Partnerships/Partnerships_Blog2_Image.png"
              alt="My SVG"
              width={560}
              height={400}
              className={styles.Partnerships_Blog2_Image}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={{ span: 19 }} xl={{ span: 19 }}>
            <div className={styles.blog2content}>
            <h3 className={styles.heading2}>Master Templates: The Foundation of Multilingual <br />Subtitling</h3>
            <p className={styles.blog_Paragraph2}>Subtitles are a crucial element in the global accessibility of<br />
              content. This importance is magnified when dealing with<br />
              multiple languages, a challenge we meet head-on through our<br />
              expertise in creating Master Templates. Master Templates form<br />
              the cornerstone of our multilingual subtitling process. By<br /> 
              establishing a foundation that standardizes the process, we&apos;ve<br /> 
              eliminated duplicate work, reduced costs, improved delivery<br /> 
              timelines, and enhanced the quality control of a large volume of<br /> 
              subtitle files.
              </p>
              </div>
          </Col>
        </Row>
      </div>
      <div className={styles.blog_content_last}>
        <Row>
        <Col xs={24} sm={24} md={24} lg={{ span: 5 }} xl={{ span: 5 }}>
        <Image
          src="/assets/Partnerships/Partnerships_Blog3_Image.png"
          alt="My SVG"
          width={560}
          height={400}
          className={styles.Partnerships_Blog3_Image}
        />
        </Col>
        <Col xs={24} sm={24} md={24} lg={{ span: 19 }} xl={{ span: 19 }}>
        <div className={styles.blog3_content}>
        <h3 className={styles.heading3}>Our In-House Expertise</h3>
        <p className={styles.blog_Paragraph3}>
          At the heart of our operation are our in-house teams. Our<br />
          professionals are thoroughly trained in various streaming<br />
          platforms&apos; best practices and style guides. They bring a deep<br />
          understanding of timing conventions, shot changes, reading speed<br />
          considerations, and the adherence to syntactic rules and<br />
          structures. This level of expertise ensures that your subtitled<br />
          content will be linguistically accurate, enjoyable, and accessible to<br />
          global audiences. Through these partnerships and our proven<br />
          processes, we&apos;ve built a strong reputation as a leader in<br />
          multilingual subtitling. Let Eblingo be your trusted partner in<br />
          ensuring that your content transcends linguistic barriers, reaches<br />
          wider audiences, and truly connects with people across the globe.
          </p>
        </div>
        </Col>
          </Row>
      </div>
    </motion.div>
  )
}

export default Partnerships