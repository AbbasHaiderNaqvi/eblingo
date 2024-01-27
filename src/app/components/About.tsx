import styles from '../styles/About.module.css';
import Image from "next/image";
import {Col, Row } from "antd";
import React from 'react';



const About = () => {
    return (
            <div className={styles.content}>
                <Row >
                    <Col xs={24} sm={24} md={24} lg={11} xl={13}>
                        <Image
                            src="https://tinypic.host/images/2024/01/25/About_Image.webp"
                            alt="About"
                            width={497}
                            height={458}
                            className={styles.About_Image}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={13} xl={11}>
                        <div className={styles.about_content}>
                        <div className={styles.about_heading}>ABOUT US</div>
                        <div className={styles.about_sub_heading}>Connecting Cultures, Crafting Communication</div>
                        <div className={styles.about_small_heading}>Your Global Partner in Language Solutions</div>
                        <p className={styles.about_paragraph}>
                        We are a language services company headquartered in the United States, with established project management offices worldwide. Our team comprises skilled project managers and linguists with extensive experience handling complex projects. Leveraging our dedicated Project Management Office, we offer comprehensive end-to-end solutions to our partners. EBLINGO is dedicated to helping you communicate your message to the world. Connect with us today to explore how we can serve you in your journey across languages and cultures.
                        </p>
                            </div>
                    </Col>
                </Row>
            </div>
    )
}


export default About;