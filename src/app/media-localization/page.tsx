'use client';
import React from 'react';
import styles from '../styles/Transcription.module.css';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';


function Transcription() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        > 
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Transcription | Subtitling | Closed Captions</h1>
            </div>
            <div>
                <div className={styles.content}>
                    <h2 className={styles.First_Connect_Heading}>More than ever, <span className={styles.span}>Businesses</span> rely on audio-visuals
                        to connect with customers and thrive
                        in the digital age.</h2>
                    <div className={styles.divider}>
                        <Image
                            src="/assets/Transcription/Transcription-icon.png"
                            alt="Transcription"
                            width={120}
                            height={12}
                            className={styles.Transcription_Image}
                        />
                    </div>
                    <h4 className={styles.Second_Connect_heading}>
                        By making your content available in several languages, you can reach more of
                        your target customers and grow your customers.
                    </h4>
                </div>
            </div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <div className={styles.blog_content}>
                    <Image
                        src="/assets/Transcription/Transcription_Blog_1.png"
                        alt="Transcription"
                        width={415}
                        height={249}
                        className={styles.Transcription_Blog_Image1}
                    />
                    <h3 className={styles.blog_heading_1}>
                        Transcription
                    </h3>
                    <p className={styles.blog_paragraph_1}>
                        Our experienced transcriptionists deliver
                        accurate, timely transcriptions in multiple
                        languages. Whether its a recorded
                        meeting, a conference, or an interview,
                        we&apos;ll convert your audio files into precisely
                        transcribed text. We have a global talent
                        pool of experts who are well versed with
                        required standards..
                    </p>
                </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <div className={styles.blog_content}>
                    <Image
                        src="/assets/Transcription/Transcription_Blog_2.png"
                        alt="Transcription"
                        width={415}
                        height={249}
                        className={styles.Transcription_Blog_Image2}
                    />
                    <h3 className={styles.blog_heading_2}>
                        Subtitling
                    </h3>
                    <p className={styles.blog_paragraph_2}>
                    We understand the power of subtitled 
                    content in expanding your audience reach
                    and engagement. Our team of linguistic
                    experts excels in creating accurate,
                    culturally appropriate subtitles that
                    resonate with your target demographics,
                    allowing your content to be accessible,
                    understandable, and enjoyable to all.
                    </p>
                </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <div className={styles.blog_content}>
                    <Image
                        src="/assets/Transcription/Transcription_Blog_3.png"
                        alt="Transcription"
                        width={415}
                        height={249}
                        className={styles.Transcription_Blog_Image3}
                    />
                    <h3 className={styles.blog_heading_3}>
                        Closed Captions
                    </h3>
                    <p className={styles.blog_paragraph_3}>
                        Our captioning services make your
                        audio-visual content accessible to
                        everyone, including the hard-of-hearing
                        community. We go beyond just literal
                        transcription, incorporating descriptions
                        of non-speech elements, providing a full
                        contextual experience to your audience
                        by ensuring attention to details.
                    </p>
                </div>
                </Col>
                </Row>
            <div className={styles.blog_statement1}>
            EBLINGO is dedicated to helping you communicate your message to the world across all 
            languages and mediums. Businesses who pick audio-visual medium to drive their content 
            strategy get a variety of advantages; strong connectivity increases viewership which 
            enables lead generation and high commercial gain.
            </div>
            <div className={styles.blog_statement2}>
            An inclusive content outreach focus on being accessible for all, by including a transcript,
            businesses may communicate marketing messaging to those who struggle to hear video
            audio. Subtitles in multiple languages facilitate communication between businesses and 
            their international clientele.
            </div>
            </motion.div>
    )
}

export default Transcription;