"use client"

import React, { useState, useEffect } from 'react';
import AdminLoginPanel from '../Components/admin/AdminLoginPanel';
import AdminDashboard from '../Components/admin/AdminDashboard';

export default function AdminDashboardRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/admin/me');
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  // This handler should be called by AdminLoginPanel on successful login
  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'rgba(255,255,255,0.95)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!isLoggedIn ? (
        <AdminLoginPanel
          isOpen={true}
          onClose={() => {}}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
} 