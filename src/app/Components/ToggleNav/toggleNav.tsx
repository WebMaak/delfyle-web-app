"use client";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import styles from "./toggleNav.module.css";
import { useRouter, usePathname } from "next/navigation";
import { SocialIcon } from 'react-social-icons';
import path from "path";
import Image from "next/image";
// --- ICON IMPORTS (copied from ModernNav) ---
import PrivateLimitedIcon from "../../../../public/main-icons/companies/private-limited.png";
import LLPIcon from "../../../../public/main-icons/companies/llp.png";
import OPCIcon from "../../../../public/main-icons/companies/opc.png";
import Section8Icon from "../../../../public/main-icons/companies/section-8-company.png";
import PartnershipIcon from "../../../../public/main-icons/companies/partnership-firm.png";
import TrustIcon from "../../../../public/main-icons/companies/trust-registration.png";
import PublicCompanyIcon from "../../../../public/main-icons/companies/public-company.png";
import ProducerCompanyIcon from "../../../../public/main-icons/companies/producer-company.png";
import NidhiCompanyIcon from "../../../../public/main-icons/companies/nidhi-company.png";
// MCA
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
// Trademark
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
// Registration
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
// GST
import GSTRegistrationIcon from "../../../../public/main-icons/gst/Gst registration.png";
import GSTReturnFilingIcon from "../../../../public/main-icons/gst/gst return filing.png";
import GSTAnnualReturnFilingIcon from "../../../../public/main-icons/gst/gst annual return.png";
import GSTLUTFormIcon from "../../../../public/main-icons/gst/gst lut form.png";
import GSTTaxNoticeIcon from "../../../../public/main-icons/gst/gst tax notice.png";
import GSTAmendmentIcon from "../../../../public/main-icons/gst/gst amendment.png";
import GSTRevocationIcon from "../../../../public/main-icons/gst/gst revocation.png";
import GSTR10Icon from "../../../../public/main-icons/gst/gstr-10.png";
// Compliance
import FSSAIRenewalIcon from "../../../../public/main-icons/compliance/FSSAI renewal.png";
import FSSAIReturnFilingIcon from "../../../../public/main-icons/compliance/FSSAI return filing.png";
import HRPayrollServicesIcon from "../../../../public/main-icons/compliance/HR & Payroll Services.png";
import PFReturnFilingIcon from "../../../../public/main-icons/compliance/PF Return Filing.png";
import ESIReturnFilingIcon from "../../../../public/main-icons/compliance/ESI Return Filing.png";
import ProfessionalTaxReturnFilingIcon from "../../../../public/main-icons/compliance/professional tax return filing.png";
import PartnershipComplianceIcon from "../../../../public/main-icons/compliance/Partnership Compliance.png";
import ProprietorshipComplianceIcon from "../../../../public/main-icons/compliance/Proprietorship Compliance.png";
import BookkeepingIcon from "../../../../public/main-icons/compliance/book keeping.png";
// ITR
import ITR1ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 1.png";
import ITR2ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 2.png";
import ITR3ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 3.png";
import ITR4ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 4.png";
import ITR5ReturnFilingIcon from "../../../../public/main-icons/itr/ITR 5.png";
import ITR6ReturnFilingIcon from "../../../../public/main-icons/itr/ITR filing 2.png"; // fallback
import ITR7ReturnFilingIcon from "../../../../public/main-icons/itr/ITR 7.png";
import TDSReturnFilingIcon from "../../../../public/main-icons/itr/TDS.png";
import IncomeTaxNoticeIcon from "../../../../public/main-icons/itr/INCOME TAX NOTICE.png";
import TANRegistrationIcon from "../../../../public/main-icons/itr/TAN Registration.png";
import Filing15CA15CBIcon from "../../../../public/main-icons/itr/15CA 15 CB FILING.png";

type ToggleNavProps = {
  mainOptions?: string[];
  subMenus?: string[][];
};

export default function ToggleNav({
  mainOptions = [
    "Startup",
    "Trademark",
    "Registration",
    "Gst",
    "MCA",
    "Compliance",
    "Income Tax",
    "About Us",
  ],
  subMenus = Array.from({ length: 8 }, () => Array.from({ length: 18 }, (_, i) => `Sub Option ${i + 1}`)),
}: ToggleNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"main" | number>("main");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Try to disable ScrollSmoother when menu is open
    if (typeof window !== 'undefined' && (window as any).ScrollSmoother) {
      const smoother = (window as any).ScrollSmoother.get && (window as any).ScrollSmoother.get();
      if (isOpen && smoother) {
        smoother.paused(true);
      } else if (!isOpen && smoother) {
        smoother.paused(false);
      }
    } else {
      // Fallback: dispatch custom event for parent to handle
      const event = new CustomEvent('toggleNavMenu', { detail: { isOpen } });
      window.dispatchEvent(event);
    }
    // Cleanup: always resume ScrollSmoother on unmount
    return () => {
      if (typeof window !== 'undefined' && (window as any).ScrollSmoother) {
        const smoother = (window as any).ScrollSmoother.get && (window as any).ScrollSmoother.get();
        if (smoother) {
          smoother.paused(false);
        }
      } else {
        const event = new CustomEvent('toggleNavMenu', { detail: { isOpen: false } });
        window.dispatchEvent(event);
      }
    };
  }, [isOpen]);

  // Listen for route changes to close menu and resume ScrollSmoother
  useEffect(() => {
    setIsOpen(false);
    if (typeof window !== 'undefined' && (window as any).ScrollSmoother) {
      const smoother = (window as any).ScrollSmoother.get && (window as any).ScrollSmoother.get();
      if (smoother) {
        smoother.paused(false);
      }
    } else {
      const event = new CustomEvent('toggleNavMenu', { detail: { isOpen: false } });
      window.dispatchEvent(event);
    }
  }, [pathname]);

  // Add the subOptionUrls mapping from ModernNav
  const subOptionUrls: { [key: string]: string } = {
    "Private Limited Company": "/services/startup/private-limited-company",
    "Limited Liability Partnership (LLP)": "/services/startup/limited-liability-partnership-(llp)",
    "One Person Company (OPC)": "/services/startup/one-person-company-(opc)",
    "Section 8 Company": "/services/startup/section-8-company",
    "Partnership Firm": "/services/startup/partnership-firm",
    "Trust Registration": "/services/startup/trust-registration",
    "Public Company": "/services/startup/public-company",
    "Producer Company": "/services/startup/producer-company",
    "Nidhi Company": "/services/startup/nidhi-company",
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
    "GST Registration": "/services/gst/gst-registration",
    "GST Return Filing": "/services/gst/gst-return-filing",
    "GST Annual Return Filing (GSTR - 9)": "/services/gst/gst-annual-return-filing-(gstr-9)",
    "GST LUT Form": "/services/gst/gst-lut-form",
    "GST Tax Notice": "/services/gst/gst-tax-notice",
    "GST Amendment": "/services/gst/gst-amendment",
    "GST Revocation": "/services/gst/gst-revocation",
    "GSTR-10": "/services/gst/gstr-10",
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
    "FSSAI Renewal": "/services/compliance/fssai-renewal",
    "FSSAI Return Filing": "/services/compliance/fssai-return-filing",
    "HR & Payroll Services": "/services/compliance/hr-&-payrol-services",
    "PF Return Filing": "/services/compliance/pf-return-filing",
    "ESI Return Filing": "/services/compliance/esi-return-filing",
    "Professional Tax Return Filing": "/services/compliance/professional-tax-return-filing",
    "Partnership Compliance": "/services/compliance/partnership-compliance",
    "Proprietorship Compliance": "/services/compliance/proprietorship-compliance",
    "Book-keeping": "/services/compliance/book-keeping",
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

  // Map main menu index to icon folder
  const iconFolders = [
    "/main-icons/companies/",
    "/main-icons/trademark/",
    "/main-icons/registrations/",
    "/main-icons/gst/",
    "/main-icons/mca/",
    "/main-icons/compliance/",
    "/main-icons/itr/",
  ];

  // Icon filenames for each folder (manually copied from directory listing)
  const iconFiles = [
    [
      "trust-registration.png",
      "section-8-company.png",
      "producer-company.png",
      "public-company.png",
      "private-limited.png",
      "partnership-firm.png",
      "nidhi-company.png",
      "opc.png",
      "llp.png",
    ],
    [
      "Trademark_Hearing_Transparent__1_-removebg-preview.png",
      "Trademark Restoration.png",
      "Trademark Transfer.png",
      "Trademark Registration.png",
      "Trademark Renewal.png",
      "Trademark Rectification.png",
      "Trademark Opposition.png",
      "Trademark Objection.png",
      "Trademark Infringement Notice.png",
      "Trademark Certificate.png",
      "Logo Design + Trademark Protection.png",
      "Expedited Trademark Registration.png",
      "Design Registration.png",
      "Design Objection.png",
      "Copyright Registration.png",
      "Copyright Objections.png",
    ],
    [
      "halal.png",
      "WB RERA Registration.png",
      "Udyam Registration.png",
      "StartUp Registration.png",
      "Trade License.png",
      "SHOP AND ESTABLISHMENT ACT.png",
      "RCMC Registration.png",
      "Professional Tax Registration.png",
      "PF Registration.png",
      "ISO Registration.png",
      "ICEGATE Registration.png",
      "FSSAI Registration.png",
      "FSSAI License.png",
      "FIRE LICENSE.png",
      "FCRA REGISTRATION.png",
      "ESI Registration.png",
      "EPR CERTIFICATE.png",
      "Darpan Registration.png",
      "DRUG LICENSE.png",
      "DIGITAL SIGN.png",
      "80G Registration.png",
      "12A and 80G Registration.png",
      "12A Registration.png",
    ],
    [
      "gstr-10.png",
      "gst tax notice.png",
      "gst revocation.png",
      "gst return filing.png",
      "gst lut form.png",
      "gst annual return.png",
      "gst amendment.png",
      "Gst registration.png",
    ],
    [
      "winding-up-llp.png",
      "winding-up-company.png",
      "share-transfer.png",
      "share-transfer-2.png",
      "opc-compliance.png",
      "name-change-company.png",
      "moa-amenement.png",
      "llp-form-11-filling.png",
      "llp-compliance.png",
      "dpt-3-filling.png",
      "dormant-status-filing.png",
      "director-remove.png",
      "company registered office change.png",
      "company compliance.png",
      "aoa-amendment.png",
      "DIRECTOR CHANGE.png",
      "DIN RE-ACTIVATION.png",
      "DIN RE-ACTIVATION 2.png",
      "DIN E-KYC FILING.png",
      "DEMAT OF SHARES.png",
      "AUTHORIZED CAPITAL INCREASE.png",
      "APPOINTMENT OF AUDITOR.png",
    ],
    [
      "professional tax return filing.png",
      "book keeping.png",
      "Proprietorship Compliance.png",
      "Partnership Compliance.png",
      "PF Return Filing.png",
      "HR & Payroll Services.png",
      "FSSAI return filing.png",
      "FSSAI renewal.png",
      "ESI Return Filing.png",
    ],
    [
      "TDS.png",
      "TAN Registration.png",
      "ITR filing 4.png",
      "ITR filing 3.png",
      "ITR filing 2.png",
      "ITR filing 1.png",
      "ITR 7.png",
      "ITR 5.png",
      "INCOME TAX NOTICE.png",
      "15CA 15 CB FILING.png",
    ],
  ];

  // Helper to normalize text for matching
  function normalize(str: string) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .replace(/\s+/g, "");
  }

  // Helper to find icon for submenu option
  function getSubMenuIcon(mainIdx: number, subOption: string): string | null {
    const files = iconFiles[mainIdx] || [];
    const normSub = normalize(subOption);
    for (const file of files) {
      const base = file.replace(/\.[^.]+$/, "");
      if (normalize(base) === normSub) {
        return iconFolders[mainIdx] + file;
      }
    }
    // Try partial match if no exact
    for (const file of files) {
      const base = file.replace(/\.[^.]+$/, "");
      if (normalize(base).includes(normSub) || normSub.includes(normalize(base))) {
        return iconFolders[mainIdx] + file;
      }
    }
    return null;
  }

  // --- ICON MAPPING FUNCTIONS (copied from ModernNav) ---
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };
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
      <Image src={iconMap[label]} alt={label} width={22} height={22} style={{ marginRight: 10, verticalAlign: "middle", display: "inline-block" }} />
    ) : null;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" style={{ height: 24, width: 'auto'}} />
          </a>
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IconX className={styles.mobileToggle} />
          ) : (
            <IconMenu2 className={styles.mobileToggle} />
          )}
        </button>
      </header>

      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
        {activeMenu === "main" ? (
          <div className={styles.menu}>
            <div className={styles.scrollWrapper}>
              <div className={styles.menuOptions}>
                {mainOptions
                  .slice(0, mainOptions.length - 1)
                  .map((option, idx) => (
                    <div
                      key={idx}
                      className={styles.menuItem}
                      onClick={() => setActiveMenu(idx)}
                    >
                      {option}
                    </div>
                  ))}
                <div
                  className={styles.menuItem}
                  onClick={() => (window.location.href = "/about")}
                >
                  {mainOptions[mainOptions.length - 1]}
                </div>
              </div>
              <div className={styles.fadeTop} />
              <div className={styles.fadeBottom} />
            </div>
          </div>
        ) : (
          <div className={styles.subMenu}>
            <button
              className={styles.backButton}
            >
              <img 
                src="/gif/back-arrow.gif" 
                alt="Back" 
                style={{ height: 24, width: 24, transform: 'rotate(90deg)', filter: 'brightness(0.85) saturate(1.2) sepia(0.7) hue-rotate(-15deg)' }} 
                onClick={() => setActiveMenu("main")}
              />
            </button>
            <div className={styles.scrollWrapper}>
              <div className={styles.subOptions}>
                {Array.isArray(subMenus[activeMenu as number]) &&
                  (subMenus[activeMenu as number] as string[]).slice(0, 18).map((sub: string, idx: number) => {
                    let icon: React.ReactNode = null;
                    if (typeof activeMenu === "number") {
                      if (activeMenu === 0) icon = getCompanyIcon(sub);
                      else if (activeMenu === 1) icon = getTrademarkIcon(sub);
                      else if (activeMenu === 2) icon = getRegistrationIcon(sub);
                      else if (activeMenu === 3) icon = getGSTIcon(sub);
                      else if (activeMenu === 4) icon = getMCAIcon(sub);
                      else if (activeMenu === 5) icon = getComplianceIcon(sub);
                      else if (activeMenu === 6) icon = getITRIcon(sub);
                    }
                    return subOptionUrls[sub] ? (
                      <a key={idx} className={styles.subItem} href={subOptionUrls[sub]} tabIndex={0}>
                        {icon}
                        {sub}
                      </a>
                    ) : (
                      <div key={idx} className={styles.subItem}>
                        {icon}
                        {sub}
                      </div>
                    );
                  })}
              </div>
              <div className={styles.fadeTop} />
              <div className={styles.fadeBottom} />
            </div>
          </div>
        )}

        <button
          className={styles['button-17']}
          role="button"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>

        <div className={styles.socialIcons}>
          <div className={styles.socialIconsWrapper}>
            <SocialIcon network="whatsapp" url="https://wa.me/918697603824" bgColor="transparent" fgColor="#b40068" style={{ width: 50, height: 50 }} className="contact-gradient-icon" />
            <SocialIcon network="linkedin" url="https://www.linkedin.com/company/delfyle/" bgColor="transparent" fgColor="#b40068" style={{ width: 50, height: 50 }} className="contact-gradient-icon" />
            <SocialIcon network="instagram" url="https://www.instagram.com/delfyle_legal?igsh=MzU4ZW4xcjIxMWxw&utm_source=qr" bgColor="transparent" fgColor="#b40068" style={{ width: 50, height: 50 }} className="contact-gradient-icon" />
            <SocialIcon network="facebook" url="https://www.facebook.com/DelfyleSolutons?mibextid=2JQ9oc" bgColor="transparent" fgColor="#b40068" style={{ width: 50, height: 50 }} className="contact-gradient-icon" />
            <SocialIcon network="x" url="https://x.com/delfyle_co?s=21" bgColor="transparent" fgColor="#b40068" style={{ width: 50, height: 50 }} className="contact-gradient-icon" />
            <SocialIcon network="youtube" url="https://youtube.com/@Delfyle_legalservices?si=Z0GGMeIPguqcVZkK" bgColor="transparent" fgColor="#b40068" style={{ width: 50, height: 50 }} className="contact-gradient-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
