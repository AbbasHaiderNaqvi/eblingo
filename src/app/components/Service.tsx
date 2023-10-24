import react from 'react';
import { Button, Row, Col } from 'antd';
import Image from 'next/image';
import styles from '../styles/Service.module.css';
import { start } from 'repl';

const Service = () => {
    return (
        <div className={styles.main}>
            <div className={styles.Service}>
            <Row>
            <Col span={18}>
            <div className={styles.Service_Heading}>
            <h6 className={styles.allservice_heading}>OUR SERVICES</h6>
            <div className={styles.heading_translation_firm}>
                Biggest language Translation firm
            </div>
            </div>
            </Col>
            <Col>
            <Button className={styles.quote_button}>Get a quote</Button>
            </Col>
            </Row>
            </div>
            <div className={styles.First_Service_Section}>
                <Row justify={'start'}>
                    <Col span={10}>
                        <h2 className={styles.service_heading}>
                            Audio Visual Solution
                        </h2>
                        <div className={styles.unorder_list}>
                            <ul className={styles.listing} >
                                <li><div className={styles.list}>Subtitling</div></li>
                                <li><div className={styles.list}>Transcription </div></li>
                                <li><div className={styles.list}>Closed Caption</div></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/services1.png"
                            alt="Service"
                            width={673}
                            height={507}
                            className={styles.service_box1}
                        />
                    </Col>
                </Row>
            </div>
            <div className={styles.Second_Service_Section}>
                <Row justify={'start'}>
                    <Col span={10}>
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
                    </Col>
                    <Col>
                        <Image
                            src="/assets/services2.png"
                            alt="Service"
                            width={673}
                            height={507}
                            className={styles.service_box1}
                        />
                    </Col>
                </Row>
            </div>
            <div className={styles.third_Service_Section}>
                <Row justify={'start'}>
                    <Col span={10}>
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
                    </Col>
                    <Col>
                        <Image
                            src="/assets/services3.png"
                            alt="Service"
                            width={673}
                            height={507}
                            className={styles.service_box1}
                        />
                    </Col>
                </Row>
            </div>
            <div className={styles.fourth_Service_Section}>
                <Row justify={'start'}>
                    <Col span={10}>
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
                    </Col>
                    <Col>
                        <Image
                            src="/assets/services4.png"
                            alt="Service"
                            width={673}
                            height={507}
                            className={styles.service_box1}
                        />
                    </Col>
                </Row>
            </div>
            <div className={styles.brands_images}>
                <Image
                    src="/assets/brand.png"
                    alt="Service"
                    width={1442}
                    height={146}
                />
            </div>

        </div>

    )
}

export default Service;
