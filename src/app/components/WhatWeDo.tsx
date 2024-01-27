import styles from '../styles/WhatWeDo.module.css';
import Image from 'next/image';
import React from 'react';
import { Row, Col } from "antd";

 
const WhatWeDo: React.FC = () => {
    return (
        <div className={styles.content}>
            <Row>
                 
                <Col xs={24} sm={24} md={24} lg={13} xl={11}>
                    <div className={styles.WhatWeDo}>
                        <h3 className={styles.WhatWeDo_Heading1}>WHAT WE DO</h3>
                        <h2 className={styles.WhatWeDo_Heading2}>
                        Streamlining Language Services
                        </h2>
                        <div className={styles.WhatWeDo_subheading}>Fast, Efficient, and Budget-Friendly Solutions for Your Business Translation Needs.</div>

                        <p className={styles.WhatWeDo_paragraph}>
                        The translation and subtitling process can be overwhelming with its complex procedures, ongoing interaction with linguists, and unforeseen expenses. Our company has devised simplified procedures that cater to the requirements of businesses in search of expert language services. We aim to offer fast, efficient, and budget-friendly solutions that align with our clients’ spending limits.
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={11} xl={10}>
                    <Image
                        src="https://tinypic.host/images/2024/01/25/WhatWeDo_Image.webp"
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
export default WhatWeDo;