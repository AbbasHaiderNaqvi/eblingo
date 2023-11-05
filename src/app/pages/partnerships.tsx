import React from 'react'
import styles from '../styles/Partnerships.module.css';
import Image from 'next/image';

function Partnerships() {
  return (
    <div>

      <div className={styles.HeroSection}>
        <h1 className={styles.HeroSection_Heading}>Media Partnerships</h1>
        <h5 className={styles.Partnerships_Sub_heading}>Home / Services / Translation</h5>
      </div>
      <h2 className={styles.first_master_heading}>Master Templates <span className={styles.heading_span}>and</span> Subtitling</h2>
      <Image
        src="/assets/Partnerships/Partnerships-icon.png"
        alt="Transcription"
        width={120}
        height={12}
        className={styles.Partnerships_Image}
      />
      <Image
        src="/assets/Partnerships/arrow_right.png"
        alt="Arrow"
        width={225}
        height={290}
        className={styles.arrow_right}
      />
      <Image
        src="/assets/Partnerships/Partnerships_Blog1_Image.png"
        alt="Blog"
        width={746}
        height={526}
        className={styles.Partnerships_Blog_Image}
      />
      <h3 className={styles.heading1}>Streamlining the Multilingual Subtitling Process</h3>
      <p className={styles.blog_Paragraph1}>
        At Eblingo, we believe in the power of language and the synergy of<br />
        partnerships. We are proud to work hand-in-hand with numerous<br />
        esteemed language service providers, video streaming<br />
        platforms, and innovative video content creators.<br />
        Together, we are revolutionizing the multilingual<br />
        subtitling process.</p>
      <div className={styles.blog_content}>
        <Image
          src="/assets/Partnerships/arrow_left.png"
          alt="My SVG"
          width={225}
          height={290}
          className={styles.arrow_left}
        />
        <Image
          src="/assets/Partnerships/Partnerships_Blog2_Image.png"
          alt="My SVG"
          width={746}
          height={526}
          className={styles.Partnerships_Blog2_Image}
        />
        <h3 className={styles.heading2}>Master Templates: The Foundation of Multilingual Subtitling</h3>
        <p className={styles.blog_Paragraph2}>Subtitles are a crucial element in the global accessibility of content. This importance<br />
          is magnified when dealing with multiple languages, a challenge we meet head-on<br />
          through our expertise in creating Master Templates.</p>
        <p className={styles.blog_Paragraph2_span}>
          Master Templates form the cornerstone of our multilingual subtitling process. By<br />
          establishing a foundation that standardizes the process, we've eliminated<br />
          duplicate work, reduced costs, improved delivery timelines, and<br />
          enhanced the quality control of a large volume of subtitle files.</p>
      </div>
      <div className={styles.blog_content_last}>
        <Image
          src="/assets/Partnerships/arrow_right.png"
          alt="My SVG"
          width={225}
          height={290}
          className={styles.arrow_right}
        />
        <Image
          src="/assets/Partnerships/Partnerships_Blog3_Image.png"
          alt="My SVG"
          width={746}
          height={526}
          className={styles.Partnerships_Blog3_Image}
        />
        <h3 className={styles.heading3}>Our In-House Expertise</h3>
        <p className={styles.blog_Paragraph3}>
          At the heart of our operation are our in-house teams. Our professionals are<br /> 
          thoroughly trained in various streaming platforms' best practices and<br />
          style guides. They bring a deep understanding of timing conventions, shot<br />
          changes, reading speed considerations, and the adherence to syntactic<br />
          rules and structures. This level of expertise ensures that your subtitled<br />
          content will be linguistically accurate, enjoyable, and accessible to global<br />
          audiences. Through these partnerships and our proven processes, we've built a<br /> 
          strong reputation as a leader in multilingual subtitling. Let Eblingo be your trusted<br />
          partner in ensuring that your content transcends linguistic barriers,<br />
          reaches wider audiences, and truly connects with people across the globe.</p>

      </div>
    </div>
  )
}

export default Partnerships