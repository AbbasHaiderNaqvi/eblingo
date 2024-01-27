"use client";
import react, { useState } from 'react';
import { Button, Row, Col, Progress } from 'antd';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import styles from '../styles/Service.module.css';
import { useEffect } from 'react';

const Service = () => {
    const router= useRouter();
    const handleClick = () => {
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
        <>
            <div className={styles.Service}>
                <Row>
                    <Col span={18}>
                        <div className={styles.Service_Heading}>
                            <h6 className={styles.allservice_heading}>OUR SERVICES</h6>
                            <div className={styles.subheading}>
                            Enhancing Global Communication
                            </div>
                            <div className={styles.paragraph}>From Subtitles to Technical Translations, We&apos;ve Got Your Multilingual Needs Covered.</div>
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
                <Col xs={24}>
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
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services1.webp"
                            alt="Service"
                            width={330}
                            height={200}
                            className={styles.Service_Image_responsive}
                        /> 
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
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services2.webp"
                            alt="Service"
                            width={330}
                            height={200}
                            className={styles.Service_Image_responsive}
                        /> 
                    </div>
                    <div className={styles.third_Service_Section}>
                        <h2 className={styles.service_heading}>
                            Media Partnerships
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing} >
                                <li><div className={styles.list}>The Multilingual Subtitling Process</div></li>
                                <li><div className={styles.list}>Our In-House Expertise</div></li>
                                <li><div className={styles.list}>Reduce Your workload</div></li>
                            </ul>
                        </div>
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services3.webp"
                            alt="Service"
                            width={330}
                            height={200}
                            className={styles.Service_Image_responsive}
                        /> 
                    </div>
                    <div className={styles.fourth_Service_Section}>
                        <h2 className={styles.service_heading}>
                            Publishing Partnerships
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing} >
                                <li><div className={styles.list}>Book Translations</div></li>
                                <li><div className={styles.list}>Academic and research journals</div> </li>
                                <li><div className={styles.list}>Magzine  and media publication</div> </li>
                            </ul>
                        </div>
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services4.webp"
                            alt="Service"
                            width={330}
                            height={200}
                            className={styles.Service_Image_responsive}
                        /> 
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.Images}>
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services1.webp"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 1500 && scrollPosition < 1900 ? styles.active : ''
                                }`}
                        />
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services2.webp"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 1900 && scrollPosition < 2300 ? styles.active : ''
                                }`}
                        />
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services3.webp"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 2300 && scrollPosition < 2900 ? styles.active : ''
                                }`}
                        />
                        <Image
                            src="https://tinypic.host/images/2024/01/25/services4.webp"
                            alt="Service"
                            width={615}
                            height={380}
                            className={`${styles.Service_Image} ${scrollPosition >= 2900 && scrollPosition < 3200 ? styles.active : ''
                                }`}
                        />
                            
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Service;
