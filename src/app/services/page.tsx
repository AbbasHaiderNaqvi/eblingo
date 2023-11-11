'use client';
import React from 'react'
import styles from '../styles/Services.module.css'
import { Col, Row } from 'antd';
import Image from 'next/image';


function Services() {
    return (
        <div>
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Eblingo Services</h1>
            </div> 
            <div>
                <h3 className={styles.First_Blog_Heading}>Document Translations</h3>
                <Row>
                    <Col>
                        <p className={styles.First_Blog_Paragraph}>
                            In the age of global connectivity, the power<br />
                            to communicate effectively across<br />
                            languages is invaluable. At Eblingo, we<br />
                            provide superior document translation<br />
                            services that bridge language barriers and<br />
                            enable successful cross-cultural<br />
                            communication.<br />
                            At Eblingo,we believe in breaking down<br />
                            language barriers and fostering global<br />
                            connections. Reach out to us today to<br />
                            experience our professional translation<br />
                            services.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Services/First_Blog_Image.png"
                            alt="Services"
                            width={441}
                            height={452}
                            className={styles.Services_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Second_Blog_Heading}>Financial Translations</h3>
                <Row>
                    <Col>
                        <Image
                            src="/assets/Services/Second_Blog_Image.png"
                            alt="Services"
                            width={365}
                            height={368}
                            className={styles.Services_Blog_Image}
                        />
                    </Col>
                    <Col>
                        <p className={styles.Second_Blog_Paragraph}>
                            In the realm of finance, precision and<br />
                            clarity are paramount. Our financial<br />
                            translations are performed by experts<br />
                            familiar with the intricacies of financial<br />
                            terminology and global markets. Whether<br />
                            it&apos;s annual reports, investment analyses, or<br />
                            accounting documents, we deliver<br />
                            meticulous translations you can rely on.
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Marketing Translations</h3>
                <Row>
                    <Col>
                        <p className={styles.First_Blog_Paragraph}>
                        In the field of marketing, it&apos;s all about<br/> 
                        connecting with your audience and<br/> 
                        establishing the right context. Our<br/> 
                        marketing translations go beyond literal<br/> 
                        translation, capturing the cultural nuances<br/> 
                        and local idioms that resonate with your<br/> 
                        target demographic. From advertising<br/> 
                        copy to social media posts, we ensure<br/> 
                        your brand voice sounds natural and<br/> 
                        engaging in every language.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Services/Third_Blog_Image.png"
                            alt="Services"
                            width={365}
                            height={368}
                            className={styles.Services_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Second_Blog_Heading}>Technical Translations</h3>
                <Row>
                    <Col>
                        <Image
                            src="/assets/Services/Fourth_Blog_Image.png"
                            alt="Services"
                            width={395}
                            height={395}
                            className={styles.Services_Blog_Image}
                        />
                    </Col>
                    <Col>
                        <p className={styles.Second_Blog_Paragraph}>
                            Technical documents require a deep<br />
                            understanding of industry-specific<br />
                            terminology and conventions. Our<br />
                            technical translators, proficient in various<br />
                            fields like Engineering, Information<br />
                            Technology, or Medical, offer precise and<br />
                            reliable translations of manuals, data<br />
                            sheets, patent documents, and more.
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.First_Blog_Heading}>Document Translations</h3>
                <Row>
                    <Col>
                        <p className={styles.First_Blog_Paragraph}>
                        Capturing the magic of a narrative in<br /> 
                        another language demands more than<br /> 
                        linguistic skills – it requires a translator<br /> 
                        who is also a storyteller. We provide book<br /> 
                        translations that maintain the author&apos;s<br /> 
                        voice, style, and, most importantly,<br /> 
                        the heart of story. We translate various genres<br /> 
                        from fiction to non-fiction, children&apos;s books<br /> 
                        to biographies.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Services/Fifth_Blog_Image.png"
                            alt="Services"
                            width={395}
                            height={395}
                            className={styles.Services_Blog_Image}
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
                            className={styles.Services_Blog_Image}
                        />
                    </Col>
                    <Col>
                        <p className={styles.Second_Blog_Paragraph}>
                        Capturing the magic of a narrative in<br /> 
                        another language demands more than<br /> 
                        linguistic skills – it requires a translator<br /> 
                        who is also a storyteller. We provide book<br /> 
                        translations that maintain the author&apos;s<br /> 
                        voice, style, and, most importantly,<br /> 
                        the heart of story. We translate various genres<br /> 
                        from fiction to non-fiction, children&apos;s books<br /> 
                        to biographies.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Services;