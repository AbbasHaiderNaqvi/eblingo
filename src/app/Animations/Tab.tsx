"use client";
import React from 'react';
import styles from '../styles/Offer.module.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div className={styles.Tab_text}>Competitive<br />Pricing</div>,
    children: <div className={styles.Tab_paragraph}>
    Our transparent pricing model offers significantly lower 
    rates than traditional agencies. This allows you to expand
    your business into new markets while remaining competitive.</div>,
  },
  {
    key: '2',
    label: <div className={styles.Tab_text}>Faster <br />Turnarounds</div>,
    children: <div className={styles.Tab_paragraph}>
    Our certified linguists and project management teams operate 
    across all major time zones, enabling us to handle your content 
    requirements regardless of the volume efficiently.</div>,
  },
  {
    key: '3',
    label:<div className={styles.Tab_text}>Quality <br/> Assurance</div>,
    children:<div className={styles.Tab_paragraph}>
    Our certified quality control teams of linguists are 
    committed to delivering superior quality work, ensuring
    accurate deliverables every time.</div>,
  },
];

const Tab: React.FC = () =>
  <Tabs defaultActiveKey="1"
    items={items}
    type="card"
    onChange={onChange}
    className={styles.AnimatedTab}
  />;

export default Tab; 