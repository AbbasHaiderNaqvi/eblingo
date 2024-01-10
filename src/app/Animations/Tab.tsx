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
    Our transparent pricing model offers significantly lower rates than traditional agencies. 
    This allows you to expand your business into new markets with quality content while remaining 
    competitive. Our focus is to provide quality language services to a wide range of businesses 
    for content localization across countries and culture for efficient segmentation.</div>,
  },
  {
    key: '2',
    label: <div className={styles.Tab_text}>Faster <br />Turnarounds</div>,
    children: <div className={styles.Tab_paragraph}>
    Our certified linguists and project management teams operate across all major time zones, 
    enabling us to handle your content requirements regardless of the volume efficiently. 
    Eblingo currently serves a global clientele and by having its Project Management offices 
    in three continents, we are better able to address queries and requests.</div>,
  },
  {
    key: '3',
    label:<div className={styles.Tab_text}>Quality <br/> Assurance</div>,
    children:<div className={styles.Tab_paragraph}>
    Our certified quality control teams of linguists are committed to delivering 
    superior quality work, ensuring accurate deliverables according to the client&apos;s 
    brief every time. Our teams work on a two-layered approach in which each assignment 
    is reviewed by the Project Management team to ensure all content quality and deadlines 
    are met.
</div>,
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