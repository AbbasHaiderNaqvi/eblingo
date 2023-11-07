import React from 'react'
import styles from '../styles/Publications.module.css';
import { Col, Row } from 'antd';
import Image from 'next/image';

function Publications() {
    return (
        <div>
            <div className={styles.HeroSection}>
                <h1 className={styles.HeroSection_Heading}>Publications Partnership</h1>
                <h5 className={styles.Publications_Sub_heading}>Home / Services / Translation</h5>
            </div>
            <div>
                <h4 className={styles.FirstHeading}>Book Translation Services with Eblingo</h4>
                <h2 className={styles.SecondHeading}>Empowering Stories across Borders </h2>
                <p className={styles.Firstparagrph}>
                    At Eblingo, we believe that stories are a universal language. We are committed<br />
                    to helping publishers, authors, and magazines bring their narratives to life in<br />
                    any language, fostering a truly global literature community.</p>
            </div>
            <div>
                <h3 className={styles.Blog_Heading}>Partnerships with Eblingo</h3>
                <Row>
                    <Col span={12}>
                        <p className={styles.Blog_Paragraph}>
                            By choosing Eblingo as your translation<br />
                            partner, you're choosing quality, precision, and<br />
                            dedication. We pride ourselves on building<br />
                            strong relationships with book publishing<br />
                            houses, self-published authors, and<br />
                            magazines, delivering translations that stay<br />
                            true to the spirit and intent of your original<br />
                            content.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/Publications/Publication_Blog_Image.png"
                            alt="Publications"
                            width={592}
                            height={571}
                            className={styles.Publication_Blog_Image}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className={styles.Explain_Heading1}>Our Uniquely Tailored Process</h3>
                <p className={styles.Explain_Paragraph1}>
                    Our meticulous selection process ensures that your work is in the hands of a linguist<br />
                    expertly matched to your genre. Our certified reviewers test a pool of linguists to<br />
                    determine the ideal fit, thereby maintaining the narrative flow and capturing<br />
                    the stylistic nuances of your work.<br />
                    Once a suitable translator is identified, they begin the transformation process. To<br />
                    ensure the highest quality, their work is then scrutinized by another reviewer, who<br />
                    fine-tunes the translated content, ensuring consistency and fluency.<br />
                </p>

            </div>
            <div>
                <h3 className={styles.Explain_Heading2}>End-to-End Solutions<br />Desktop Publishing Services</h3>
                <p className={styles.Explain_Paragraph1}>
                    At Eblingo, we go the extra mile for our clients. Not only do we offer expert translation,<br /> 
                    but we also provide comprehensive desktop publishing services. Our team will<br />
                    assist you in preparing your book for publication in any format, whether<br />
                    print-ready or digital. We help your book look its best while maintaining<br />
                    layout consistency across languages. Partner with Eblingo and let<br />
                    us help your stories reach new audiences and cross linguistic<br />
                    boundaries. Contact us today to start your global literary journey.
                </p>

            </div>
        </div>
    )
}

export default Publications; 