import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';

const ContactPage = () => {
  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact - Bytesite Digital",
    "description": "Get in touch with Bytesite Digital for website inquiries and SEO solutions in Blacktown & Sydney region.",
    "url": "https://bytesitedigital.com.au/contact"
  };

  return (
    <>
      <SeoHelmet
        title="Contact Us - Bytesite Digital"
        description="Reach out to Bytesite Digital for custom web development, SEO, and other digital services in Blacktown & across the Sydney region. Let's make it happen."
        canonicalUrl="https://bytesitedigital.com.au/contact"
        jsonSchema={jsonLdContact}
      />

      <PageTitle
        pageTitle="Contact Us"
        pageRoute="Home / Contact"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-c4-0"
        textColour="text-c1-0"
      />

      <ContactForm
        contactForm="Get in Touch"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <Faqs
        faqsSec="FAQs"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />
      <CTA />
    </>
  );
};

export default ContactPage;
