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

const countryOptions = [
  { code: '+91', label: '🇮🇳 +91' },   // India
  { code: '+1', label: '🇺🇸 +1' },     // USA
  { code: '+44', label: '🇬🇧 +44' },   // UK
  { code: '+61', label: '🇦🇺 +61' },   // Australia
  { code: '+971', label: '🇦🇪 +971' }, // UAE
  { code: '+81', label: '🇯🇵 +81' },   // Japan
  { code: '+49', label: '🇩🇪 +49' },   // Germany
  { code: '+33', label: '🇫🇷 +33' },   // France
  { code: '+39', label: '🇮🇹 +39' },   // Italy
  { code: '+7', label: '🇷🇺 +7' },     // Russia
  { code: '+86', label: '🇨🇳 +86' },   // China
  { code: '+92', label: '🇵🇰 +92' },   // Pakistan
  { code: '+880', label: '🇧🇩 +880' }, // Bangladesh
  { code: '+94', label: '🇱🇰 +94' },   // Sri Lanka
  { code: '+82', label: '🇰🇷 +82' },   // South Korea
  { code: '+34', label: '🇪🇸 +34' },   // Spain
  { code: '+55', label: '🇧🇷 +55' },   // Brazil
  { code: '+27', label: '🇿🇦 +27' },   // South Africa
  { code: '+20', label: '🇪🇬 +20' },   // Egypt
  { code: '+234', label: '🇳🇬 +234' }, // Nigeria
  // Add or remove as per your user base
];


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
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [greetText, setGreetText] = useState(initialGreet);
  const [error, setError] = useState('');
  const [countryCode, setCountryCode] = useState(countryOptions[0].code);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, max 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm(prev => ({ ...prev, phone: value }));
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
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
        body: JSON.stringify({
          ...form,
          phone: countryCode + form.phone,
          fullName: form.firstName + ' ' + form.lastName
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      setGreetText(thankYouGreet);
      setSubmitted(true);
      setForm({
        firstName: '',
        lastName: '',
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
        <label className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Full Name <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
          <div style={{display:'flex', flexDirection:'row', gap:'12px', alignItems:'center'}}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              style={{width:'100%'}}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name"
              style={{width:'100%'}}
              required
            />
          </div>
        </label>
        <label className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Phone Number <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
          <div style={{display:'flex', flexDirection:'row', gap:'12px', alignItems:'center'}}>
            <select
              className={styles.countryDropdown}
              name="countryCode"
              value={countryCode}
              onChange={handleCountryChange}
              style={{width:'30%', minWidth: '90px'}}
              required
            >
              {countryOptions.map((option) => (
                <option key={option.code} value={option.code} className={styles.countryDropdownOption}>{option.label}</option>
              ))}
            </select>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={form.phone}
              onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            required
              pattern="\d{10}"
              maxLength={10}
              style={{width:'70%'}}
          />
          </div>
        </label>
        <label className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Email <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
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
        <label className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Choose Your Required Service <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
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
        <label className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Message <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
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