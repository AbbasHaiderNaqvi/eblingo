import Image from "next/image";
import styles from '../styles/AdvantageSection.module.css';
import { Button,Progress,Row,Col } from "antd";
import ContactForm from "./ContactForm";


const AdvantageSection = () => {
    return (
        <div className={styles.content}>
            <div className={styles.contact_rectangle}></div>
        <Row justify="start">
            <Col span={20}>
            <div className={styles.contact_heading}>
                Mission is to Protect<br />your Business & much more
            </div>
            <Button className={styles.Readmore_button}>Read More</Button>
            </Col>
            <Col>
            abbas
            </Col>
            </Row>
            <Row>
                <Col span={3}>
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={40}
                height={40}
                className={styles.aboutCircle_img1}
            />
            <Image
                src="/assets/About-5.png"
                alt="About"
                width={50}
                height={50}
                className={styles.about_img5}
            />
            </Col>
            <Col>
            <div className={styles.FreeSupport_heading}>Free Support</div>
            <div className={styles.FreeSupport_paragraph}>Approve, edit and enhance your<br />website translation within your<br /> team</div>
            </Col>
            {/*                                                                                       */}
            <Col span={3}>
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={40}
                height={40}
                className={styles.aboutCircle_img2}
            />
            <Image
                src="/assets/About-6.png"
                alt="About"
                width={50}
                height={50}
                className={styles.about_img6}
            />
            </Col>
            <Col>
            <div className={styles.language_heading}>100+ Languages</div>
            <div className={styles.language_paragraph}>
                Approve, edit and enhance your<br />website translation within your<br /> team
            </div>
            </Col>
            </Row>
            {/*                                                                                               */}
            <Row>
            <Col span={3}>
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={40}
                height={40}
                className={styles.aboutCircle_img3}
            />
            <Image
                src="/assets/About-7.png"
                alt="About"
                width={50}
                height={50}
                className={styles.about_img7}
            />
            </Col>
            <Col>
            <div className={styles.tech_translation_heading}>Technical Translation</div>
            <div className={styles.translation_paragraph}>
                Approve, edit and enhance your<br />website translation within your<br /> team
            </div>
            </Col>
            {/*                                                                                     */}
            <Col>
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={40}
                height={40}
                className={styles.aboutCircle_img4}
            />
            <Image
                src="/assets/About-8.png"
                alt="About"
                width={50}
                height={50}
                className={styles.about_img8}
            />
            </Col>
            <Col>
            <div className={styles.Multi_heading}>Multi Language</div>
            <div className={styles.Multi_paragraph}>
                Approve, edit and enhance your<br />website translation within your<br /> team
            </div>
            </Col>
            </Row>
        </div>

    )
}

export default AdvantageSection;