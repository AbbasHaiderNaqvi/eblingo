'use client';
import styles from '../styles/blog.module.css';
import Image from 'next/image';
import React from 'react';
import { Row, Col, Button, Space } from 'antd';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.blog}>
            <h5 className={styles.blog_heading}>OUR BLOG</h5>
            <h4 className={styles.blog_heading2}>Latest Posts</h4>
            <Row>

                <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                    <div className={styles.blog_content}>
                        <Image
                            src="/assets/Home/blog_img_1.png"
                            alt="Blog"
                            width={420}
                            height={280}
                            className={styles.Blog_img_1}
                        />
                        <h5 className={styles.blog_img_heading_1}>Content Localization 101</h5>
                        <p className={styles.blog_paragraph_1}>
                            Content localization is the process of customizing and translating<br/> 
                            content to cater to the linguistic and cultural preferences of a<br/>
                             specific audience.</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                    <div className={styles.blog_content}>
                        <Image
                            src="/assets/Home/blog_img_2.png"
                            alt="Blog"
                            width={420}
                            height={280}
                            className={styles.Blog_img_2}
                        />
                        <h5 className={styles.blog_img_heading_2}>Why do we still need human linguist?</h5>
                        <p className={styles.blog_paragraph_2}>
                        Human linguists bring cultural nuance, context awareness, and<br /> 
                        creative adaptability that machine translation often lacks,<br /> 
                        ensuring accurate and contextually appropriate communication.
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                    <div className={styles.blog_content}>
                        <Image
                            src="/assets/Home/blog_img_3.png"
                            alt="Service"
                            width={420}
                            height={280}
                            className={styles.Blog_img_3}
                        />
                        <h5 className={styles.blog_img_heading_3}>Creating Subtitles - Step by Step</h5>
                        <p className={styles.blog_paragraph_3}>
                            Create subtitles by transcribing, translating (if necessary),<br /> 
                            formatting, syncing with audio, reviewing, styling, testing,<br /> 
                            and exporting in a preferred format for your video.</p>
                    </div>
                </Col>
            </Row>
        </motion.div>

    );
};

export default Blog;