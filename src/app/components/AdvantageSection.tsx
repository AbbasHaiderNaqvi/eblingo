'use client';
import Image from "next/image";
import styles from '../styles/AdvantageSection.module.css';
import { Button, Progress, Row, Col } from "antd";
import ContactForm from "./ContactForm";
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from "framer-motion";



const AdvantageSection = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.content}>
            <Row>
                <Col xs={24} sm={12} md={12} lg={7} xl={7}>
                    <div className={styles.Advantage1}>
                        <div className={styles.Advantage_image1}>
                            <Image
                                unoptimized
                                src="/assets/Home/Advantage_Image1.png"
                                alt="Advantage Section"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image1}
                            />
                        </div>
                        <div className={styles.Advantage_Description1}>
                            <div className={styles.FreeSupport_heading}>Free Support</div>
                            <div className={styles.FreeSupport_paragraph}>
                                Approve, edit and enhance your<br />
                                website translation within your<br />
                                team</div>
                        </div>
                    </div>
                    <div className={styles.Advantage2}>
                        <div className={styles.Advantage_image2}>
                            <Image
                                unoptimized
                                src="/assets/Home/Advantage_Image2.png"
                                alt="About"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image2}
                            />
                        </div>
                        <div className={styles.Advantage_Description2}>
                            <div className={styles.tech_translation_heading}>Technical Translation</div>
                            <div className={styles.translation_paragraph}>
                                Approve, edit and enhance your<br />
                                website translation within your<br />
                                team</div>
                        </div>
                    </div>
                </Col >
                <Col xs={24} sm={12} md={12} lg={7} xl={7}>
                    <div className={styles.Advantage3}>
                        <div className={styles.Advantage_image3}>
                            <Image
                                unoptimized
                                src="/assets/Home/Advantage_Image3.png"
                                alt="About"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image3}
                            />
                        </div>
                        <div className={styles.Advantage_Description3}>
                            <div className={styles.language_heading}>100+ Languages</div>
                            <div className={styles.language_paragraph}>
                                Approve, edit and enhance your<br />
                                website translation within your<br />
                                team</div>
                        </div>
                    </div>
                    {/*                                                                                     */}
                    <div className={styles.Advantage4}>
                        <div className={styles.Advantage_image4}>
                            <Image
                                unoptimized
                                src="/assets/Home/Advantage_Image4.png"
                                alt="About"
                                width={50}
                                height={50}
                                className={styles.Advantage_Image4}
                            />
                        </div>
                        <div className={styles.Advantage_Description4}>
                            <div className={styles.Multi_heading}>Multi Language</div>
                            <div className={styles.Multi_paragraph}>
                                Approve, edit and enhance your<br />
                                website translation within your<br />
                                team</div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                    <ContactForm />
                </Col>
            </Row>
        </motion.div>

    )
}

export default AdvantageSection;