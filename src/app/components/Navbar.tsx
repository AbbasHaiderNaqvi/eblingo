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
        src="/assets/logo.png" 
        alt="Logo"
        width={150} 
        height={150} 
        className={styles.logo} 
      />
      </div>
      <div className={styles.center}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/media-services">Media Services</Link>
          </li>
          <li>
            <Link href="/doc-translation">Doc.Translation</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/partnership">Partnership</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Button className={styles.button}><b>Get Estimate</b></Button>
      </div>
    </nav>
  );
};

export default Navbar;
