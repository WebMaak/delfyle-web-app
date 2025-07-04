import React from 'react';
import Image from 'next/image';
import styles from './ModernFooter.module.css';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ModernFooter = () => {
    const footerLinks = {
        startup: [
            { name: "Private Limited Company", link: "/services/startup/private-limited-company" },
            { name: "Limited Liability Partnership", link: "/services/startup/limited-liability-partnership-(llp)" },
            { name: "One Person Company", link: "/services/startup/one-person-company-(opc)" },
            { name: "Section 8 Company", link: "/services/startup/section-8-company" },
            { name: "Partnership Firm", link: "/services/startup/partnership-firm" },
        ],
        trademark: [
            { name: "Trademark Registration", link: "/services/trademark/trademark-registration" },
            { name: "Trademark Objection", link: "/services/trademark/trademark-objection" },
            { name: "Trademark Certificate", link: "/services/trademark/trademark-certificate" },
            { name: "Design Registration", link: "/services/trademark/design-registration" },
            { name: "Copyright Registration", link: "/services/trademark/copyright-registration" },
        ],
        registration: [
            { name: "StartUp Registration", link: "/services/registrations/startup-registration" },
            { name: "FSSAI Registration", link: "/services/registrations/fssai-registration" },
            { name: "ISO Registration", link: "/services/registrations/iso-registration" },
            { name: "Trade License", link: "/services/registrations/trade-license" },
            { name: "Digital Signature", link: "/services/registrations/digital-signature" },
        ],
        gst: [
            { name: "GST Registration", link: "/services/gst/gst-registration" },
            { name: "GST Return Filing", link: "/services/gst/gst-return-filing" },
            { name: "GST Annual Return", link: "/services/gst/gst-annual-return-filing-(gstr-9)" },
            { name: "GST LUT Form", link: "/services/gst/gst-lut-form" },
            { name: "GST Revocation", link: "/services/gst/gst-revocation" },
        ],
        compliance: [
            { name: "FSSAI Renewal", link: "/services/compliance/fssai-renewal" },
            { name: "HR & Payroll Services", link: "/services/compliance/hr-&-payrol-services" },
            { name: "PF Return Filing", link: "/services/compliance/pf-return-filing" },
            { name: "Book-keeping", link: "/services/compliance/book-keeping" },
            { name: "Partnership Compliance", link: "/services/compliance/partnership-compliance" },
        ],
        services: [
            { name: "Company Compliance", link: "/services/mca/company-compliance" },
            { name: "LLP Compliance", link: "/services/mca/llp-compliance" },
            { name: "Director Change", link: "/services/mca/director-change" },
            { name: "AOA Amendment", link: "/services/mca/aoa-amendment" },
            { name: "Share Transfer", link: "/services/mca/share-transfer" },
        ],
        incomeTax: [
            { name: "ITR-1 Return Filing", link: "/services/income-tax/itr-1-return-filing" },
            { name: "ITR-2 Return Filing", link: "/services/income-tax/itr-2-return-filing" },
            { name: "TDS Return Filing", link: "/services/income-tax/tds-return-filing" },
            { name: "Income Tax Notice", link: "/services/income-tax/income-tax-notice" },
            { name: "TAN Registration", link: "/services/income-tax/tan-registration" },
        ],
        about: [
            { name: "About Us", link: "/about" },
            { name: "Careers", link: "#" },
            { name: "Contact us", link: "#" },
        ],
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                         <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={250} height={250} />
                    </div>
                    <h2 className={styles.title}>Ready to get started?</h2>
                    <p className={styles.subtitle}>Contact us today to discuss your needs and find out how we can help you achieve your goals.</p>
                    <a href="/contact" className={styles.ctaButton}>
                        Contact Us <FiArrowRight className={styles.ctaIcon} />
                    </a>
                </div>

                <div className={styles.linksSection}>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Startup</h3>
                        <ul>
                            {footerLinks.startup.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Trademark</h3>
                        <ul>
                            {footerLinks.trademark.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Registration</h3>
                        <ul>
                            {footerLinks.registration.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// GST</h3>
                        <ul>
                            {footerLinks.gst.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Compliance</h3>
                        <ul>
                            {footerLinks.compliance.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// MCA</h3>
                        <ul>
                            {footerLinks.services.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Income Tax</h3>
                        <ul>
                            {footerLinks.incomeTax.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// About</h3>
                        <ul>
                            {footerLinks.about.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.bottomSection}>
                    <div className={styles.newsletter}>
                        <h3 className={styles.newsletterTitle}>Chat with our expert</h3>
                        <p className={styles.newsletterSubtitle}>Have questions? Get in touch with our team for expert guidance on all your compliance and registration needs.</p>
                    </div>
                    <div className={styles.whatsappAction}>
                        <a href="https://wa.me/917439587419" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                            <FaWhatsapp className={styles.whatsappIcon} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>


                <div className={styles.legalSection}>
                    <p className={styles.copyright}>©2025 Delfyle, All rights reserved. Crafted by <a href="https://wa.me/918759475316" className={styles.webmaakLink}>WebMaak</a></p>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter; 