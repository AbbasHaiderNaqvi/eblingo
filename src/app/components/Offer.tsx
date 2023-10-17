import styles from '../styles/Offer.module.css';
import Image from 'next/image';
import React from 'react';
import { Button,Progress,Row,Col } from "antd";
import Tab from "../Animations/Tab";

const Offer: React.FC = () => {
    return (
     <div>
        <Row>
            <Col span={14}>
          <h5 className={styles.offer_heading}>WHAT WE OFFER</h5>
                <h4 className={styles.offer_heading2}>Offers</h4>
                <Tab />
                </Col>
                <Col>
                <Image
                    src="/assets/Offering_img.png"
                    alt="Service"
                    width={400}
                    height={500}
                    className={styles.Offer_img}
                />
                </Col>
                </Row>
                <Row>
                    <Col span={20}>
                    <div className={styles.rectangle_subscribe}></div>
                <div className={styles.rectangle_subscribe_text}>Professional Translation Enhanced by Human</div>
                    </Col>
                    <Col>
                    <Button className={styles.rectangle_readmore_button}>Read More</Button>
                    </Col>
                </Row>
     </div>
    );
};

export default Offer;
