import styles from '../styles/blog.module.css';
import Image from 'next/image';
import React from 'react';
import { Row, Col, Button, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Blog: React.FC = () => {
    return (
        <div className={styles.blog}>
            <h5 className={styles.blog_heading}>OUR BLOG</h5>
            <h4 className={styles.blog_heading2}>Latest Posts</h4>
            <Row>
                <Col span={50}>
                    <div className={styles.blog_content}>
                        <Image
                            src="/assets/blog_img_1.png"
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
                <Col>
                    <div className={styles.blog_content}>
                        <Image
                            src="/assets/blog_img_2.png"
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
                <Col span={50}>
                    <div className={styles.blog_content}>
                        <Image
                            src="/assets/blog_img_3.png"
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
            <div className={styles.rectangle_signup}>
                <div className={styles.signup}>Sign up for Our Newsletter</div>
                <div>
                    <input
                        placeholder='Your Email'
                        className={styles.signup_input}
                    />
                    <Button
                        className={styles.rectangle_subcribe_button}>
                        Subscribe Now
                    </Button>
                </div>
                <Space className={styles.icons}>
                    <FacebookOutlined style={{ fontSize: '250%' }} />
                    <LinkedinOutlined style={{ fontSize: '250%' }} />
                    <InstagramOutlined style={{ fontSize: '250%' }} />
                </Space>
            </div>
        </div>

    );
};

export default Blog;