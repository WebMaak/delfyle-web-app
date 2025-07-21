import { useState } from "react";
import styles from "./AuthPopup.module.css";

interface AdminLoginPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export default function AdminLoginPanel({ isOpen, onClose, onLoginSuccess }: AdminLoginPanelProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = async () => {
    setError("");
    setIsLoading(true);
    if (!email) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }
    if (!password) {
      setError("Password is required");
      setIsLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/admin/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Sign in failed");
        setIsLoading(false);
        return;
      }
      setError("");
      setIsLoading(false);
      if (onLoginSuccess) onLoginSuccess();
      else onClose();
    } catch (err) {
      setError("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h2 className={styles.title}>Admin Login</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div className={styles.content}>
          <div className={styles.inputGroup}>
            <label htmlFor="admin-email" className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Email Address <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div></label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.input}
              disabled={isLoading}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="admin-password" className={styles.label}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>Password <span style={{color: '#ef4444', opacity: .75, fontSize: '1em', marginLeft: 2}}>*</span></div></label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={styles.input}
              disabled={isLoading}
              required
            />
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className={`${styles.btn} ${styles.signInBtn}`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
} 