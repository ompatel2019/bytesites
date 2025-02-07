import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import PageTitle from '../components/PageTitle';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Faqs from '../components/Faqs';

const ServicesPage = () => {
  // JSON-LD Example
  const jsonLdServices = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services - Bytesite Digital",
    "description": "Explore our range of web and digital marketing services at Bytesite Digital.",
    "url": "https://bytesitedigital.com.au/services"
  };

  return (
    <>
      <SeoHelmet
        title="Services - Bytesite Digital"
        description="Discover how our services—from design and development to SEO—can elevate your online presence."
        jsonSchema={jsonLdServices}
      />

      {/* Page Title (background = bg-c-4-0, text c1-0, font = dm-sans, h1 for pageTitle) */}
      <PageTitle
        pageTitle='Services'
        pageRoute='Home / Services'
        dividerBackground='bg-black'
        dividerFill='#111111'
        backgroundColour='bg-c4-0'
        textColour='text-c1-0'
      />

      {/* Actual Services content */}
      <Services
        servicesSection="Our Services"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      {/* CTA */}
      <CTA />

      {/* FAQ */}
      <Faqs
        faqsSec='Frequently Asked Questions'
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />
    </>
  );
};

export default ServicesPage;
