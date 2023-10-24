import Image from "next/image";
import styles from '../styles/AdvantageSection.module.css';
import { Button, Progress, Row, Col } from "antd";
import ContactForm from "./ContactForm";


const AdvantageSection = () => {
    return (
        <div className={styles.content}>
            <Row>
                <Col>
                    <div className={styles.Advantage1}>
                        <div className={styles.Advantage_image1}>
                            <Image
                                src="/assets/Advantage_Image1.png"
                                alt="Advantage Section"
                                width={47}
                                height={50}
                                className={styles.Advantage_Image1}
                            />
                        </div>
                        <div className={styles.Advantage_Description1}>
                            <div className={styles.FreeSupport_heading}>Free Support</div>
                            <div className={styles.FreeSupport_paragraph}>Approve, edit and enhance your<br />website translation within your<br /> team</div>
                        </div>
                    </div>
                    <div className={styles.Advantage2}>
                        <div className={styles.Advantage_image2}>
                            <Image
                                src="/assets/Advantage_Image2.png"
                                alt="About"
                                width={47}
                                height={50}
                                className={styles.Advantage_Image2}
                            />
                        </div>
                        <div className={styles.Advantage_Description2}>
                            <div className={styles.tech_translation_heading}>Technical Translation</div>
                            <div className={styles.translation_paragraph}>
                                Approve, edit and enhance your<br />website translation within your<br /> team
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.Advantage3}>
                        <div className={styles.Advantage_image3}>
                            <Image
                                src="/assets/Advantage_Image3.png"
                                alt="About"
                                width={47}
                                height={50}
                                className={styles.Advantage_Image3}
                            />
                            </div>
                            <div className={styles.Advantage_Description3}>
                                <div className={styles.language_heading}>100+ Languages</div>
                                <div className={styles.language_paragraph}>
                                    Approve, edit and enhance your<br />website translation within your<br /> team
                                </div>
                                </div>
                                </div>
                                {/*                                                                                     */}
                                <div className={styles.Advantage4}>
                        <div className={styles.Advantage_image4}>
                                <Image
                                    src="/assets/Advantage_Image4.png"
                                    alt="About"
                                    width={47}
                                    height={50}
                                    className={styles.Advantage_Image4}
                                />
                                </div>
                                <div className={styles.Advantage_Description4}>
                                <div className={styles.Multi_heading}>Multi Language</div>
                                <div className={styles.Multi_paragraph}>
                                    Approve, edit and enhance your<br />website translation within your<br /> team
                                </div>
                                </div>
                                </div>
                            </Col>
                            <Col>
                            <ContactForm />
                            </Col>
                        </Row>
                    </div>

                    )
}

                    export default AdvantageSection;