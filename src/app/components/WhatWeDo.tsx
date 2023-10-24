import styles from '../styles/WhatWeDo.module.css';
import Image from 'next/image';
import React from 'react';
import { Button, Progress, Row, Col } from "antd";
import Tab from "../Animations/Tab";

const Offer: React.FC = () => {
    return (
        <div className={styles.content}>
            <Row>
                <Col span={13}>
                    <div className={styles.WhatWeDo}>
                        <h3 className={styles.WhatWeDo_Heading1}>WHAT WE DO</h3>
                        <h2 className={styles.WhatWeDo_Heading2}>
                            Embracing Your Innovations<br />Together
                        </h2>
                        <p className={styles.WhatWeDo_paragraph}>
                            The translation and subtitling process can be overwhelming with its complex<br />
                            procedures, ongoing interaction with linguists, and unforeseen expenses. Our<br />
                            company has devised simplified procedures that cater to the requirements of<br />
                            businesses in search of expert language services. We aim to offer fast, efficient, and<br />
                            budget-friendly solutions that align with our clients’ spending limits.
                        </p>
                    </div>
                </Col>
                <Col>
                    <Image
                        src="/assets/WhatWeDo_Image.png"
                        alt="WhatWeDo"
                        width={540}
                        height={436}
                        className={styles.WhatWeDO_Image}
                    />
                </Col>
            </Row>
        </div>
    );
}
export default Offer;