'use client';
import styles from '../styles/WhatWeDo.module.css';
import Image from 'next/image';
import React from 'react';
import { Button, Progress, Row, Col } from "antd";
import Tab from "../Animations/Tab";
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';

 
const WhatWeDo: React.FC = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={MediumAnimationVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.content}>
            <Row>
                 
                <Col xs={24} sm={24} md={24} lg={13} xl={11}>
                    <div className={styles.WhatWeDo}>
                        <h3 className={styles.WhatWeDo_Heading1}>WHAT WE DO</h3>
                        <h2 className={styles.WhatWeDo_Heading2}>
                            Embracing Your Innovations<br />Together
                        </h2>
                        <p className={styles.WhatWeDo_paragraph}>
                        The translation and subtitling process can be overwhelming with its
                        complex procedures, ongoing interaction with linguists, and unforeseen 
                        expenses. Our company has devised simplified procedures that cater to 
                        the requirements of businesses in search of expert language services. 
                        We aim to offer fast, efficient, and budget-friendly solutions that 
                        align with our clients’ spending limits.
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={11} xl={10}>
                    <Image
                        src="/assets/Home/WhatWeDo_Image.png"
                        alt="WhatWeDo"
                        width={540}
                        height={436}
                        className={styles.WhatWeDO_Image}
                     />
                </Col>
            </Row>
        </motion.div>
    );
}
export default WhatWeDo;