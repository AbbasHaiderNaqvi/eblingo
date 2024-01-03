'use client'
import React from 'react'
import styles from '../styles/Publications.module.css';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Publications() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Navbar />
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Publications Partnership</h1>
            </div>
            <div>
                <h4 className={styles.FirstHeading}>Book Translation Services with Eblingo</h4>
                <h2 className={styles.SecondHeading}>Empowering Stories across Borders </h2>
                <p className={styles.Firstparagrph}>
                    At Eblingo, we believe that stories are a universal language. We are committed
                    to helping publishers, authors, and magazines bring their narratives to life in
                    any language, fostering a truly global literature community.</p>
            </div>
            <div>
                <h3 className={styles.Blog_Heading}>Partnerships with Eblingo</h3>
                <Row>
                <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <p className={styles.Blog_Paragraph}>
                            By choosing Eblingo as your translation
                            partner, you&apos;re choosing quality, precision,
                            and dedication. We pride ourselves on
                            building strong relationships with book 
                            publishing houses, self-published authors,
                            and magazines, delivering translations that
                            stay true to the spirit and intent of your
                            original content.
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <Image
                        unoptimized
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
                <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <p className={styles.Blog_Paragraph}>
                            Our meticulous selection process ensures that your work
                            is in the hands of a linguist expertly matched to your
                            genre. Our certified reviewers test a pool of linguists to
                            determine the ideal fit, thereby maintaining the narrative
                            flow and capturing the stylistic nuances of your work.
                            Once a suitable translator is identified, they begin the
                            transformation process. To ensure the highest quality,
                            their work is then scrutinized by another reviewer, who
                            fine-tunes the translated content, ensuring consistency
                            and fluency.
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <Image
                        unoptimized
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
                <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <p className={styles.Blog_Paragraph}>
                        At Eblingo, we go the extra mile for our clients. Not only
                        do we offer expert translation, but we also provide
                        comprehensive desktop publishing services. Our team
                        will assist you in preparing your book for publication in
                        any format, whether print-ready or digital. We help your 
                        book look its best while maintaining layout consistency
                        across languages. Partner with Eblingo and let us help
                        your stories reach new audiences and cross linguistic
                        boundaries. Contact us today to start your global literary
                        journey.
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <Image
                        unoptimized
                            src="/assets/Publications/Publication_Blog3.png"
                            alt="Publications"
                            width={397}
                            height={398}
                            className={styles.Publication_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Publications; 