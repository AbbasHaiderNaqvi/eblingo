import react from 'react';
import { Button } from 'antd';
import Image from 'next/image';
import styles from '../styles/Service.module.css';

const Service = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h6 className={styles.allservice_heading}>
                    OUR SERVICES
                </h6>
                <div className={styles.heading_translation_firm}>
                    <i>Biggest language Translation <br />firm</i>
                </div>
                <Button className={styles.quote_button}>
                    Get a quote
                </Button>
                <br />
                <br />
                <br />
                <Image
                    src="/assets/services1.jpeg"
                    alt="Service"
                    width={420}
                    height={310}
                    className={styles.service_box1}
                />
                <h2 className={styles.service_heading}>
                    Audio Visual Solution
                </h2>
                <div className={styles.unorder_list}>
                    <ul className={styles.listing} >
                        <li className={styles.list}>Subtitling</li>
                        <li className={styles.list}>Transcription</li>
                        <li className={styles.list}>Closed Caption</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Image
                    src="/assets/services2.png"
                    alt="Service"
                    width={420}
                    height={310}
                    className={styles.service_box1}
                />
                <h2 className={styles.service_heading}>
                    Document Solutions
                </h2>
                <div className={styles.unorder_list}>
                    <ul className={styles.listing} >
                        <li className={styles.list}>Financial Translation</li>
                        <li className={styles.list}>Marketing Translation</li>
                        <li className={styles.list}>Technical Translation</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Image
                    src="/assets/services3.png"
                    alt="Service"
                    width={420}
                    height={310}
                    className={styles.service_box1}
                />
                <h2 className={styles.service_heading}>
                Media Translation
                </h2>
                <div className={styles.unorder_list}>
                    <ul className={styles.listing} >
                        <li className={styles.list}>The Multilingual Subtitling Process</li>
                        <li className={styles.list}>Our In-House Expertise</li>
                        <li className={styles.list}>Reduce Your workload</li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Image
                    src="/assets/services4.png"
                    alt="Service"
                    width={420}
                    height={310}
                    className={styles.service_box1}
                />
                <h2 className={styles.service_heading}>
                     Publishing Partnership
                </h2>
                <div className={styles.unorder_list}>
                    <ul className={styles.listing} >
                        <li className={styles.list}>Book Translations</li>
                        <li className={styles.list}>Academic and research Generals </li>
                        <li className={styles.list}>Magzine  and media publication </li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Image
                    src="/assets/brand.png"
                    alt="Service"
                    width={1000}
                    height={100}
                />
                
                

            </div>
        </div>

    )
}

export default Service;
