"use client"
import { Button, Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';



function Navbar(): JSX.Element {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href="/media-partnership">
          Media Partnership
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href="/publication-partnership">
          Publication Partnership
        </Link>
      ),
    },
  ];
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
            <Link href="/media-localization" legacyBehavior>
              <a>Media localization</a>
            </Link>
          </li>
          <li>
            <Link href="/document-translation" legacyBehavior>
              <a>Document Translation</a>
            </Link>
          </li>
          <li>
            <Link href="/partnership" legacyBehavior className={styles.partnership}>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Partnership
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
