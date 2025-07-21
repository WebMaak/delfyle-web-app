'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './ModernContactForm.module.css';
import { FaPaperPlane } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import Player from 'lottie-react';
import whiteLoader from '@/assets/animation/white-loader.json';

const service = [
  'Business registration',
  'Trademark',
  'Registration',
  'Goods & Service Tax',
  'Compliance',
  'Services',
  'Income Tax',
  'Other'
];

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


const ModernContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [greetText, setGreetText] = useState(initialGreet);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [countryCode, setCountryCode] = useState(countryOptions[0].code);

  // Refs for GSAP
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const greetRef = useRef<HTMLHeadingElement>(null);

  // Animate background shapes
  useEffect(() => {
    if (leftRef.current && rightRef.current && centerRef.current) {
      gsap.to(leftRef.current, {
        y: 60,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(rightRef.current, {
        y: -60,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(centerRef.current, {
        y: 40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  // Animate greet text in on mount
  useEffect(() => {
    if (greetRef.current) {
      gsap.fromTo(
        greetRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, []);

  // Animate greet text change
  useEffect(() => {
    if (!greetRef.current) return;
    gsap.fromTo(
      greetRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
    );
  }, [greetText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, max 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm({ ...form, phone: value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (greetText === thankYouGreet || isSubmitting) return; // Prevent further submission if already submitted or submitting
    
    setIsSubmitting(true);
    setError('');

    try {
      // Send data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

      // Success - animate out, then change text, then animate in
      if (greetRef.current) {
        gsap.to(greetRef.current, {
          opacity: 0,
          y: -30,
          scale: 0.95,
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            setGreetText(thankYouGreet);
            setIsSubmitting(false);
          },
        });
      }
      setSubmitted(true);
      
      // Reset form after successful submission
      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });

      // Reset greet after 3 seconds
      setTimeout(() => {
        setGreetText(initialGreet);
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      
      // Reset submitting state on error
      setIsSubmitting(false);
    }
  };

  return (
    <div id="modern-contact-form" className={styles.wrapper}>
      <div className={styles.bgLeft} ref={leftRef}></div>
      <div className={styles.bgRight} ref={rightRef}></div>
      <div className={styles.bgCenter} ref={centerRef}></div>
      <div className={styles.cardRow}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Start your service</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} > <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>Full Name <span style={{ color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
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
            <label className={styles.label}> <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>Phone Number <span style={{ color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
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
                pattern="[0-9]{10}"
                maxLength={10}
                style={{width:'70%'}}
                inputMode="numeric"
                autoComplete="tel"
              />
              </div>
            </label>
            <label className={styles.label}> <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>Email <span style={{ color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
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
            <label className={styles.label}> <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>Choose Your Required Service <span style={{ color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
              <select
                className={styles.input}
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {service.map((service, idx) => (
                  <option key={service + '-' + idx} value={service}>{service}</option>
                ))}
              </select>
            </label>
            <label className={styles.label}> <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>Message <span style={{ color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div>
              <textarea
                className={styles.input}
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={2}
                placeholder="Your message"
                required
              />
            </label>
            <div className={styles.buttonRow}>
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
                      style={{ width: 50, height: 50 }}
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
        <div className={styles.thankCard}>
          <div className={styles.thankContent}>
            <h1 className={styles.thankTitle} ref={greetRef}>{greetText}</h1>
            <hr className={styles.hr} />
            <div className={styles.thankSub}>We'll be in touch.<br />Shortly!</div>
            <div className={styles.nextRow}>
              {submitted && (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#fff',
                  color: '#3a4fff',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(58,79,255,0.15)'
                }}>
                  &#10003;
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernContactForm;