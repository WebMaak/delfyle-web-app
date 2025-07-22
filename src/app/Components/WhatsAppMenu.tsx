"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function WhatsAppMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 10 }}>
      <button
        aria-label="Chat with us on WhatsApp"
        onClick={() => setOpen((v) => !v)}
        style={{
          background: '#25D366',
          borderRadius: '50%',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          border: 'none',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
          zIndex: 10,
        }}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path d="M16 6C10.477 6 6 10.477 6 16c0 2.09.64 4.03 1.74 5.65L6 26l4.43-1.7A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 18c-1.7 0-3.29-.5-4.63-1.36l-.33-.21-2.63.99.99-2.57-.22-.34A7.96 7.96 0 0 1 8 16c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.47-5.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.51-.42-.44-.57-.45-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.49-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" fill="#fff"/>
        </svg>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 70,
            right: 0,
            background: '#fff',
            borderRadius: 12,
            border: '.7px solid rgb(223, 223, 223)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            padding: '12px 0',
            minWidth: 220,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            zIndex: 10,
          }}
        >
          <a
            href="https://wa.me/918697603824"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25D366',
              textDecoration: 'none',
              fontWeight: 400,
              padding: '10px 20px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'background 0.2s',
            }}
            onClick={() => setOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M16 6C10.477 6 6 10.477 6 16c0 2.09.64 4.03 1.74 5.65L6 26l4.43-1.7A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 18c-1.7 0-3.29-.5-4.63-1.36l-.33-.21-2.63.99.99-2.57-.22-.34A7.96 7.96 0 0 1 8 16c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.47-5.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.51-.42-.44-.57-.45-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.49-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" fill="#fff"/>
            </svg>
            Chat: 86976 03824
          </a>
          <a
            href="https://wa.me/917439587419"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25D366',
              textDecoration: 'none',
              fontWeight: 400,
              padding: '10px 20px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'background 0.2s',
            }}
            onClick={() => setOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M16 6C10.477 6 6 10.477 6 16c0 2.09.64 4.03 1.74 5.65L6 26l4.43-1.7A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 18c-1.7 0-3.29-.5-4.63-1.36l-.33-.21-2.63.99.99-2.57-.22-.34A7.96 7.96 0 0 1 8 16c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.47-5.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.51-.42-.44-.57-.45-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.49-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" fill="#fff"/>
            </svg>
            Chat: 74395 87419
          </a>
        </div>
      )}
    </div>
  );
} 