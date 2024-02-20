'use client';
import React, { useEffect, useState } from 'react'
import styles from '../styles/Partnerships.module.css';
import Image from 'next/image';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/navigation';


function Partnerships() {
  const router= useRouter();
    const handleClick = () => {
        router.push('/get-a-quote');
      }; 
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
      <Row>
      <Button
                           onClick={handleClick}
                            className={`${styles.quote_button}
                        ${scrollPosition ? 'sticky' : ''}`}
                        >Get a quote</Button>

      </Row>
      <h2 className={styles.first_master_heading}>Master Templates <span className={styles.heading_span}>and</span> Subtitling</h2>

      <Image
        src="https://i.ibb.co/pLJCWLw/Transcription-Icon.webp"
        alt="Transcription"
        width={120}
        height={12}
        className={styles.Partnerships_Image}
      />
      <Row>
        <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 6 }}>
          <Image
            src="https://tinypic.host/images/2024/01/25/Partnerships_Blog1_Image.webp"
            alt="Blog"
            width={560}
            height={400}
            className={styles.Partnerships_Blog_Image}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 18 }}>
          <div className={styles.blog1_content}>
            <h3 className={styles.heading1}>Streamlining the Multilingual Subtitling Process</h3>
            <p className={styles.blog_Paragraph1}>
              At Eblingo, we believe in the power of language and the
              synergy of partnerships. We are proud to work hand-in-
              hand  with numerous esteemed language service
              providers, video streaming platforms, and innovative
              video content creators. Together, we are revolutionizing
              the multilingual subtitling process.</p>
          </div>
        </Col>
      </Row>


      <Image
        src="https://tinypic.host/images/2024/01/25/arrow_right.webp"
        alt="Arrow"
        width={130}
        height={130}
        className={styles.arrow_right1}
      />
      <div className={styles.blog2_content}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 5 }}>
            <Image
              src="https://tinypic.host/images/2024/01/25/Partnerships_Blog2_Image.webp"
              alt="My SVG"
              width={560}
              height={400}
              className={styles.Partnerships_Blog2_Image}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 19 }}>
            <div className={styles.blog2content}>
              <h3 className={styles.heading2}>Master Templates: The Foundation of Multilingual Subtitling</h3>
              <p className={styles.blog_Paragraph2}>Subtitles are a crucial element in the global accessibility of
                content. This importance is magnified when dealing with
                multiple languages, a challenge we meet head-on through our
                expertise in creating Master Templates. Master Templates form
                the cornerstone of our multilingual subtitling process. By
                establishing a foundation that standardizes the process, we&apos;ve
                eliminated duplicate work, reduced costs, improved delivery
                timelines, and enhanced the quality control of a large volume of
                subtitle files.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.blog_content_last}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 5 }}>
            <Image
              src="https://tinypic.host/images/2024/01/25/Partnerships_Blog3_Image.webp"
              alt="My SVG"
              width={560}
              height={400}
              className={styles.Partnerships_Blog3_Image}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 19 }}>
            <div className={styles.blog3_content}>
              <h3 className={styles.heading3}>Our In-House Expertise</h3>
              <p className={styles.blog_Paragraph3}>
                At the heart of our operation are our in-house teams. Our
                professionals are thoroughly trained in various streaming
                platforms&apos; best practices and style guides. They bring a deep
                understanding of timing conventions, shot changes, reading speed
                considerations, and the adherence to syntactic rules and
                structures. This level of expertise ensures that your subtitled
                content will be linguistically accurate, enjoyable, and accessible to
                global audiences. Through these partnerships and our proven
                processes, we&apos;ve built a strong reputation as a leader in
                multilingual subtitling. Let Eblingo be your trusted partner in
                ensuring that your content transcends linguistic barriers, reaches
                wider audiences, and truly connects with people across the globe.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  )
}

export default Partnerships;