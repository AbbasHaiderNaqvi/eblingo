'use client';
import React from 'react'
import styles from '../styles/Services.module.css'
import { Col, Row } from 'antd';
import Image from 'next/image';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';

function Services() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Eblingo Services</h1>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Document Translations</h3>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={11} xl={14}>
                        <p className={styles.First_Blog_Paragraph}>
                            In the age of global connectivity, the power<br />
                            to communicate effectively across<br />
                            languages is invaluable. At Eblingo, we<br />
                            provide superior document translation<br />
                            services that bridge language barriers and<br />
                            enable successful cross-cultural<br />
                            communication.At Eblingo,we believe in<br />
                            breaking down language barriers and<br />
                            fostering global connections. Reach out to<br />
                            us today to experience our professional<br />
                            translation services.
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={11} xl={10}>
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
                    <Col xs={24} sm={24} md={24} lg={11} xl={14}>
                        <Image
                            src="/assets/Services/Second_Blog_Image.png"
                            alt="Services"
                            width={365}
                            height={368}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={11} xl={10}>
                        <p className={styles.Second_Blog_Paragraph}>
                            In the realm of finance, precision and clarity<br />
                            are paramount. Our financial translations<br />
                            are performed by experts familiar with the<br />
                            intricacies of financial terminology and <br />
                            global markets. Whether it&apos;s annual reports,<br />
                            investment analyses, or accounting<br />
                            documents, we deliver accounting<br />
                            translations you can rely on.
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Marketing Translations</h3>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={11} xl={14}>
                        <p className={styles.First_Blog_Paragraph}>
                            In the field of marketing, it&apos;s all about<br />
                            connecting with your audience and<br />
                            establishing the right context. Our<br />
                            marketing translations go beyond literal<br />
                            translation, capturing the cultural nuances<br />
                            and local idioms that resonate with your<br />
                            target demographic. From advertising copy<br />
                            to social media posts, we ensure your<br />
                            brand voice sounds natural and engaging<br />
                            in every language.
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={11} xl={10}>
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
                    <Col xs={24} sm={24} md={24} lg={11} xl={14}>
                        <Image
                            src="/assets/Services/Fourth_Blog_Image.png"
                            alt="Services"
                            width={395}
                            height={395}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={11} xl={10}>
                        <p className={styles.Second_Blog_Paragraph}>
                            Technical documents require a deep<br />
                            understanding of industry-specific<br />
                            terminology and conventions. Our technical<br />
                            translators, proficient in various fields like<br />
                            Engineering, Information Technology, or<br />
                            Medical, offer precise and reliable<br />
                            translations of manuals, data sheets,<br />
                            patent documents, and more.
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Document Translations</h3>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={11} xl={14}>
                        <p className={styles.First_Blog_Paragraph}>
                            Capturing the magic of a narrative in<br />
                            another language demands more than<br />
                            linguistic skills – it requires a translator who<br />
                            is also a storyteller. We provide book<br />
                            translations that maintain the author&apos;s<br />
                            voice, style, and, most importantly, the<br />
                            heart of story. We translate various genres<br />
                            from fiction to non-fiction, children&apos;s books<br />
                            to biographies.
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={11} xl={10}>
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
                    <Col>
                        <Image
                            src="/assets/Services/Sixth_Blog_Image.png"
                            alt="Services"
                            width={479}
                            height={477}
                            className={styles.Services_Second_Blog_Image}
                        />
                    </Col>
                    <Col>
                        <p className={styles.Second_Blog_Paragraph}>
                            Capturing the magic of a narrative in<br />
                            another language demands more than<br />
                            linguistic skills – it requires a translator who<br />
                            is also a storyteller. We provide book<br />
                            translations that maintain the author&apos;s<br />
                            voice, style, and, most importantly, the<br />
                            heart of story. We translate various genres<br />
                            from fiction to non-fiction, children&apos;s books<br />
                            to biographies.
                        </p>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Services;