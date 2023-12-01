'use client';
import { Drawer, Dropdown, Menu, Space } from 'antd';
import { CloseOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };
  const items = [
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
    }
  ];
  const customCloseIcon = (
    <CloseOutlined style={{ fontSize: 24, color: '#000',marginRight:'300px' }} />
    // Customize the icon as needed with styles
  );
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
                    Partnerships
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
      <div className={styles.right}>
        {/* Show the menu icon only when screen width is between 350px and 500px */}
        <div className={styles.menuIcon} onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: '150%'}} />
        </div>
      </div>
      {/* Use Ant Design Drawer component for the responsive menu */}
      <Drawer
        title=""
        placement="right"
        onClose={onCloseDrawer}
        closeIcon={customCloseIcon}
        open={drawerVisible}
        className={styles.drawer}
      >
        {/* Logo in the drawer header */}
        <div className={styles.drawerHeader}>
          <Image
            src='/assets/Home/logo.png'
            alt="Logo"
            width={200}
            height={200}
            className={styles.drawerLogo}
          />
        </div>
        {/* List of pages in the drawer content */}
        <div className={styles.drawerMain}>
          <ul className={styles.unorderedList}>
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
                <Link href="/media-partnership" legacyBehavior>
                  <a>Media Partnership</a>
                </Link>
              </li>
              <li>
                <Link href="/publication-partnership" legacyBehavior>
                  <a>Publication Partnership</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
