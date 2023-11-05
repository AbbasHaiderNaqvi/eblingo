import { Button } from 'antd';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import React from 'react';
  import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Image 
        src='/assets/Home/logo.png'
        alt='Logo'
        width={150}
        height={150}
        className={styles.logo}
        />
      </div>
      <div className={styles.center}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" legacyBehavior>
             <a>Home</a>
              </Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior>
              <a>Media Services</a>
              </Link>
          </li>
          <li>
            <Link href="/transcription" legacyBehavior>
              <a>Translation</a>
              </Link>
          </li>
          <li>
            <Link href="/partnerships" legacyBehavior>
            <a>Partnership</a>
              </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact Us</a>
              </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Button className={styles.button}>Get Estimate</Button>
      </div>
    </nav>
  );
};

export default Navbar;
