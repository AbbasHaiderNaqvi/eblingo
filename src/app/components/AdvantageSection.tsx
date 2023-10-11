import Image from "next/image";
import styles from '../styles/AdvantageSection.module.css';
import { Button,Progress } from "antd";
// import ContactForm from "./ContactForm";
import Tab from "../Animations/Tab";
import Testimonials from '../Animations/Testimonials';
import AnimatedProgressCircle1 from "../Animations/AnimationProgressCircle1";
import AnimatedProgressCircle2 from "../Animations/AnimationProgressCircle2";
import AnimatedProgressCircle3 from "../Animations/AnimationProgressCircle3";


const AdvantageSection = () => {
    return (
        <div className={styles.content}>

            <Image
                src="/assets/About-4.png"
                alt="About"
                width={2000}
                height={500}
                className={styles.about_img4}
            />
            <div className={styles.contact_heading}>
                Mission is to Protect<br />your Business & much more
            </div>
            <Button className={styles.Readmore_button}>Read More</Button>
            {/*                                                                                                           */}
            <Image
                src="/assets/About-5.png"
                alt="About"
                width={40}
                height={40}
                className={styles.about_img5}
            />
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={30}
                height={30}
                className={styles.aboutCircle_img1}
            />
            <div className={styles.FreeSupport_heading}>Free Support</div>
            <div className={styles.FreeSupport_paragraph}>Approve, edit and enhance your<br />website translation within your<br /> team</div>
            {/*                                                                                       */}
            <Image
                src="/assets/About-6.png"
                alt="About"
                width={40}
                height={40}
                className={styles.about_img6}
            />
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={30}
                height={30}
                className={styles.aboutCircle_img2}
            />
            <div className={styles.language_heading}>100+ Languages</div>
            <div className={styles.language_paragraph}>
                Approve, edit and enhance your<br />website translation within your<br /> team
            </div>
            {/*                                                                                               */}
            <Image
                src="/assets/About-7.png"
                alt="About"
                width={40}
                height={40}
                className={styles.about_img7}
            />
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={30}
                height={30}
                className={styles.aboutCircle_img3}
            />
            <div className={styles.tech_translation_heading}>Technical Translation</div>
            <div className={styles.translation_paragraph}>
                Approve, edit and enhance your<br />website translation within your<br /> team
            </div>
            {/*                                                                                     */}
            <Image
                src="/assets/About-8.png"
                alt="About"
                width={40}
                height={40}
                className={styles.about_img8}
            />
            <Image
                src="/assets/AboutCircle.png"
                alt="About"
                width={30}
                height={30}
                className={styles.aboutCircle_img4}
            />
            <div className={styles.Multi_heading}>Multi Language</div>
            <div className={styles.Multi_paragraph}>
                Approve, edit and enhance your<br />website translation within your<br /> team
            </div>
            <div>
                <h5 className={styles.Innovations_heading}>WHAT WE DO</h5>
                <h4 className={styles.Innovations_heading2}>Embracing Your Innovations<br />Together</h4>
                <p className={styles.Innovations_paragraph}>The translation and subtitling process can be overwhelming with its complex<br />
                    procedures, ongoing interaction with linguists, and unforeseen expenses. Our<br />
                    company has devised simplified procedures that cater to the requirements of<br />
                    businesses in search of expert language services. We aim to offer fast, efficient, and<br />
                    budget-friendly solutions that align with our clients’ spending limits. The translation<br />
                    and subtitling process can be overwhelming with its complex procedures, ongoing<br />
                    interaction with linguists, and unforeseen expenses. Our company has devised<br />
                    simplified procedures that cater to the requirements of businesses in search of expert<br />
                    language services. We aim to offer fast, efficient, and budget-friendly solutions that<br />
                    align with our clients’ spending limits.</p>
                <br />
                <Image
                    src="/assets/Innovations_img.png"
                    alt="Service"
                    width={420}
                    height={310}
                    className={styles.Innovations_img}
                />
            </div>
            <div>
                <h5 className={styles.offer_heading}>WHAT WE OFFER</h5>
                <h4 className={styles.offer_heading2}>Offers</h4>

                <Image
                    src="/assets/Offering_img.png"
                    alt="Service"
                    width={400}
                    height={500}
                    className={styles.Offer_img}
                />
                <Tab />
                <Image
                    src="/assets/Rectangle_subscribe.png"
                    alt="Service"
                    width={990}
                    height={75}
                    className={styles.rectangle_subscribe}
                />
                <div className={styles.rectangle_subscribe_text}>Professional Translation Enhanced by Human</div>
                <Button className={styles.rectangle_readmore_button}>Read More</Button>
            </div>
            <div>
                <h5 className={styles.testimonials_heading}>Clients Testimonials</h5>
                <h4 className={styles.testimonials_heading2}>what clients has to say about us?</h4>
            <div>
                <h5 className={styles.project_satisfaction_heading}>PROJECT SATISFACTION</h5>
                <h4 className={styles.project_satisfaction_heading2}>Our Projects</h4>
                <div>
                    <AnimatedProgressCircle1 />
                    <p className={styles.AnimatedProgressCircle1_paragraph1}>Average increase in sales<br />
                                for our clients</p>
                    </div>
                <div>
                    <AnimatedProgressCircle2 />
                    <p className={styles.AnimatedProgressCircle2_paragraph2}>Google and Facebook-<br />certified team</p>
                </div>
                <div>
                    <AnimatedProgressCircle3 />
                    <p className={styles.AnimatedProgressCircle3_paragraph3}>Results improved compared <br/>to previous agencies</p>
                    </div>
                    <div className={styles.rectangle_number_Animation}>
                    <Image
                    src="/assets/rectangle_number.png"
                    alt="Project Satisfaction"
                    width={280}
                    height={180}
                    className={styles.rectangle_number}
                />
                <div className={styles.rectangle_contents}>
                <div className={styles.rectangle_content}>Leads generated so far...</div>
                <div className={styles.rectangle_button}>
                    <Button>Contact us</Button>
                </div>
                </div>
                </div>

                 
                
            </div>


        </div>
        </div>

    )
}

export default AdvantageSection;