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
                        <h5 className={styles.blog_img_heading_1}>How to Choose a WooCommerce<br />translation</h5>
                        <p className={styles.blog_paragraph_1}>Lorem ipsum dolor sit amet consectetur. Orci auctor at
                            <br /> nisl aliquet est. In consectetur arcu nunc id turpis eu.</p>
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
                        <h5 className={styles.blog_img_heading_2}>How to Choose a WooCommerce<br />translation</h5>
                        <p className={styles.blog_paragraph_2}>Lorem ipsum dolor sit amet consectetur. Orci auctor at
                            <br /> nisl aliquet est. In consectetur arcu nunc id turpis eu.</p>
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
                        <h5 className={styles.blog_img_heading_3}>How to Choose a WooCommerce<br />translation</h5>
                        <p className={styles.blog_paragraph_3}>Lorem ipsum dolor sit amet consectetur. Orci auctor at
                            <br /> nisl aliquet est. In consectetur arcu nunc id turpis eu.</p>
                    </div>
                </Col>
            </Row>
        </motion.div>

    );
};

export default Blog;