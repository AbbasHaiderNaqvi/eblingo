"use client";
import { FC, useState, useEffect } from 'react';
import { Button, Col, Row, Input, Form, Upload, Select, message, Spin } from 'antd';
import styles from '../styles/Contact.module.css';
import { useRouter } from 'next/navigation';
import api from '../axiosInterceptor/axiosInterceptor';

interface Language {
  value: string;
  label: string;
  type: string;
}

const Contact: FC = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const [sourceLanguages, setSourceLanguages] = useState<Language[]>([]);
  const [targetLanguages, setTargetLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const response = api.get('/getlanguages').then((response) => {
          setLoading(false);  
          const languages: Language[] = response.data;

          const sourceLangs = languages.filter(lang => lang.type === 'source');
          const targetLangs = languages.filter(lang => lang.type === 'target');

          sourceLangs.sort((a, b) => a.label.localeCompare(b.label));
          targetLangs.sort((a, b) => a.label.localeCompare(b.label));
          
          setSourceLanguages(sourceLangs);
          setTargetLanguages(targetLangs);
        });
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchData();
  }, []);

  const onFinish = async (values: any) => {
    try {
      const response = await api.post('/contact', values);

      console.log('Server Response:', response.data);
      message.success('Thank you! We will contact you soon');
      router.push('/');

    } catch (error) {
      console.error('Error submitting form:', error);

    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Spin spinning={Loading} >
    <div>
      <div className={styles.HeroSection}>
        <h1 className={styles.HeroSection_Heading}>Contact Us</h1>
      </div>
      <div className={styles.contact_heading_main}>
        Contact Us
      </div>
      <div className={styles.contact_container}>
            <Form
              name="contactForm"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Name"
                    name="name"
                    className={styles.Row1}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your name',
                        pattern: /^[A-Za-z ]+$/,
                      },
                    ]}
                  >
                    <Input placeholder="Your Name" autoComplete='off' className={styles.Input1} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Email Address"
                    name="email"
                    className={styles.emailRow}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your email',
                        type: 'email',
                      },
                    ]}
                  >
                    <Input placeholder="Your Email Address" autoComplete='off' className={styles.Input2} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Source Language"
                    name="sourceLanguage"
                    className={styles.Row2}
                    rules={[
                      {
                        required: true,
                        message: 'Please select source language',
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select source language"
                      allowClear
                      showSearch
                      options={sourceLanguages.map(lang => ({ value: lang.value, label: lang.label }))}
                      className={styles.Select}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Target Language"
                    name="targetLanguage"
                    className={styles.Row2}
                    rules={[
                      {
                        required: true,
                        message: 'Please select target language',
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select target language"
                      allowClear
                      showSearch
                      options={targetLanguages.map(lang => ({ value: lang.value, label: lang.label }))}
                      className={styles.Select}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Services"
                    name="services"
                    className={styles.Row3}
                    rules={[
                      {
                        required: true,
                        message: 'Please select correct service',
                        pattern: /^[A-Za-z-]+$/,
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Services"
                      options={[
                        { value: 'captioning', label: 'Captioning' }, // Adjusted service values
                        { value: 'subtitling', label: 'Subtitling' },
                        { value: 'transcription', label: 'Translation' },
                        { value: 'interpretation', label: 'Interpretation' },
                        { value: 'document-translation', label: 'Document Translation' },
                      ]}
                      className={styles.Select}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Upload Link"
                    name="uploadlink"
                    className={styles.Row3}
                    rules={[{ message: 'Please Upload the Link' }]}>
                    <Input placeholder="paste link" autoComplete='off' className={styles.Link} />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center">
                <Col>
                  <Form.Item wrapperCol={{ span: 24 }}>
                    <Button className={styles.Submit_Button} htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
    </div>
    </Spin>
  );
};

export default Contact;