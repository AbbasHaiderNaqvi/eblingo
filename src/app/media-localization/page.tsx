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
                    <h2 className={styles.First_Connect_Heading}>More than ever, <span className={styles.span}>Businesses</span> rely on audio-visuals<br />
                        to connect with customers and thrive<br />
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
                        By making your content available in several languages, you can reach more of<br />
                        your target customers and grow your customers.
                    </h4>
                </div>
            </div>
            <div className={styles.content_blog}>
                <div className={styles.blog_content}>
                    <Image
                        src="/assets/Transcription/Transcription_Blog_1.png"
                        alt="Transcription"
                        width={333}
                        height={249}
                        className={styles.Transcription_Blog_Image1}
                    />
                    <h3 className={styles.blog_heading_1}>
                        Transcription
                    </h3>
                    <p className={styles.blog_paragraph_1}>
                        Our experienced transcriptionists deliver<br />
                        accurate, timely transcriptions in multiple<br />
                        languages. Whether its a recorded<br />
                        meeting, a conference, or an interview,<br />
                        we&apos;ll convert your audio files into precisely<br />
                        transcribed text. We have a global talent<br />
                        pool of experts who are well versed with<br />
                        required standards..
                    </p>
                </div>
                <div className={styles.blog_content}>
                    <Image
                        src="/assets/Transcription/Transcription_Blog_2.png"
                        alt="Transcription"
                        width={333}
                        height={249}
                        className={styles.Transcription_Blog_Image2}
                    />
                    <h3 className={styles.blog_heading_2}>
                        Subtitling
                    </h3>
                    <p className={styles.blog_paragraph_2}>
                    We understand the power of subtitled<br/> 
                    content in expanding your audience reach<br/> 
                    and engagement. Our team of linguistic<br/> 
                    experts excels in creating accurate,<br/> 
                    culturally appropriate subtitles that<br/> 
                    resonate with your target demographics,<br/> 
                    allowing your content to be accessible,<br/> 
                    understandable, and enjoyable to all.
                    </p>
                </div>

                <div className={styles.blog_content}>
                    <Image
                        src="/assets/Transcription/Transcription_Blog_3.png"
                        alt="Transcription"
                        width={333}
                        height={249}
                        className={styles.Transcription_Blog_Image3}
                    />
                    <h3 className={styles.blog_heading_3}>
                        Closed Captions
                    </h3>
                    <p className={styles.blog_paragraph_3}>
                        Our captioning services make your<br />
                        audio-visual content accessible to<br />
                        everyone, including the hard-of-hearing<br />
                        community. We go beyond just literal<br />
                        transcription, incorporating descriptions<br />
                        of non-speech elements, providing a full<br />
                        contextual experience to your audience<br /> 
                        by ensuring attention to details.
                    </p>
                </div>
            </div>
            <div className={styles.blog_statement1}>
            EBLINGO is dedicated to helping you communicate your message to the world across all<br /> 
            languages and mediums. Businesses who pick audio-visual medium to drive their content<br /> 
            strategy get a variety of advantages; strong connectivity increases viewership which<br /> 
            enables lead generation and high commercial gain.
            </div>
            <div className={styles.blog_statement2}>
            An inclusive content outreach focus on being accessible for all, by including a transcript,<br />
            businesses may communicate marketing messaging to those who struggle to hear video<br />
            audio. Subtitles in multiple languages facilitate communication between businesses and<br /> 
            their international clientele.
            </div>
            </motion.div>
    )
}

export default Transcription;