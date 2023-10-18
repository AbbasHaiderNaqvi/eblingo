import styles from '../styles/About.module.css';
import AnimatedProgressBar from '../Animations/AnimationProgressBar';
import Image from "next/image";
import { Col, Divider, Row } from "antd";
import React from 'react';
import ContactForm from './ContactForm';

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Row justify="start">
                    <Col span={13}>
                        <Image
                            src="/assets/About-1.png"
                            alt="About"
                            width={350}
                            height={400}
                            className={styles.about_img1}
                        />
                        <Image
                            src="/assets/About-2.png"
                            alt="About"
                            width={300}
                            height={225}
                            className={styles.about_img2}
                        />
                        <Image
                            src="/assets/About-3.png"
                            alt="About"
                            width={185}
                            height={80}
                            className={styles.about_img3}
                        />
                        <h3 className={styles.bold_heading}>2015<sup> +</sup></h3>
                        <p className={styles.heading_italic}>Projects Completed</p>
                    </Col>
                    <Col>
                        <div className={styles.about_heading}>ABOUT EBLINGO</div>
                        <div className={styles.about_sub_heading}>We’re Partner of your <br />Innovations</div>
                        <p className={styles.about_paragraph}>We are a language services company headquartered in the United States; we<br />
                            have established project management offices worldwide. Our team<br />
                            comprises skilled project managers and linguists with extensive experience<br />
                            handling complex projects. Leveraging our dedicated Project Management<br />
                            Office, we offer comprehensive end-to-end solutions to our partners. EBLINGO<br />
                            is dedicated to helping you communicate your message to the world.<br />
                            Connect with us today to explore how we can serve you in your journey across<br />
                            languages and cultures.</p>
                        <AnimatedProgressBar />
                        <p className={styles.about_paragraph}>We are a language services company headquartered in the United States; we<br />
                            have established project management offices worldwide. Our team<br />
                            comprises skilled project managers and linguists with extensive experience<br />
                            handling complex projects. Leveraging our dedicated Project Management<br />
                            Office. </p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}


export default About;