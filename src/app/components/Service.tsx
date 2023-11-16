"use client";
import react, { useState } from 'react';
import { Button, Row, Col, Progress } from 'antd';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import styles from '../styles/Service.module.css';
import { useEffect } from 'react';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';

const Service = () => {
    const router= useRouter();
    const handleClick = () => {
        console.log('Button clicked!');
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
            className={styles.main}>
            <div className={styles.Service}>
                <Row>
                    <Col span={18}>
                        <div className={styles.Service_Heading}>
                            <h6 className={styles.allservice_heading}>OUR SERVICES</h6>
                            <div className={styles.heading_translation_firm}>
                                Ensuring global relevancy of content
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Button
                           onClick={handleClick}
                            className={`${styles.quote_button}
                        ${scrollPosition ? 'sticky' : ''}`}
                        >Get a quote</Button>
                    </Col>
                </Row>
            </div>
            <Row justify={'start'}>
                <Col span={12}>
                    <div className={styles.First_Service_Section}>
                        <h2 className={styles.service_heading}>
                            Audio Visual Solution
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing}>
                                <li><div className={styles.list}>Subtitling</div></li>
                                <li><div className={styles.list}>Transcription </div></li>
                                <li><div className={styles.list}>Closed Caption</div></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.Second_Service_Section}>
                        <h2 className={styles.service_heading}>
                            Document Solutions
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing} >
                                <li><div className={styles.list}>Financial Translation</div></li>
                                <li><div className={styles.list}>Marketing Translation</div></li>
                                <li><div className={styles.list}>Technical Translation</div></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.third_Service_Section}>
                        <h2 className={styles.service_heading}>
                            Media Translation
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing} >
                                <li><div className={styles.list}>The Multilingual Subtitling Process</div></li>
                                <li><div className={styles.list}>Our In-House Expertise</div></li>
                                <li><div className={styles.list}>Reduce Your workload</div></li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles.fourth_Service_Section}>
                        <h2 className={styles.service_heading}>
                            Publishing Partnership
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing} >
                                <li><div className={styles.list}>Book Translations</div></li>
                                <li><div className={styles.list}>Academic and research Generals</div> </li>
                                <li><div className={styles.list}>Magzine  and media publication</div> </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.Images}>
                        <Image
                            src="/assets/Home/services1.png"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 1350 && scrollPosition < 1700 ? styles.active : ''
                                }`}
                        />
                        <Image
                            src="/assets/Home/services2.png"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 1700 && scrollPosition < 2250 ? styles.active : ''
                                }`}
                        />
                        <Image
                            src="/assets/Home/services3.png"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 2250 && scrollPosition < 2800 ? styles.active : ''
                                }`}
                        />

                        <Image
                            src="/assets/Home/services4.png"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 2800 && scrollPosition < 3100 ? styles.active : ''
                                }`}
                        />

                    </div>
                </Col>
            </Row>

        </motion.div>

    )
}

export default Service;
