'use client';
import styles from '../styles/testimonial.module.css';
import { useRouter } from 'next/navigation';
import AnimatedProgressCircle1 from "../Animations/AnimationProgressCircle1";
import AnimatedProgressCircle2 from "../Animations/AnimationProgressCircle2";
import AnimatedProgressCircle3 from "../Animations/AnimationProgressCircle3";
import { Button, Row, Col } from 'antd';
import AnimatedNumber from '../Animations/AnimatedNumber';
import Image from 'next/image';
import React from 'react';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import Contact from '../contact/page';

const Clienttestimonial: React.FC = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log('Button clicked!');
    
        router.push('/contact');
      };
    return (
         <motion.div
        initial="hidden"
        animate="visible"
        variants={MediumAnimationVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <Row justify={'center'}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
            </Col>
        </Row>
            <div className={styles.project_satisfaction}>
            <h5 className={styles.project_satisfaction_heading}>PROJECT SATISFACTION</h5>
            <h4 className={styles.project_satisfaction_heading2}>Our Projects</h4>
            <Row justify={'center'}>
                <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                        <AnimatedProgressCircle1 />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                        <AnimatedProgressCircle2 />
                </Col> 
                <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                        <AnimatedProgressCircle3 />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={9}>
                    <div className={styles.rectangle_number_Animation}>
                            <div className={styles.rectangle_number}>
                            <div className={styles.AnimatedNumber}><AnimatedNumber /></div>
                            <div className={styles.rectangle_content}>Leads generated so far...</div>
                            <Button className={styles.rectangle_button} onClick={handleClick}>Contact us</Button>
                            </div>
                    </div>
                </Col>
            </Row>
            </div>
        </motion.div>
    );
};

export default Clienttestimonial;