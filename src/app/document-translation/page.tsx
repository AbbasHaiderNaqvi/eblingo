'use client';
import React from 'react'
import styles from '../styles/Services.module.css'
import { Col, Row } from 'antd';
import Image from 'next/image';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Navbar />
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Eblingo Services</h1>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Document Translations</h3>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={9} xl={10}>
                        <p className={styles.First_Blog_Paragraph}>
                            In the age of global connectivity, the power
                            to communicate effectively across
                            languages is invaluable. At Eblingo, we
                            provide superior document translation
                            services that bridge language barriers and
                            enable successful cross-cultural
                            communication.At Eblingo,we believe in
                            breaking down language barriers and
                            fostering global connections. Reach out to
                            us today to experience our professional
                            translation services.
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={9} xl={10}>
                        <Image
                            src="/assets/Services/First_Blog_Image.png"
                            alt="Services"
                            width={441}
                            height={452}
                            className={styles.Services_First_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Second_Blog_Heading}>Financial Translations</h3>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <Image
                            src="/assets/Services/Second_Blog_Image.png"
                            alt="Services"
                            width={365}
                            height={368}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <p className={styles.Second_Blog_Paragraph}>
                            In the realm of finance, precision and clarity
                            are paramount. Our financial translations
                            are performed by experts familiar with the
                            intricacies of financial terminology and 
                            global markets. Whether it&apos;s annual reports,
                            investment analyses, or accounting
                            documents, we deliver accounting
                            translations you can rely on.
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Marketing Translations</h3>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={9} xl={10}>
                        <p className={styles.First_Blog_Paragraph}>
                            In the field of marketing, it&apos;s all about
                            connecting with your audience and
                            establishing the right context. Our
                            marketing translations go beyond literal
                            translation, capturing the cultural nuances
                            and local idioms that resonate with your
                            target demographic. From advertising copy
                            to social media posts, we ensure your
                            brand voice sounds natural and engaging
                            in every language.
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <Image
                            src="/assets/Services/Third_Blog_Image.png"
                            alt="Services"
                            width={365}
                            height={368}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Second_Blog_Heading}>Technical Translations</h3>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <Image
                            src="/assets/Services/Fourth_Blog_Image.png"
                            alt="Services"
                            width={395}
                            height={395}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <p className={styles.Second_Blog_Paragraph}>
                            Technical documents require a deep
                            understanding of industry-specific
                            terminology and conventions. Our technical
                            translators, proficient in various fields like
                            Engineering, Information Technology, or
                            Medical, offer precise and reliable
                            translations of manuals, data sheets,
                            patent documents, and more.
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Document Translations</h3>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <p className={styles.First_Blog_Paragraph}>
                            Capturing the magic of a narrative in
                            another language demands more than
                            linguistic skills – it requires a translator who
                            is also a storyteller. We provide book
                            translations that maintain the author&apos;s
                            voice, style, and, most importantly, the
                            heart of story. We translate various genres
                            from fiction to non-fiction, children&apos;s books
                            to biographies.
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <Image
                            src="/assets/Services/Fifth_Blog_Image.png"
                            alt="Services"
                            width={395}
                            height={395}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Second_Blog_Heading}>Academic Research Paper Translations</h3>
                <Row>
                <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <Image
                            src="/assets/Services/Sixth_Blog_Image.png"
                            alt="Services"
                            width={479}
                            height={477}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={10}>
                        <p className={styles.Second_Blog_Paragraph}>
                            Capturing the magic of a narrative in
                            another language demands more than
                            linguistic skills – it requires a translator who
                            is also a storyteller. We provide book
                            translations that maintain the author&apos;s
                            voice, style, and, most importantly, the
                            heart of story. We translate various genres
                            from fiction to non-fiction, children&apos;s books
                            to biographies.
                        </p>
                    </Col>
                </Row>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Services;