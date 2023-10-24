import { ArrowRightOutlined } from '@ant-design/icons';
import styles from '../styles/Footer.module.css';
import { Row, Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Row>
                <Col>
                    <ul className={styles.socialmedia_links}>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Pinterest</li>
                    </ul>
                    <div>
                        <h3 className={styles.email_heading}>Email Us and Connect with us</h3>
                        <input placeholder='E-Mail Address' className={styles.email_input} />
                        <ArrowRightOutlined style={{ fontSize: '150%' }} className={styles.email_icon} />
                    </div>
                </Col>
                <Col>
                    <ul className={styles.Useful_links}>
                        <li>
                            <b>Useful Links</b>
                        </li>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/media-services">Media Services</Link>
                        </li>
                        <li>
                            <Link href="/doc-translation">Doc.Translation</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/partnership">Partnership</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul className={styles.services_feild}>
                        <li><b>Services</b></li>
                        <li>Technical</li>
                        <li>Translation</li>
                        <li>Business</li>
                        <li>Legal</li>
                        <li>Medical documents</li>
                    </ul>
                </Col>
                <Col>
                    <h6 className={styles.recent_heading}>Recents</h6>
                    <div className={styles.recent1}>
                        <Image
                            src="/assets/Innovations_img.png"
                            alt="Service"
                            width={50}
                            height={50}
                            className={styles.recent_img}
                        />
                        <div className={styles.recent_content}>
                            <h4 className={styles.recent_heading}>Creating accessible Multilingual Site</h4>
                            <div className={styles.recent_Date}>May 21 2023</div>
                        </div>
                    </div>
                    <div className={styles.recent2}>
                        <Image
                            src="/assets/Innovations_img.png"
                            alt="Service"
                            width={50}
                            height={50}
                            className={styles.recent_img}
                        />
                        <div className={styles.recent_content}>
                            <div className={styles.recent_heading}>How To translate products on your<br />ecommerce store</div>
                            <div className={styles.recent_Date}>May 21 2023</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className={styles.legal_terms_h}>
                <div className={styles.reserved_rights}>{new Date().getFullYear()} Eblingo.All right reserved</div>
                <div className={styles.privacy_policy}>Privacy Policy</div>
                <div className={styles.terms_and_condition}> Terms and Conditions</div>
            </div>
        </footer>
    );
};

export default Footer;
