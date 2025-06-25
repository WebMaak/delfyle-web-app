"use client";
import React, { useState } from "react";

const MAIN_MENU = [
  "Startup",
  "Trademark",
  "Registration",
  "Goods & Service Tax",
  "MCA",
  "Compliance",
  "Income Tax",
];

const SUB_MENUS: Record<string, string[]> = {
  Startup: [
    "Private Limited Company",
    "Limited Liability Partnership (LLP)",
    "One Person Company (OPC)",
    "Section 8 Company",
    "Partnership Firm",
    "Trust Registration",
    "Public Company",
    "Producer Company",
    "Nidhi Company",
  ],
  Trademark: [
    "Trademark Registration",
    "Trademark Objection",
    "Trademark Certificate",
    "Trademark Opposition",
    "Trademark Hearing",
    "Trademark Rectification",
    "Trademark Infringement Notice",
    "Trademark Renewal",
    "Trademark Restoration",
    "Trademark Transfer",
    "Expedited Trademark Registration",
    "Logo Design + Trademark Protection",
    "Design Registration",
    "Design Objection",
    "Copyright Registration",
    "Copyright Objections",
  ],
  Registration: [
    "StartUp Registration",
    "Trade License",
    "FSSAI Registration",
    "FSSAI License",
    "Halal Certification",
    "ICEGATE Registration",
    "ISO Registration",
    "PF Registration",
    "ESI Registration",
    "Professional Tax Registration",
    "RCMC Registration",
    "WB RERA Registration",
    "12A and 80G Registration",
    "12A Registration",
    "80G Registration",
    "Darpan Registration",
    "Udyam Registration",
    "Digital Signature",
    "Shop and Establishment Act Registration",
    "Drug License",
    "FCRA Registration",
    "Fire License",
    "EPR Certficate",
  ],
  "Goods & Service Tax": [
    "GST Registration",
    "GST Return Filing",
    "GST Annual Return Filing (GSTR - 9)",
    "GST LUT Form",
    "GST Tax Notice",
    "GST Amendment",
    "GST Revocation",
    "GSTR-10",
  ],
  MCA: [
    "Company Compliance",
    "LLP Compliance",
    "OPC Compliance",
    "Name Change - Company",
    "Company Registered Office Change",
    "DIN eKYC Filing",
    "DIN Reactivation",
    "Director Change",
    "Remove Director",
    "Appointment of Auditor",
    "DPT-3 Filing",
    "LLP Form 11 Filing",
    "Dormant Status Filing",
    "MOA Amendment",
    "AOA Amendment",
    "Authorized Capital Increase",
    "Share Transfer",
    "Demat of Shares",
    "Winding Up - LLP",
    "Winding Up - Company",
  ],
  Compliance: [
    "FSSAI Renewal",
    "FSSAI Return Filing",
    "HR & Payroll Services",
    "PF Return Filing",
    "ESI Return Filing",
    "Professional Tax Return Filing",
    "Partnership Compliance",
    "Proprietorship Compliance",
    "Book-keeping",
  ],
  "Income Tax": [
    "ITR-1 Return Filing",
    "ITR-2 Return Filing",
    "ITR-3 Return Filing",
    "ITR-4 Return Filing",
    "ITR-5 Return Filing",
    "ITR-6 Return Filing",
    "ITR-7 Return Filing",
    "TDS Return Filing",
    "Income Tax Notice",
    "TAN Registration",
    "15CA & 15CB Filing",
  ],
};

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label="Open mobile menu"
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 2001,
          width: 40,
          height: 40,
          background: "#fff",
          border: "none",
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        {open ? (
          <span style={{ fontSize: 32 }}>&#10005;</span> // Cross
        ) : (
          <span style={{ fontSize: 28 }}>&#9776;</span> // Hamburger
        )}
      </button>

      {/* Overlay Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#fff",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Back Arrow (only in submenu) */}
          {activeMenu && (
            <button
              aria-label="Back to main menu"
              onClick={() => setActiveMenu(null)}
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                zIndex: 2002,
                background: "none",
                border: "none",
                fontSize: 28,
                color: "#222",
                cursor: "pointer",
              }}
            >
              &#8592;
            </button>
          )}
          {/* Menu Container (scrollable) */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto",
              width: "100vw",
              height: "100vh",
            }}
          >
            <div style={{ width: "100%", maxWidth: 400, textAlign: "center" }}>
              {!activeMenu ? (
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {MAIN_MENU.map((item) => (
                    <li key={item} style={{ margin: "1.5rem 0" }}>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: 22,
                          color: "#222",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                        onClick={() => setActiveMenu(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {SUB_MENUS[activeMenu].map((item) => (
                    <li key={item} style={{ margin: "1.2rem 0" }}>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: 18,
                          color: "#222",
                          cursor: "pointer",
                        }}
                        // onClick={() => ...} // Add link logic here
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav; 