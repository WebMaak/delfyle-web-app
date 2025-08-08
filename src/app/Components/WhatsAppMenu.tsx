"use client";
import React, { useState, useRef, useEffect } from 'react';

// A functional component for the contact cards inside the panel
const WhatsAppCard = ({ name, number, link, isMobile }: { name: string; number: string; link: string; isMobile: boolean }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '8px 10px' : '12px 16px',
      textDecoration: 'none',
      color: '#333',
      borderRadius: '8px',
      transition: 'background-color 0.3s, transform 0.3s',
      border: '1px solid #eee',
      margin: isMobile ? '0 10px 6px 10px' : '0 16px 8px 16px',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#f9f9f9';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#fff';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <svg width={isMobile ? 20 : 28} height={isMobile ? 20 : 28} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '12px', flexShrink: 0 }}>
      <circle cx="16" cy="16" r="16" fill="#25D366"/>
      <path d="M16 6C10.477 6 6 10.477 6 16c0 2.09.64 4.03 1.74 5.65L6 26l4.43-1.7A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 18c-1.7 0-3.29-.5-4.63-1.36l-.33-.21-2.63.99.99-2.57-.22-.34A7.96 7.96 0 0 1 8 16c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.47-5.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.51-.42-.44-.57-.45-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.49-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" fill="#fff"/>
    </svg>
    <div>
      {!isMobile && <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>}
      <div style={{ fontSize: isMobile ? '12px' : '12px', color: '#666', fontWeight: isMobile ? 600 : 400 }}>{number}</div>
    </div>
  </a>
);

export default function WhatsAppMenu() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Effect to handle clicks outside the component to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Effect to check screen size for responsiveness
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Dynamically calculate sizes based on isMobile state
  const containerHeight = isMobile ? 138 : 230;
  const panelWidth = isMobile ? 200 : 280;
  const buttonWidth = isMobile ? 20 : 30;
  const buttonHeight = containerHeight;

  return (
    <div 
      ref={menuRef} 
      style={{ 
        position: 'fixed', 
        bottom: '50%', 
        right: 0, 
        zIndex: 9999, 
        transform: 'translateY(50%)',
        display: 'flex',
        alignItems: 'center',
        height: `${containerHeight}px`,
      }}
    >
      <div
        style={{
          width: open ? `${panelWidth}px` : '0px',
          height: '100%',
          background: '#fff',
          borderRadius: '16px 0 0 16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          transform: open ? 'translateX(0%)' : 'translateX(100%)',
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          border: '1px solid #f0f0f0',
          borderRight: 'none',
          display: 'flex',
          flexDirection: 'column',
          zIndex: open ? 9 : -1
        }}
      >
        {!isMobile && (
          <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', textAlign: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Contact Us</h3>
          </div>
        )}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: isMobile ? '4px' : '8px' }}>
          <WhatsAppCard name="Sales & Support" number="+91 86976 03824" link="https://wa.me/918697603824" isMobile={isMobile} />
          <WhatsAppCard name="General Inquiries" number="+91 74395 87419" link="https://wa.me/917439587419" isMobile={isMobile} />
        </div>
      </div>
      
      <button
        aria-label="Enquire now"
        onClick={() => setOpen((v) => !v)}
        style={{
          background: '#b40068',
          color: '#fff',
          border: 'none',
          padding: isMobile ? '10px 6px' : '10px 10px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          borderRadius: open ? '0' : '12px 0 0 12px',
          cursor: 'pointer',
          fontWeight: '400',
          fontSize: isMobile ? '12px' : '14px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          height: '100%',
          width: `${buttonWidth}px`,
          transition: 'border-radius 0.4s ease, background-color 0.3s ease',
          marginLeft: '-1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}
      >
        Enquire now
      </button>
    </div>
  );
}
