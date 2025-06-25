'use client';

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { FaPaperPlane } from 'react-icons/fa';
import Player from 'lottie-react';
import whiteLoader from '@/assets/animation/white-loader.json';

interface ContactFormProps {
  services?: string[];
  title?: string;
  className?: string;
}

const initialGreet = 'Ready to connect?';
const thankYouGreet = 'Thank You.';

const ContactForm: React.FC<ContactFormProps> = ({ 
  services = [
    'Business registration',
    'Trademark',
    'Registration',
    'Goods & Service Tax',
    'Compliance',
    'Services',
    'Income Tax',
    'Other'
  ],
  title = "Get in touch",
  className = ""
}) => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [greetText, setGreetText] = useState(initialGreet);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (greetText === thankYouGreet || isSubmitting) return;
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      setGreetText(thankYouGreet);
      setSubmitted(true);
      setForm({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
      setTimeout(() => {
        setGreetText(initialGreet);
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.formCard} ${className}`}>
      <h2 className={styles.formTitle}>{title}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Thank you overlay */}
        {submitted && (
          <div className={styles.thankYouOverlay}>
            {greetText}
          </div>
        )}
        <label className={styles.label}>Full Name
          <input
            className={styles.input}
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </label>
        <label className={styles.label}>Phone Number
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </label>
        <label className={styles.label}>Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <label className={styles.label}>Choose Your Required Service
          <select
            className={styles.input}
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map((service, idx) => (
              <option key={service + '-' + idx} value={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className={styles.label}>Message
          <textarea
            className={styles.input}
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={2}
            placeholder="Your message"
          />
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1.5rem' }}>
          <button
            className={styles.sendBtn}
            type="submit"
            disabled={greetText === thankYouGreet || isSubmitting}
          >
            <span>{isSubmitting ? 'SENDING...' : 'SEND'}</span>
            <span className={styles.sendCircle}>
              {isSubmitting ? (
                <Player
                  autoplay
                  loop
                  animationData={whiteLoader}
                  style={{ width: 32, height: 32 }}
                />
              ) : (
                <FaPaperPlane />
              )}
            </span>
          </button>
        </div>
        {error && (
          <div style={{
            color: '#ff4444',
            fontSize: '14px',
            marginTop: '10px',
            textAlign: 'center',
            padding: '8px',
            backgroundColor: 'rgba(255, 68, 68, 0.1)',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 