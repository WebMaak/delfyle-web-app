"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./modern-navbar.module.css";
import { Dropdown, PlaceholderIcon } from "./Dropdown";

// Import company icons
import PrivateLimitedIcon from "../../../../public/main-icons/companies/private-limited.png";
import LLPIcon from "../../../../public/main-icons/companies/llp.png";
import OPCIcon from "../../../../public/main-icons/companies/opc.png";
import Section8Icon from "../../../../public/main-icons/companies/section-8-company.png";
import PartnershipIcon from "../../../../public/main-icons/companies/partnership-firm.png";
import TrustIcon from "../../../../public/main-icons/companies/trust-registration.png";
import PublicCompanyIcon from "../../../../public/main-icons/companies/public-company.png";
import ProducerCompanyIcon from "../../../../public/main-icons/companies/producer-company.png";
import NidhiCompanyIcon from "../../../../public/main-icons/companies/nidhi-company.png";

// Import MCA icons
import CompanyComplianceIcon from "../../../../public/main-icons/mca/company compliance.png";
import LLPComplianceIcon from "../../../../public/main-icons/mca/llp-compliance.png";
import OPCComplianceIcon from "../../../../public/main-icons/mca/opc-compliance.png";
import NameChangeCompanyIcon from "../../../../public/main-icons/mca/name-change-company.png";
import CompanyRegisteredOfficeChangeIcon from "../../../../public/main-icons/mca/company registered office change.png";
import DINEKYCIcon from "../../../../public/main-icons/mca/DIN E-KYC FILING.png";
import DINReactivationIcon from "../../../../public/main-icons/mca/DIN RE-ACTIVATION.png";
import DirectorChangeIcon from "../../../../public/main-icons/mca/DIRECTOR CHANGE.png";
import DirectorRemoveIcon from "../../../../public/main-icons/mca/director-remove.png";
import AppointmentOfAuditorIcon from "../../../../public/main-icons/mca/APPOINTMENT OF AUDITOR.png";
import DPT3FilingIcon from "../../../../public/main-icons/mca/dpt-3-filling.png";
import LLPForm11FilingIcon from "../../../../public/main-icons/mca/llp-form-11-filling.png";
import DormantStatusFilingIcon from "../../../../public/main-icons/mca/dormant-status-filing.png";
import MOAAmendmentIcon from "../../../../public/main-icons/mca/moa-amenement.png";
import AOAAmendmentIcon from "../../../../public/main-icons/mca/aoa-amendment.png";
import AuthorizedCapitalIncreaseIcon from "../../../../public/main-icons/mca/AUTHORIZED CAPITAL INCREASE.png";
import ShareTransferIcon from "../../../../public/main-icons/mca/share-transfer.png";
import DematOfSharesIcon from "../../../../public/main-icons/mca/DEMAT OF SHARES.png";
import WindingUpLLPIcon from "../../../../public/main-icons/mca/winding-up-llp.png";
import WindingUpCompanyIcon from "../../../../public/main-icons/mca/winding-up-company.png";

// Import trademark icons
import TrademarkRegistrationIcon from "../../../../public/main-icons/trademark/Trademark Registration.png";
import TrademarkObjectionIcon from "../../../../public/main-icons/trademark/Trademark Objection.png";
import TrademarkCertificateIcon from "../../../../public/main-icons/trademark/Trademark Certificate.png";
import TrademarkOppositionIcon from "../../../../public/main-icons/trademark/Trademark Opposition.png";
import TrademarkHearingIcon from "../../../../public/main-icons/trademark/Trademark_Hearing_Transparent__1_-removebg-preview.png";
import TrademarkRectificationIcon from "../../../../public/main-icons/trademark/Trademark Rectification.png";
import TrademarkInfringementNoticeIcon from "../../../../public/main-icons/trademark/Trademark Infringement Notice.png";
import TrademarkRenewalIcon from "../../../../public/main-icons/trademark/Trademark Renewal.png";
import TrademarkRestorationIcon from "../../../../public/main-icons/trademark/Trademark Restoration.png";
import TrademarkTransferIcon from "../../../../public/main-icons/trademark/Trademark Transfer.png";
import ExpeditedTrademarkRegistrationIcon from "../../../../public/main-icons/trademark/Expedited Trademark Registration.png";
import LogoDesignTrademarkProtectionIcon from "../../../../public/main-icons/trademark/Logo Design + Trademark Protection.png";
import DesignRegistrationIcon from "../../../../public/main-icons/trademark/Design Registration.png";
import DesignObjectionIcon from "../../../../public/main-icons/trademark/Design Objection.png";
import CopyrightRegistrationIcon from "../../../../public/main-icons/trademark/Copyright Registration.png";
import CopyrightObjectionsIcon from "../../../../public/main-icons/trademark/Copyright Objections.png";

// Import registration icons
import StartUpRegistrationIcon from "../../../../public/main-icons/registrations/StartUp Registration.png";
import TradeLicenseIcon from "../../../../public/main-icons/registrations/Trade License.png";
import FSSAIRegistrationIcon from "../../../../public/main-icons/registrations/FSSAI Registration.png";
import FSSAILicenseIcon from "../../../../public/main-icons/registrations/FSSAI License.png";
import HalalCertificationIcon from "../../../../public/main-icons/registrations/halal.png";
import ICEGATERegistrationIcon from "../../../../public/main-icons/registrations/ICEGATE Registration.png";
import ISORegistrationIcon from "../../../../public/main-icons/registrations/ISO Registration.png";
import PFRegistrationIcon from "../../../../public/main-icons/registrations/PF Registration.png";
import ESIRegistrationIcon from "../../../../public/main-icons/registrations/ESI Registration.png";
import ProfessionalTaxRegistrationIcon from "../../../../public/main-icons/registrations/Professional Tax Registration.png";
import RCMCRegistrationIcon from "../../../../public/main-icons/registrations/RCMC Registration.png";
import WBRERARegistrationIcon from "../../../../public/main-icons/registrations/WB RERA Registration.png";
import Registration12A80GIcon from "../../../../public/main-icons/registrations/12A and 80G Registration.png";
import Registration12AIcon from "../../../../public/main-icons/registrations/12A Registration.png";
import Registration80GIcon from "../../../../public/main-icons/registrations/80G Registration.png";
import DarpanRegistrationIcon from "../../../../public/main-icons/registrations/Darpan Registration.png";
import UdyamRegistrationIcon from "../../../../public/main-icons/registrations/Udyam Registration.png";
import DigitalSignatureIcon from "../../../../public/main-icons/registrations/DIGITAL SIGN.png";
import ShopEstablishmentActRegistrationIcon from "../../../../public/main-icons/registrations/SHOP AND ESTABLISHMENT ACT.png";
import DrugLicenseIcon from "../../../../public/main-icons/registrations/DRUG LICENSE.png";
import FCRARegistrationIcon from "../../../../public/main-icons/registrations/FCRA REGISTRATION.png";
import FireLicenseIcon from "../../../../public/main-icons/registrations/FIRE LICENSE.png";
import EPRCertificateIcon from "../../../../public/main-icons/registrations/EPR CERTIFICATE.png";

// Import GST icons
import GSTRegistrationIcon from "../../../../public/main-icons/gst/Gst registration.png";
import GSTReturnFilingIcon from "../../../../public/main-icons/gst/gst return filing.png";
import GSTAnnualReturnFilingIcon from "../../../../public/main-icons/gst/gst annual return.png";
import GSTLUTFormIcon from "../../../../public/main-icons/gst/gst lut form.png";
import GSTTaxNoticeIcon from "../../../../public/main-icons/gst/gst tax notice.png";
import GSTAmendmentIcon from "../../../../public/main-icons/gst/gst amendment.png";
import GSTRevocationIcon from "../../../../public/main-icons/gst/gst revocation.png";
import GSTR10Icon from "../../../../public/main-icons/gst/gstr-10.png";

// Import compliance icons
import FSSAIRenewalIcon from "../../../../public/main-icons/compliance/FSSAI renewal.png";
import FSSAIReturnFilingIcon from "../../../../public/main-icons/compliance/FSSAI return filing.png";
import HRPayrollServicesIcon from "../../../../public/main-icons/compliance/HR & Payroll Services.png";
import PFReturnFilingIcon from "../../../../public/main-icons/compliance/PF Return Filing.png";
import ESIReturnFilingIcon from "../../../../public/main-icons/compliance/ESI Return Filing.png";
import ProfessionalTaxReturnFilingIcon from "../../../../public/main-icons/compliance/professional tax return filing.png";
import PartnershipComplianceIcon from "../../../../public/main-icons/compliance/Partnership Compliance.png";
import ProprietorshipComplianceIcon from "../../../../public/main-icons/compliance/Proprietorship Compliance.png";
import BookkeepingIcon from "../../../../public/main-icons/compliance/book keeping.png";

// Import ITR icons
import ITR1ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 1.png";
import ITR2ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 2.png";
import ITR3ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 3.png";
import ITR4ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 4.png";
import ITR5ReturnFilingIcon from "../../../../public/main-icons/itr/ITR 5.png";
import ITR6ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 2.png"; // Using ITR2 as fallback
import ITR7ReturnFilingIcon from "../../../../public/main-icons/itr/ITR 7.png";
import TDSReturnFilingIcon from "../../../../public/main-icons/itr/TDS.png";
import IncomeTaxNoticeIcon from "../../../../public/main-icons/itr/INCOME TAX NOTICE.png";
import TANRegistrationIcon from "../../../../public/main-icons/itr/TAN Registration.png";
import Filing15CA15CBIcon from "../../../../public/main-icons/itr/15CA 15 CB FILING.png";

// Company icon mapping
const getCompanyIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "Private Limited Company": PrivateLimitedIcon,
    "Limited Liability Partnership (LLP)": LLPIcon,
    "One Person Company (OPC)": OPCIcon,
    "Section 8 Company": Section8Icon,
    "Partnership Firm": PartnershipIcon,
    "Trust Registration": TrustIcon,
    "Public Company": PublicCompanyIcon,
    "Producer Company": ProducerCompanyIcon,
    "Nidhi Company": NidhiCompanyIcon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// MCA icon mapping
const getMCAIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "Company Compliance": CompanyComplianceIcon,
    "LLP Compliance": LLPComplianceIcon,
    "OPC Compliance": OPCComplianceIcon,
    "Name Change - Company": NameChangeCompanyIcon,
    "Company Registered Office Change": CompanyRegisteredOfficeChangeIcon,
    "DIN eKYC Filing": DINEKYCIcon,
    "DIN Reactivation": DINReactivationIcon,
    "Director Change": DirectorChangeIcon,
    "Remove Director": DirectorRemoveIcon,
    "Appointment of Auditor": AppointmentOfAuditorIcon,
    "DPT-3 Filing": DPT3FilingIcon,
    "LLP Form 11 Filing": LLPForm11FilingIcon,
    "Dormant Status Filing": DormantStatusFilingIcon,
    "MOA Amendment": MOAAmendmentIcon,
    "AOA Amendment": AOAAmendmentIcon,
    "Authorized Capital Increase": AuthorizedCapitalIncreaseIcon,
    "Share Transfer": ShareTransferIcon,
    "Demat of Shares": DematOfSharesIcon,
    "Winding Up - LLP": WindingUpLLPIcon,
    "Winding Up - Company": WindingUpCompanyIcon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// Trademark icon mapping
const getTrademarkIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "Trademark Registration": TrademarkRegistrationIcon,
    "Trademark Objection": TrademarkObjectionIcon,
    "Trademark Certificate": TrademarkCertificateIcon,
    "Trademark Opposition": TrademarkOppositionIcon,
    "Trademark Hearing": TrademarkHearingIcon,
    "Trademark Rectification": TrademarkRectificationIcon,
    "Trademark Infringement Notice": TrademarkInfringementNoticeIcon,
    "Trademark Renewal": TrademarkRenewalIcon,
    "Trademark Restoration": TrademarkRestorationIcon,
    "Trademark Transfer": TrademarkTransferIcon,
    "Expedited Trademark Registration": ExpeditedTrademarkRegistrationIcon,
    "Logo Design + Trademark Protection": LogoDesignTrademarkProtectionIcon,
    "Design Registration": DesignRegistrationIcon,
    "Design Objection": DesignObjectionIcon,
    "Copyright Registration": CopyrightRegistrationIcon,
    "Copyright Objections": CopyrightObjectionsIcon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// Registration icon mapping
const getRegistrationIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "StartUp Registration": StartUpRegistrationIcon,
    "Trade License": TradeLicenseIcon,
    "FSSAI Registration": FSSAIRegistrationIcon,
    "FSSAI License": FSSAILicenseIcon,
    "Halal Certification": HalalCertificationIcon,
    "ICEGATE Registration": ICEGATERegistrationIcon,
    "ISO Registration": ISORegistrationIcon,
    "PF Registration": PFRegistrationIcon,
    "ESI Registration": ESIRegistrationIcon,
    "Professional Tax Registration": ProfessionalTaxRegistrationIcon,
    "RCMC Registration": RCMCRegistrationIcon,
    "WB RERA Registration": WBRERARegistrationIcon,
    "12A and 80G Registration": Registration12A80GIcon,
    "12A Registration": Registration12AIcon,
    "80G Registration": Registration80GIcon,
    "Darpan Registration": DarpanRegistrationIcon,
    "Udyam Registration": UdyamRegistrationIcon,
    "Digital Signature": DigitalSignatureIcon,
    "Shop and Establishment Act Registration": ShopEstablishmentActRegistrationIcon,
    "Drug License": DrugLicenseIcon,
    "FCRA Registration": FCRARegistrationIcon,
    "Fire License": FireLicenseIcon,
    "EPR Certficate": EPRCertificateIcon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// GST icon mapping
const getGSTIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "GST Registration": GSTRegistrationIcon,
    "GST Return Filing": GSTReturnFilingIcon,
    "GST Annual Return Filing (GSTR - 9)": GSTAnnualReturnFilingIcon,
    "GST LUT Form": GSTLUTFormIcon,
    "GST Tax Notice": GSTTaxNoticeIcon,
    "GST Amendment": GSTAmendmentIcon,
    "GST Revocation": GSTRevocationIcon,
    "GSTR-10": GSTR10Icon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// Compliance icon mapping
const getComplianceIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "FSSAI Renewal": FSSAIRenewalIcon,
    "FSSAI Return Filing": FSSAIReturnFilingIcon,
    "HR & Payroll Services": HRPayrollServicesIcon,
    "PF Return Filing": PFReturnFilingIcon,
    "ESI Return Filing": ESIReturnFilingIcon,
    "Professional Tax Return Filing": ProfessionalTaxReturnFilingIcon,
    "Partnership Compliance": PartnershipComplianceIcon,
    "Proprietorship Compliance": ProprietorshipComplianceIcon,
    "Book-keeping": BookkeepingIcon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// ITR icon mapping
const getITRIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "ITR-1 Return Filing": ITR1ReturnFilingIcon,
    "ITR-2 Return Filing": ITR2ReturnFilingIcon,
    "ITR-3 Return Filing": ITR3ReturnFilingIcon,
    "ITR-4 Return Filing": ITR4ReturnFilingIcon,
    "ITR-5 Return Filing": ITR5ReturnFilingIcon,
    "ITR-6 Return Filing": ITR6ReturnFilingIcon,
    "ITR-7 Return Filing": ITR7ReturnFilingIcon,
    "TDS Return Filing": TDSReturnFilingIcon,
    "Income Tax Notice": IncomeTaxNoticeIcon,
    "TAN Registration": TANRegistrationIcon,
    "15CA & 15CB Filing": Filing15CA15CBIcon,
  };
  
  return iconMap[label] ? (
    <Image src={iconMap[label]} alt={label} width={30} height={30} />
  ) : PlaceholderIcon;
};

// Animation variants for dropdowns
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

const dropdownItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

// Menu data
const menuOptions = [
  { label: "Startup", subOptions: [
    "Private Limited Company",
    "Limited Liability Partnership (LLP)",
    "One Person Company (OPC)",
    "Section 8 Company",
    "Partnership Firm",
    "Trust Registration",
    "Public Company",
    "Producer Company",
    "Nidhi Company"
  ]},
  { label: "Trademark", subOptions: [
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
    "Copyright Objections"
  ]},
  { label: "Registrations", subOptions: [
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
    "EPR Certficate"
  ]},
  { label: "Goods & Services Tax", subOptions: [
    "GST Registration",
    "GST Return Filing",
    "GST Annual Return Filing (GSTR - 9)",
    "GST LUT Form",
    "GST Tax Notice",
    "GST Amendment",
    "GST Revocation",
    "GSTR-10"
  ]},
  { label: "MCA", subOptions: [
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
    "Winding Up - Company"
  ]},
  { label: "Compliance", subOptions: [
    "FSSAI Renewal",
    "FSSAI Return Filing",
    "HR & Payroll Services",
    "PF Return Filing",
    "ESI Return Filing",
    "Professional Tax Return Filing",
    "Partnership Compliance",
    "Proprietorship Compliance",
    "Book-keeping"
  ]},
  { label: "Income Tax", subOptions: [
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
    "15CA & 15CB Filing"
  ]}
];

// URL mapping for sub-options
const subOptionUrls: { [key: string]: string } = {
  // Startup
  "Private Limited Company": "/services/startup/private-limited-company",
  "Limited Liability Partnership (LLP)": "/services/startup/limited-liability-partnership-(llp)",
  "One Person Company (OPC)": "/services/startup/one-person-company-(opc)",
  "Section 8 Company": "/services/startup/section-8-company",
  "Partnership Firm": "/services/startup/partnership-firm",
  "Trust Registration": "/services/startup/trust-registration",
  "Public Company": "/services/startup/public-company",
  "Producer Company": "/services/startup/producer-company",
  "Nidhi Company": "/services/startup/nidhi-company",
  
  // Trademark
  "Trademark Registration": "/services/trademark/trademark-registration",
  "Trademark Objection": "/services/trademark/trademark-objection",
  "Trademark Certificate": "/services/trademark/trademark-certificate",
  "Trademark Opposition": "/services/trademark/trademark-opposition",
  "Trademark Hearing": "/services/trademark/trademark-hearing",
  "Trademark Rectification": "/services/trademark/trademark-rectification",
  "Trademark Infringement Notice": "/services/trademark/trademark-infringement-notice",
  "Trademark Renewal": "/services/trademark/trademark-renewal",
  "Trademark Restoration": "/services/trademark/trademark-restoration",
  "Trademark Transfer": "/services/trademark/trademark-transfer",
  "Expedited Trademark Registration": "/services/trademark/expedited-trademark-registration",
  "Logo Design + Trademark Protection": "/services/trademark/logo-design-+-trademark-protection",
  "Design Registration": "/services/trademark/design-registration",
  "Design Objection": "/services/trademark/design-objection",
  "Copyright Registration": "/services/trademark/copyright-registration",
  "Copyright Objections": "/services/trademark/copyright-objections",
  
  // Registrations
  "StartUp Registration": "/services/registrations/startup-registration",
  "Trade License": "/services/registrations/trade-license",
  "FSSAI Registration": "/services/registrations/fssai-registration",
  "FSSAI License": "/services/registrations/fssai-license",
  "Halal Certification": "/services/registrations/halal-certification",
  "ICEGATE Registration": "/services/registrations/icegate-registration",
  "ISO Registration": "/services/registrations/iso-registration",
  "PF Registration": "/services/registrations/pf-registration",
  "ESI Registration": "/services/registrations/esi-registration",
  "Professional Tax Registration": "/services/registrations/professional-tax-registration",
  "RCMC Registration": "/services/registrations/rcmc-registration",
  "WB RERA Registration": "/services/registrations/wb-rera-registration",
  "12A and 80G Registration": "/services/registrations/12a-and-80g-registration",
  "12A Registration": "/services/registrations/12a-registration",
  "80G Registration": "/services/registrations/80g-registration",
  "Darpan Registration": "/services/registrations/darpan-registration",
  "Udyam Registration": "/services/registrations/udyam-registration",
  "Digital Signature": "/services/registrations/digital-signature",
  "Shop and Establishment Act Registration": "/services/registrations/shop-and-establishment-act-registration",
  "Drug License": "/services/registrations/drug-license",
  "FCRA Registration": "/services/registrations/fcra-registration",
  "Fire License": "/services/registrations/fire-license",
  "EPR Certficate": "/services/registrations/epr-certificate",
  
  // GST
  "GST Registration": "/services/gst/gst-registration",
  "GST Return Filing": "/services/gst/gst-return-filing",
  "GST Annual Return Filing (GSTR - 9)": "/services/gst/gst-annual-return-filing-(gstr-9)",
  "GST LUT Form": "/services/gst/gst-lut-form",
  "GST Tax Notice": "/services/gst/gst-tax-notice",
  "GST Amendment": "/services/gst/gst-amendment",
  "GST Revocation": "/services/gst/gst-revocation",
  "GSTR-10": "/services/gst/gstr-10",
  
  // MCA
  "Company Compliance": "/services/mca/company-compliance",
  "LLP Compliance": "/services/mca/llp-compliance",
  "OPC Compliance": "/services/mca/opc-compliance",
  "Name Change - Company": "/services/mca/name-change-company",
  "Company Registered Office Change": "/services/mca/company-registered-office-change",
  "DIN eKYC Filing": "/services/mca/din-ekyc-filing",
  "DIN Reactivation": "/services/mca/din-reactivation",
  "Director Change": "/services/mca/director-change",
  "Remove Director": "/services/mca/remove-director",
  "Appointment of Auditor": "/services/mca/appointment-of-auditor",
  "DPT-3 Filing": "/services/mca/dpt-3-filing",
  "LLP Form 11 Filing": "/services/mca/llp-form-11-filing",
  "Dormant Status Filing": "/services/mca/dormant-status-filing",
  "MOA Amendment": "/services/mca/moa-amendment",
  "AOA Amendment": "/services/mca/aoa-amendment",
  "Authorized Capital Increase": "/services/mca/authorized-capital-increase",
  "Share Transfer": "/services/mca/share-transfer",
  "Demat of Shares": "/services/mca/demat-of-shares",
  "Winding Up - LLP": "/services/mca/winding-up-llp",
  "Winding Up - Company": "/services/mca/winding-up-company",
  
  // Compliance
  "FSSAI Renewal": "/services/compliance/fssai-renewal",
  "FSSAI Return Filing": "/services/compliance/fssai-return-filing",
  "HR & Payroll Services": "/services/compliance/hr-&-payrol-services",
  "PF Return Filing": "/services/compliance/pf-return-filing",
  "ESI Return Filing": "/services/compliance/esi-return-filing",
  "Professional Tax Return Filing": "/services/compliance/professional-tax-return-filing",
  "Partnership Compliance": "/services/compliance/partnership-compliance",
  "Proprietorship Compliance": "/services/compliance/proprietorship-compliance",
  "Book-keeping": "/services/compliance/book-keeping",
  
  // Income Tax
  "ITR-1 Return Filing": "/services/income-tax/itr-1-return-filing",
  "ITR-2 Return Filing": "/services/income-tax/itr-2-return-filing",
  "ITR-3 Return Filing": "/services/income-tax/itr-3-return-filing",
  "ITR-4 Return Filing": "/services/income-tax/itr-4-return-filing",
  "ITR-5 Return Filing": "/services/income-tax/itr-5-return-filing",
  "ITR-6 Return Filing": "/services/income-tax/itr-6-return-filing",
  "ITR-7 Return Filing": "/services/income-tax/itr-7-return-filing",
  "TDS Return Filing": "/services/income-tax/tds-return-filing",
  "Income Tax Notice": "/services/income-tax/income-tax-notice",
  "TAN Registration": "/services/income-tax/tan-registration",
  "15CA & 15CB Filing": "/services/income-tax/15ca-&-15cb-filing"
};

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    dropdown?: {
      title: string;
      items: {
        name: string;
        description: string;
        link: string;
        icon?: React.ReactNode;
      }[];
    };
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ModernNavbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(styles.modernNavbar, className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const ModernNavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "1100px",
      }}
      className={cn(
        styles.modernNavBody,
        visible && styles.visible,
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const ModernNavItems = ({ className, onItemClick, visible }: NavItemsProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      className={cn(styles.modernNavItems, visible && styles.visible, className)}
    >
      {/* 1st Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(0); setHovered(0); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 0 || hovered === 0) && styles.active
          )}
          href="#"
        >
          {hovered === 0 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Startup</span>
        </a>
        {openDropdown === 0 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown1}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/private-limited-company" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Private Limited Company")}</span>
                    <span className={styles.dropdownLabel}>Private Limited Company</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/limited-liability-partnership-(llp)" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Limited Liability Partnership (LLP)")}</span>
                    <span className={styles.dropdownLabel}>Limited Liability Partnership (LLP)</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/one-person-company-(opc)" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("One Person Company (OPC)")}</span>
                    <span className={styles.dropdownLabel}>One Person Company (OPC)</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/section-8-company" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Section 8 Company")}</span>
                    <span className={styles.dropdownLabel}>Section 8 Company</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/partnership-firm" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Partnership Firm")}</span>
                    <span className={styles.dropdownLabel}>Partnership Firm</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/trust-registration" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Trust Registration")}</span>
                    <span className={styles.dropdownLabel}>Trust Registration</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/public-company" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Public Company")}</span>
                    <span className={styles.dropdownLabel}>Public Company</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/producer-company" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Producer Company")}</span>
                    <span className={styles.dropdownLabel}>Producer Company</span>
                  </a>
                </motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}>
                  <a href="/services/startup/nidhi-company" className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{getCompanyIcon("Nidhi Company")}</span>
                    <span className={styles.dropdownLabel}>Nidhi Company</span>
                  </a>
                </motion.div>
            </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 2nd Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(1); setHovered(1); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 1 || hovered === 1) && styles.active
          )}
          href="#"
        >
          {hovered === 1 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Trademark</span>
        </a>
        {openDropdown === 1 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown2}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Registration")}</span><span className={styles.dropdownLabel}>Trademark Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-objection" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Objection")}</span><span className={styles.dropdownLabel}>Trademark Objection</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-certificate" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Certificate")}</span><span className={styles.dropdownLabel}>Trademark Certificate</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-opposition" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Opposition")}</span><span className={styles.dropdownLabel}>Trademark Opposition</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-hearing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Hearing")}</span><span className={styles.dropdownLabel}>Trademark Hearing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-rectification" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Rectification")}</span><span className={styles.dropdownLabel}>Trademark Rectification</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-infringement-notice" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Infringement Notice")}</span><span className={styles.dropdownLabel}>Trademark Infringement Notice</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-renewal" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Renewal")}</span><span className={styles.dropdownLabel}>Trademark Renewal</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-restoration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Restoration")}</span><span className={styles.dropdownLabel}>Trademark Restoration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/trademark-transfer" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Trademark Transfer")}</span><span className={styles.dropdownLabel}>Trademark Transfer</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/expedited-trademark-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Expedited Trademark Registration")}</span><span className={styles.dropdownLabel}>Expedited Trademark Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/logo-design-+-trademark-protection" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Logo Design + Trademark Protection")}</span><span className={styles.dropdownLabel}>Logo Design + Trademark Protection</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/design-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Design Registration")}</span><span className={styles.dropdownLabel}>Design Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/design-objection" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Design Objection")}</span><span className={styles.dropdownLabel}>Design Objection</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/copyright-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Copyright Registration")}</span><span className={styles.dropdownLabel}>Copyright Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/trademark/copyright-objections" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getTrademarkIcon("Copyright Objections")}</span><span className={styles.dropdownLabel}>Copyright Objections</span></a></motion.div>
            </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 3rd Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(2); setHovered(2); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 2 || hovered === 2) && styles.active
          )}
          href="#"
        >
          {hovered === 2 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Registrations</span>
        </a>
        {openDropdown === 2 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown3}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/startup-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("StartUp Registration")}</span><span className={styles.dropdownLabel}>StartUp Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/trade-license" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Trade License")}</span><span className={styles.dropdownLabel}>Trade License</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/fssai-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("FSSAI Registration")}</span><span className={styles.dropdownLabel}>FSSAI Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/fssai-license" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("FSSAI License")}</span><span className={styles.dropdownLabel}>FSSAI License</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/halal-certification" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Halal Certification")}</span><span className={styles.dropdownLabel}>Halal Certification</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/icegate-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("ICEGATE Registration")}</span><span className={styles.dropdownLabel}>ICEGATE Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/iso-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("ISO Registration")}</span><span className={styles.dropdownLabel}>ISO Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/pf-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("PF Registration")}</span><span className={styles.dropdownLabel}>PF Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/esi-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("ESI Registration")}</span><span className={styles.dropdownLabel}>ESI Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/professional-tax-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Professional Tax Registration")}</span><span className={styles.dropdownLabel}>Professional Tax Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/rcmc-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("RCMC Registration")}</span><span className={styles.dropdownLabel}>RCMC Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/wb-rera-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("WB RERA Registration")}</span><span className={styles.dropdownLabel}>WB RERA Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/12a-and-80g-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("12A and 80G Registration")}</span><span className={styles.dropdownLabel}>12A and 80G Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/12a-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("12A Registration")}</span><span className={styles.dropdownLabel}>12A Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/80g-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("80G Registration")}</span><span className={styles.dropdownLabel}>80G Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/darpan-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Darpan Registration")}</span><span className={styles.dropdownLabel}>Darpan Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/udyam-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Udyam Registration")}</span><span className={styles.dropdownLabel}>Udyam Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/digital-signature" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Digital Signature")}</span><span className={styles.dropdownLabel}>Digital Signature</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/shop-and-establishment-act-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Shop and Establishment Act Registration")}</span><span className={styles.dropdownLabel}>Shop and Establishment Act Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/drug-license" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Drug License")}</span><span className={styles.dropdownLabel}>Drug License</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/fcra-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("FCRA Registration")}</span><span className={styles.dropdownLabel}>FCRA Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/registrations/fire-license" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getRegistrationIcon("Fire License")}</span><span className={styles.dropdownLabel}>Fire License</span></a></motion.div>
            </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 4th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(3); setHovered(3); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 3 || hovered === 3) && styles.active
          )}
          href="#"
        >
          {hovered === 3 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>GST</span>
        </a>
        {openDropdown === 3 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown4}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST Registration")}</span><span className={styles.dropdownLabel}>GST Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST Return Filing")}</span><span className={styles.dropdownLabel}>GST Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-annual-return-filing-(gstr-9)" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST Annual Return Filing (GSTR - 9)")}</span><span className={styles.dropdownLabel}>GST Annual Return Filing (GSTR - 9)</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-lut-form" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST LUT Form")}</span><span className={styles.dropdownLabel}>GST LUT Form</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-tax-notice" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST Tax Notice")}</span><span className={styles.dropdownLabel}>GST Tax Notice</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-amendment" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST Amendment")}</span><span className={styles.dropdownLabel}>GST Amendment</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gst-revocation" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GST Revocation")}</span><span className={styles.dropdownLabel}>GST Revocation</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/gst/gstr-10" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getGSTIcon("GSTR-10")}</span><span className={styles.dropdownLabel}>GSTR-10</span></a></motion.div>
            </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 5th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(4); setHovered(4); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 4 || hovered === 4) && styles.active
          )}
          href="#"
        >
          {hovered === 4 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>MCA</span>
        </a>
        {openDropdown === 4 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown5}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/company-compliance" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Company Compliance")}</span><span className={styles.dropdownLabel}>Company Compliance</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/llp-compliance" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("LLP Compliance")}</span><span className={styles.dropdownLabel}>LLP Compliance</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/opc-compliance" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("OPC Compliance")}</span><span className={styles.dropdownLabel}>OPC Compliance</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/name-change-company" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Name Change - Company")}</span><span className={styles.dropdownLabel}>Name Change - Company</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/company-registered-office-change" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Company Registered Office Change")}</span><span className={styles.dropdownLabel}>Company Registered Office Change</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/din-ekyc-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("DIN eKYC Filing")}</span><span className={styles.dropdownLabel}>DIN eKYC Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/din-reactivation" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("DIN Reactivation")}</span><span className={styles.dropdownLabel}>DIN Reactivation</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/director-change" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Director Change")}</span><span className={styles.dropdownLabel}>Director Change</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/remove-director" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Remove Director")}</span><span className={styles.dropdownLabel}>Remove Director</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/appointment-of-auditor" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Appointment of Auditor")}</span><span className={styles.dropdownLabel}>Appointment of Auditor</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/dpt-3-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("DPT-3 Filing")}</span><span className={styles.dropdownLabel}>DPT-3 Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/llp-form-11-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("LLP Form 11 Filing")}</span><span className={styles.dropdownLabel}>LLP Form 11 Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/dormant-status-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Dormant Status Filing")}</span><span className={styles.dropdownLabel}>Dormant Status Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/moa-amendment" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("MOA Amendment")}</span><span className={styles.dropdownLabel}>MOA Amendment</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/aoa-amendment" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("AOA Amendment")}</span><span className={styles.dropdownLabel}>AOA Amendment</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/authorized-capital-increase" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Authorized Capital Increase")}</span><span className={styles.dropdownLabel}>Authorized Capital Increase</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/share-transfer" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Share Transfer")}</span><span className={styles.dropdownLabel}>Share Transfer</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/demat-of-shares" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Demat of Shares")}</span><span className={styles.dropdownLabel}>Demat of Shares</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/winding-up-llp" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Winding Up - LLP")}</span><span className={styles.dropdownLabel}>Winding Up - LLP</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/mca/winding-up-company" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getMCAIcon("Winding Up - Company")}</span><span className={styles.dropdownLabel}>Winding Up - Company</span></a></motion.div>
                    </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 6th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(5); setHovered(5); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 5 || hovered === 5) && styles.active
          )}
          href="#"
        >
          {hovered === 5 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Compliance</span>
        </a>
        {openDropdown === 5 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown6}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/fssai-renewal" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("FSSAI Renewal")}</span><span className={styles.dropdownLabel}>FSSAI Renewal</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/fssai-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("FSSAI Return Filing")}</span><span className={styles.dropdownLabel}>FSSAI Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/hr-&-payrol-services" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("HR & Payroll Services")}</span><span className={styles.dropdownLabel}>HR & Payroll Services</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/pf-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("PF Return Filing")}</span><span className={styles.dropdownLabel}>PF Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/esi-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("ESI Return Filing")}</span><span className={styles.dropdownLabel}>ESI Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/professional-tax-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("Professional Tax Return Filing")}</span><span className={styles.dropdownLabel}>Professional Tax Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/partnership-compliance" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("Partnership Compliance")}</span><span className={styles.dropdownLabel}>Partnership Compliance</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/proprietorship-compliance" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("Proprietorship Compliance")}</span><span className={styles.dropdownLabel}>Proprietorship Compliance</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/compliance/book-keeping" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getComplianceIcon("Book-keeping")}</span><span className={styles.dropdownLabel}>Book-keeping</span></a></motion.div>
            </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 7th Nav Item */}
      <div
          className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(6); setHovered(6); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(
            styles.navLink,
            visible && styles.visible,
            (openDropdown === 6 || hovered === 6) && styles.active
          )}
          href="#"
        >
          {hovered === 6 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Income Tax</span>
        </a>
        {openDropdown === 6 && (
          <AnimatePresence>
            <motion.div 
              className={`${styles.dropdown} ${styles.dropdown7}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-1-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-1 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-1 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-2-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-2 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-2 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-3-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-3 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-3 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-4-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-4 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-4 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-5-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-5 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-5 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-6-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-6 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-6 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/itr-7-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("ITR-7 Return Filing")}</span><span className={styles.dropdownLabel}>ITR-7 Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/tds-return-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("TDS Return Filing")}</span><span className={styles.dropdownLabel}>TDS Return Filing</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/income-tax-notice" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("Income Tax Notice")}</span><span className={styles.dropdownLabel}>Income Tax Notice</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/tan-registration" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("TAN Registration")}</span><span className={styles.dropdownLabel}>TAN Registration</span></a></motion.div>
                <motion.div className={styles.dropdownItem} variants={dropdownItemVariants}><a href="/services/income-tax/15ca-&-15cb-filing" className={styles.dropdownLink}><span className={styles.dropdownIcon}>{getITRIcon("15CA & 15CB Filing")}</span><span className={styles.dropdownLabel}>15CA & 15CB Filing</span></a></motion.div>
            </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* 8th Nav Item (no dropdown) */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(7); setHovered(7); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
        >
          <a
            onClick={onItemClick}
            className={cn(
              styles.navLink,
              visible && styles.visible,
              (openDropdown === 7 || hovered === 7) && styles.active
            )}
          href="/about"
        >
          {hovered === 7 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>About us</span>
          </a>
        </div>
    </motion.div>
  );
};

export const ModernMobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        styles.modernMobileNav,
        visible && styles.visible,
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const ModernMobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div className={cn(styles.modernMobileNavHeader, className)}>
      {children}
    </div>
  );
};

export const ModernMobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<null | string>(null);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(styles.modernMobileNavMenu, className)}
        >
          {activeMenu !== null && (
            <button
              onClick={() => setActiveMenu(null)}
              style={{ position: 'absolute', top: 16, left: 16, zIndex: 100, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              aria-label="Back"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
          )}
          <div style={{ 
            paddingTop: activeMenu !== null ? 0 : undefined,
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <AnimatePresence mode="wait">
              {activeMenu === null ? (
                <motion.ul
                  key="main-options"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ listStyle: 'none', padding: 0, margin: 0 }}
                >
                  {menuOptions.map(option => (
                    <li key={option.label} style={{ padding: '1rem 0', borderBottom: '1px solid #eee', cursor: 'pointer', textAlign: 'center' }} onClick={() => setActiveMenu(option.label)}>
                      {option.label}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div
                  key="sub-options"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ 
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, height: 'fit-content'}}>
                    {menuOptions.find(opt => opt.label === activeMenu)?.subOptions.map(sub => (
                      <li key={sub} style={{  borderBottom: '1px solid #eee', width: '100%', textAlign: 'center' }}>
                        <a 
                          href={subOptionUrls[sub]} 
                          style={{ 
                            display: 'block', 
                            textDecoration: 'none', 
                            color: 'inherit',
                            cursor: 'pointer'
                          }}
                          onClick={() => onClose()}
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModernMobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className={styles.mobileToggle} onClick={onClick} />
  ) : (
    <IconMenu2 className={styles.mobileToggle} onClick={onClick} />
  );
};

export const ModernNavbarLogo = ({ visible }: { visible?: boolean }) => {
  const aspectRatio = 16 / 9;
  const height = visible ? 40.5 : 81; // 72 / 1.77
  const width = height * aspectRatio;

  return (
    <a href="/" className={cn(styles.modernNavbarLogo)}>
      <motion.div
        className={styles.logoWrapper}
        animate={{ width: width, height: height }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Image 
          src="/delfyle-logo/delfyle-logo.png" 
          alt="Delfyle Logo" 
          layout="fill"
          objectFit="contain"
          className={styles.logoImage}
        />
      </motion.div>
    </a>
  );
};

export const ModernNavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  visible,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  visible?: boolean;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  return (
    <Tag
      href={href || undefined}
      className={cn(styles.modernNavbarButton, styles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}; 