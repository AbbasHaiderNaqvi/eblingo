import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className={styles.logo_footer}
                />
                <ul className={styles.overall_Link}>
                    <li className={styles.socialmedia}>
                        <ul className={styles.socialmedia_links}>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                            <li>Pinterest</li>
                        </ul>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <ul className={styles.services_feild}>
                            <li><b>Services</b></li>
                            <li>Technical</li>
                            <li>Translation</li>
                            <li>Business</li>
                            <li>Legal</li>
                            <li>Medical documents</li>
                        </ul>
                    </li>
                    <li>
                        <div>
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
                                    <div className={styles.recent_heading}>Creating accessible Multilingual Site</div>
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
                        </div>
                    </li>
                </ul>
                <div className={styles.legal_terms_h}>
                    <div className={styles.reserved_rights}>{new Date().getFullYear()} Eblingo.All right reserved</div>
                    <div className={styles.privacy_policy}>Privacy Policy</div>
                    <div className={styles.terms_and_condition}> Terms and Conditions</div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
