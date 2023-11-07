import styles from '../styles/Offer.module.css';
import Image from 'next/image';
import React from 'react';
import { Button, Progress, Row, Col } from "antd";
import Tab from "../Animations/Tab";

const Offer: React.FC = () => {
    return (
        <div>
            <div className={styles.offer_content}>
                <h5 className={styles.offer_heading}>WHAT WE OFFER</h5>
                <h4 className={styles.offer_heading2}>Offers</h4>
                <Row>
                    <Col span={14}>
                        <Tab />
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Home/Offering_img.png"
                            alt="Service"
                          width={540}
                            height={767}
                            className={styles.Offer_img}
                        />
                    </Col>
                </Row>
            </div>
            <Row>
                <div className={styles.rectangle_subscribe}>
                    <Col span={17}>
                        <div className={styles.rectangle_subscribe_text}>Professional Translation Enhanced by Human</div>
                    </Col>
                    <Col>
                        <Button className={styles.rectangle_readmore_button}>Read More</Button>
                    </Col>
                </div>
            </Row>
        </div>
    );
};

export default Offer;
