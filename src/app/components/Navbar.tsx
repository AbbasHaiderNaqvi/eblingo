'use client';
import { Drawer, Dropdown, Menu, Space } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
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
      <div className={styles.right}>
        <div className={styles.menuIcon} onClick={showDrawer}>
          <MenuOutlined />
        </div>
      </div>
      <Drawer
        title=""
        placement="right"
        closable={false}
        onClose={onCloseDrawer}
        open={drawerVisible}
        className={styles.drawer}
      >
        <div className={styles.drawerLogo}>
          <Image
            src='/assets/Home/logo.png'
            alt='Logo'
            width={120}
            height={120}
          />
        </div>
        <Menu mode="vertical" theme="light" className={styles.drawerMenu}>
          <Menu.Item key="home">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="media-localization">
            <Link href="/media-localization">Media Localization</Link>
          </Menu.Item>
          <Menu.Item key="document-translation">
            <Link href="/document-translation">Document Translation</Link>
          </Menu.Item>
          <Menu.Item key="media-partnership">
          <Link href="/media-partnership">Media Partnership</Link>
          </Menu.Item>
          <Menu.Item key="publication-partnership">
          <Link href="/publication-partnership">Publication Partnership</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="/contact">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
