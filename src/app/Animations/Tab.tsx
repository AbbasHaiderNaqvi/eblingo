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
    Our transparent pricing model offers significantly<br/>
    lower rates than traditional agencies. This allows<br/>
    you to expand your business into new markets<br/> 
    while remaining competitive. Our transparent<br/>
    pricing model offers significantly lower rates than<br/>
     traditional agencies. This allows you to expand<br/>
      your business into new markets while remaining<br/>
       competitive.</div>,
  },
  {
    key: '2',
    label: <div className={styles.Tab_text}>Faster <br />Turnarounds</div>,
    children: <div className={styles.Tab_paragraph}>
    Our transparent pricing model offers significantly<br/>
    lower rates than traditional agencies. This allows<br/>
    you to expand your business into new markets<br/> 
    while remaining competitive. Our transparent<br/>
    pricing model offers significantly lower rates than<br/>
     traditional agencies. This allows you to expand<br/>
      your business into new markets while remaining<br/>
       competitive.</div>,
  },
  {
    key: '3',
    label:<div className={styles.Tab_text}>Quality<br />Assurance</div>,
    children:<div className={styles.Tab_paragraph}>
    Our transparent pricing model offers significantly<br/>
    lower rates than traditional agencies. This allows<br/>
    you to expand your business into new markets<br/> 
    while remaining competitive. Our transparent<br/>
    pricing model offers significantly lower rates than<br/>
     traditional agencies. This allows you to expand<br/>
      your business into new markets while remaining<br/>
       competitive.</div>,
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