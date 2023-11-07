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
            <div className={styles.Testimonial_Section}>
            <h5 className={styles.testimonials_heading}>Clients Testimonials</h5>
            <h4 className={styles.testimonials_heading2}>what clients has to say about us?</h4>
            <Image
                src="/assets/Home/testimonial_img.png"
                alt="Testimonial"
                width={1216}
                height={426}
                className={styles.testimonial_img}
            />
            </div>
            <div className={styles.project_satisfaction}>
            <h5 className={styles.project_satisfaction_heading}>PROJECT SATISFACTION</h5>
            <h4 className={styles.project_satisfaction_heading2}>Our Projects</h4>
            <Row justify={'center'}>
                <Col>
                        <AnimatedProgressCircle1 />
                </Col>
                <Col>
                        <AnimatedProgressCircle2 />
                </Col>
                <Col>
                        <AnimatedProgressCircle3 />
                </Col>
                <Col>
                    <div className={styles.rectangle_number_Animation}>
                            <div className={styles.rectangle_number}>
                            <div className={styles.AnimatedNumber}><AnimatedNumber /></div>
                            <div className={styles.rectangle_content}>Leads generated so far...</div>
                            <Button className={styles.rectangle_button}>Contact us</Button>
                            </div>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Clienttestimonial;