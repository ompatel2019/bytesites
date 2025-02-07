import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import PageTitle from '../components/PageTitle';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Faqs from '../components/Faqs';

const WhyChooseUsPage = () => {
  // JSON-LD Example
  const jsonLdWhyChooseUs = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Us - Bytesite Digital",
    "description": "Learn why Bytesite Digital is the best partner for your online success—speed, SEO, and top-tier design.",
    "url": "https://bytesitedigital.com.au/whychooseus"
  };

  return (
    <>
      <SeoHelmet
        title="Why Choose Us - Bytesite Digital"
        description="Discover the unique advantages Bytesite Digital brings to your online presence—from blazing fast speeds to powerful SEO strategies."
        jsonSchema={jsonLdWhyChooseUs}
      />

      <PageTitle
        pageTitle='Why Choose Us'
        pageRoute='Home / Why Choose Us'
        dividerBackground='bg-black'
        dividerFill='#111111'
        backgroundColour='bg-c4-0'
        textColour='text-c1-0'
      />

      <WhyChooseUs
        whyChooseUS="Why Choose Us"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <CTA />

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

export default WhyChooseUsPage;
