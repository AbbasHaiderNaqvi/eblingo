import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import styles from '../styles/AdvantageSection.module.css';



const Testimonials: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
      return(
  <Carousel afterChange={onChange} className={styles.carousel_testimonial}>
    <div>
    <Image
                    src="/assets/testimonial_img.png"
                    alt="Service"
                    className={styles.testimonial_img}
                />    
    </div>

    <div>
    <Image
                    src="/assets/testimonial_img.png"
                    alt="Service"
                    className={styles.testimonial_img}
                />
    </div>
    <div>
    <Image
                    src="/assets/testimonial_img.png"
                    alt="Service"
                    className={styles.testimonial_img}
                />
    </div>
    <div>
    <Image
                    src="/assets/testimonial_img.png"
                    alt="Service"
                    className={styles.testimonial_img}
                />
    </div>
  </Carousel>
)};

export default Testimonials;