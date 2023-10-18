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
                    Biggest language Translation firm
                </div>
                <Button className={styles.quote_button}>
                    Get a quote
                </Button>
                <br />
                <br />
                <br />
                <Image
                    src="/assets/services1.png"
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
                        <li><div className={styles.list}>Subtitling</div></li>
                        <li><div className={styles.list}>Transcription </div></li>
                        <li><div className={styles.list}>Closed Caption</div></li>
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
                        <li><div className={styles.list}>Financial Translation</div></li>
                        <li><div className={styles.list}>Marketing Translation</div></li>
                        <li><div className={styles.list}>Technical Translation</div></li>
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
                        <li><div className={styles.list}>The Multilingual Subtitling Process</div></li>
                        <li><div className={styles.list}>Our In-House Expertise</div></li>
                        <li><div className={styles.list}>Reduce Your workload</div></li>
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
                        <li><div className={styles.list}>Book Translations</div></li>
                        <li><div className={styles.list}>Academic and research Generals</div> </li>
                        <li><div className={styles.list}>Magzine  and media publication</div> </li>
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
                <br />
                <br />
                <br />
                
            </div>
        </div>

    )
}

export default Service;
