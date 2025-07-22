'use client'

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const BOELoginPanel = dynamic(() => import("../Components/admin/BOELoginPanel"), { ssr: false });
const BoDashboard = dynamic(() => import("../Components/admin/BoDashboard"), { ssr: false });

export default function BoDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/boe/me');
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

  // This handler should be called by BOELoginPanel on successful login
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
        <BOELoginPanel
          isOpen={true}
          onClose={() => {}} // Empty handler prevents dismissal
          onSuccess={handleLoginSuccess}
        />
      ) : (
        <BoDashboard />
      )}
    </div>
  );
} 