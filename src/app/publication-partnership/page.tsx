'use client'
import React from 'react'
import styles from '../styles/Publications.module.css';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';

function Publications() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Publications Partnership</h1>
            </div>
            <div>
                <h4 className={styles.FirstHeading}>Book Translation Services with Eblingo</h4>
                <h2 className={styles.SecondHeading}>Empowering Stories across Borders </h2>
                <p className={styles.Firstparagrph}>
                    At Eblingo, we believe that stories are a universal language. We are committed<br />
                    to helping publishers, authors, and magazines bring their narratives to life in<br />
                    any language, fostering a truly global literature community.</p>
            </div>
            <div>
                <h3 className={styles.Blog_Heading}>Partnerships with Eblingo</h3>
                <Row>
                    <Col span={12}>
                        <p className={styles.Blog_Paragraph}>
                            By choosing Eblingo as your translation<br />
                            partner, you&apos;re choosing quality, precision,<br />
                            and dedication. We pride ourselves on<br />
                            building strong relationships with book <br />
                            publishing houses, self-published authors,<br />
                            and magazines, delivering translations that<br />
                            stay true to the spirit and intent of your<br />
                            original content.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Publications/Publication_Blog_Image.png"
                            alt="Publications"
                            width={397}
                            height={398}
                            className={styles.Publication_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Blog_Heading}>Our Uniquely Tailored Process</h3>
                <div className={styles.blog2}>
                <Row>
                    <Col span={12}>
                        <p className={styles.Blog_Paragraph}>
                            Our meticulous selection process ensures that your work<br />
                            is in the hands of a linguist expertly matched to your<br />
                            genre. Our certified reviewers test a pool of linguists to<br />
                            determine the ideal fit, thereby maintaining the narrative<br />
                            flow and capturing the stylistic nuances of your work.<br />
                            Once a suitable translator is identified, they begin the<br />
                            transformation process. To ensure the highest quality,<br />
                            their work is then scrutinized by another reviewer, who<br />
                            fine-tunes the translated content, ensuring consistency<br />
                            and fluency.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Publications/Publication_Blog2.png"
                            alt="Publications"
                            width={397}
                            height={398}
                            className={styles.Publication_Blog_Image}
                        />
                    </Col>
                </Row>
                </div>
            </div>
            <div>
            <h3 className={styles.Explain_Heading2}>End-to-End Solutions<br />Desktop Publishing Services.</h3>
                <Row>
                    <Col span={12}>
                        <p className={styles.Blog_Paragraph}>
                        At Eblingo, we go the extra mile for our clients. Not only<br /> 
                        do we offer expert translation, but we also provide<br /> 
                        comprehensive desktop publishing services. Our team<br />
                        will assist you in preparing your book for publication in<br /> 
                        any format, whether print-ready or digital. We help your<br /> 
                        book look its best while maintaining layout consistency<br /> 
                        across languages. Partner with Eblingo and let us help<br /> 
                        your stories reach new audiences and cross linguistic<br /> 
                        boundaries. Contact us today to start your global literary<br /> 
                        journey.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Publications/Publication_Blog3.png"
                            alt="Publications"
                            width={397}
                            height={398}
                            className={styles.Publication_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Publications; 