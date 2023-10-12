"use client";
import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { Button } from 'antd';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sourceLanguage: '',
    targetLanguage: '',
    uploadedFile: null,
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.contact_container}>

      <form className={styles.contact_form} 
      onSubmit={handleSubmit}>
        <div>
        <h1 className={styles.contactus_heading}>Contact Us</h1>
          <input className={styles.input_fields}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="       Your Name"
            required
          />
        </div>
        <div>
          <input className={styles.input_fields}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="       Your Email"
            required
          />
        </div>
        <div>
          <input className={styles.input_fields}
            type="text"
            name="sourceLanguage"
            value={formData.sourceLanguage}
            onChange={handleChange}
            placeholder="       Source Language"
            required
          />
        </div>
        <div>
          <input className={styles.input_fields}
            type="text"
            name="targetLanguage"
            value={formData.targetLanguage}
            onChange={handleChange}
            placeholder="       Target Language"
            required
          />
        </div>
        <div>
          <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          className={styles.input_fields} />
        </div>
        <div>
            
        <Button 
            className={styles.contact_button}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
