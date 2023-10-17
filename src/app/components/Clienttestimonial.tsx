import styles from '../styles/testimonial.module.css';
import AnimatedProgressCircle1 from "../Animations/AnimationProgressCircle1";
import AnimatedProgressCircle2 from "../Animations/AnimationProgressCircle2";
import AnimatedProgressCircle3 from "../Animations/AnimationProgressCircle3";
import { Button, Row, Col } from 'antd';
import AnimatedNumber from '../Animations/AnimatedNumber';
import Image from 'next/image';
import React from 'react';

const Clienttestimonial: React.FC = () => {
    return (
        <div>

            <h5 className={styles.testimonials_heading}>Clients Testimonials</h5>
            <h4 className={styles.testimonials_heading2}>what clients has to say about us?</h4>
            <Image
                src="/assets/testimonial_img.png"
                alt="Testimonial"
                width={800}
                height={350}
                className={styles.testimonial_img}
            />
            <h5 className={styles.project_satisfaction_heading}>PROJECT SATISFACTION</h5>
            <h4 className={styles.project_satisfaction_heading2}>Our Projects</h4>
            <Row>
                <Col span={6}>
                    <div>
                        <AnimatedProgressCircle1 />
                        <p className={styles.AnimatedProgressCircle1_paragraph1}>Average increase in sales<br />
                            for our clients</p>
                    </div>
                </Col>
                <Col span={5}>
                    <div>
                        <AnimatedProgressCircle2 />
                        <p className={styles.AnimatedProgressCircle2_paragraph2}>Google and Facebook-<br />certified team</p>
                    </div>
                </Col>
                <Col span={6}>
                    <div>
                        <AnimatedProgressCircle3 />
                        <p className={styles.AnimatedProgressCircle3_paragraph3}>Results improved compared <br />to previous agencies</p>
                    </div>
                </Col>
                <Col span={5}>
                    <div className={styles.rectangle_number_Animation}>
                        <div className={styles.rectangle_contents}>
                            <div className={styles.rectangle_number}></div>
                            <div className={styles.AnimatedNumber}><AnimatedNumber /></div>
                            <div className={styles.rectangle_content}>Leads generated so far...</div>
                            <Button className={styles.rectangle_button}>Contact us</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Clienttestimonial;