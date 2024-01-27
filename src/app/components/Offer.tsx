import styles from '../styles/Offer.module.css';
import Image from 'next/image';
import React from 'react';
import {Row, Col } from "antd";
import Tab from "../Animations/Tab";


const Offer: React.FC = () => {
    return (
        <> 
            <div className={styles.offer_content}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                    <h5 className={styles.offer_heading}>WHAT WE OFFER</h5>
                        <Tab />
                    </Col>
                     <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <Image
                            src="https://tinypic.host/images/2024/01/25/Offering_img.webp"
                            alt="Service"
                            width={540}
                            height={546}
                            className={styles.Offer_img}
                        />
                    </Col> 
                </Row>
            </div>
        </>
    );
};

export default Offer;
