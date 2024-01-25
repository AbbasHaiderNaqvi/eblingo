'use client';
import Image from "next/image";
import styles from '../styles/AdvantageSection.module.css';
import { Button, Progress, Row, Col } from "antd";
import ContactForm from "./ContactForm";
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from "framer-motion";



const AdvantageSection = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.content}>
            <Row>
                <Col xs={24} sm={12} md={12} lg={7} xl={7}>
                    <div className={styles.Advantage1}>
                        <div className={styles.Advantage_image1}>
                            <Image
                                src="/assets/Home/Advantage_Image1.webp"
                                alt="Advantage Section"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image1}
                            />
                        </div>
                        <div className={styles.Advantage_Description1}>
                            <div className={styles.FreeSupport_heading}>24/7 support</div>
                            <div className={styles.FreeSupport_paragraph}>
                            Our Project Management team will be<br /> 
                            available in various time zones to<br /> 
                            assist your follow up queries and<br /> 
                            urgent requests.</div>
                        </div>
                    </div>
                    <div className={styles.Advantage2}>
                        <div className={styles.Advantage_image2}>
                            <Image
                                src="/assets/Home/Advantage_Image2.webp"
                                alt="About"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image2}
                            />
                        </div>
                        <div className={styles.Advantage_Description2}>
                            <div className={styles.tech_translation_heading}>Technical Expertise</div>
                            <div className={styles.translation_paragraph}>
                            We have a global talent pool with<br /> 
                            linguists having technical expertise<br /> 
                            in finance, medical, legal, and<br /> 
                            editorial specifics.</div>
                        </div>
                    </div>
                </Col >
                <Col xs={24} sm={12} md={12} lg={7} xl={7}>
                    <div className={styles.Advantage3}>
                        <div className={styles.Advantage_image3}>
                            <Image
                                src="/assets/Home/Advantage_Image3.webp"
                                alt="About"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image3}
                            />
                        </div>
                        <div className={styles.Advantage_Description3}>
                            <div className={styles.language_heading}>100+ Languages</div>
                            <div className={styles.language_paragraph}>
                             Eblingo&apos;s project management teams<br /> 
                             operating in multiple continents, providing<br /> 
                             services in more than 100 languages.</div>
                        </div>
                    </div>
                    <div className={styles.Advantage4}>
                        <div className={styles.Advantage_image4}>
                            <Image
                                src="/assets/Home/Advantage_Image4.webp"
                                alt="About"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image4}
                            />
                        </div>
                        <div className={styles.Advantage_Description4}>
                            <div className={styles.Multi_heading}>Multilingual Teams</div>
                            <div className={styles.Multi_paragraph}>
                            Our linguists are trained in multi-<br />
                            language translation. We can offer<br /> 
                            translation services in multiple languages<br /> 
                            from source.</div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                    <ContactForm />
                </Col>
            </Row>
        </motion.div>

    )
}

export default AdvantageSection;