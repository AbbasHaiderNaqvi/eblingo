import React from 'react';
import styles from '../styles/Transcription.module.css';
import Image from 'next/image';
import { Col, Row } from 'antd';

function Transcription() {
    return (
        <div>
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Transcription | Subtitling | Closed Captions</h1>
                <h5 className={styles.Transcription_Sub_heading}>Home / Services / Translation</h5>
            </div>
            <div>
                <div className={styles.content}>
                    <h2 className={styles.First_Connect_Heading}>More than ever, <span className={styles.span}>Businesses</span> rely on video to<br />
                        connect with customers and <span className={styles.span}>thrive</span><br />
                        in the digital age.</h2>
                    <div className={styles.divider}>
                        <Image
                            src="/assets/Transcription/Transcription-icon.png"
                            alt="Transcription"
                            width={120}
                            height={12}
                            className={styles.Transcription_Image}
                        />
                    </div>
                    <h4 className={styles.Second_Connect_heading}>
                        By making your film available in several languages, you can<br />
                        reach more of your target customers and<br />
                        grow your customers.
                    </h4>
                </div>
            </div>
            <div>
                <Row>
                    <Col>
                        <div className={styles.blog_content}>
                            <Image
                                src="/assets/Transcription/Transcription_Blog_1.png"
                                alt="Transcription"
                                width={412}
                                height={308}
                                className={styles.Transcription_Blog_Image1}
                            />
                            <h3 className={styles.blog_heading_1}>
                                Transcription
                            </h3>
                            <p className={styles.blog_paragraph_1}>
                                Our experienced transcriptionists deliver<br />
                                accurate, timely transcriptions in multiple<br />
                                languages. Whether its a recorded<br />
                                meeting, a conference, or an interview,<br />
                                we'll convert your audio files into precisely<br />
                                transcribed text, retaining the essence and<br />
                                context of the original content.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.blog_content}>
                            <Image
                                src="/assets/Transcription/Transcription_Blog_2.png"
                                alt="Transcription"
                                width={412}
                                height={308}
                                className={styles.Transcription_Blog_Image2}
                            />
                            <h3 className={styles.blog_heading_2}>
                                Subtitling
                            </h3>
                            <p className={styles.blog_paragraph_2}>
                                We understand the power of subtitled<br />
                                content in expanding your audience's<br />
                                reach and engagement. Our team of<br />
                                linguistic experts excels in creating<br />
                                accurate, culturally appropriate subtitles<br />
                                that resonate with your target<br />
                                demographics, allowing your content to be<br />
                                accessible, understandable, and enjoyable<br />
                                to all.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.blog_content}>
                            <Image
                                src="/assets/Transcription/Transcription_Blog_3.png"
                                alt="Transcription"
                                width={412}
                                height={308}
                                className={styles.Transcription_Blog_Image3}
                            />
                            <h3 className={styles.blog_heading_3}>
                                Closed Captions
                            </h3>
                            <p className={styles.blog_paragraph_3}>
                                Our captioning services make your<br />
                                audio-visual content accessible to<br />
                                everyone, including the hard-of-<br />
                                hearing community. We go beyond just<br />
                                literal transcription, incorporating<br />
                                descriptions of non-speech elements,<br />
                                providing a full contextual experience to<br />
                                your audience. Our attention to detail<br />
                                and commitment to accessibility make<br />
                                us a trusted partner for your captioning<br />
                                needs.

                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={styles.blog_statement1}>
                EBLINGO is dedicated to helping you communicate your message to the world<br/>
                 across all languages and mediums. Connect with us today to explore how we<br/>
                  can serve you in your journey across languages and cultures.
                  </div>
                  <div className={styles.blog_statement2}>
                Businesses who adopt video in their content strategy get a variety of<br/> 
                advantages. Customers stay on their pages longer. They improve visitors, lead<br/>
                generation, and income.
                </div>
                <div className={styles.blog_statement3}>
                By including a transcript, businesses may communicate marketing messaging<br/>
                to those who struggle to hear video audio.  Subtitles in multiple languages<br/>
                facilitate communication between businesses and their international clientele.<br/>
            </div>
        </div>
    )
}

export default Transcription;