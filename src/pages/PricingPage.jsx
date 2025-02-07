import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import PageTitle from '../components/PageTitle';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Faqs from '../components/Faqs';

const PricingPage = () => {
  const jsonLdPricing = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - Bytesite Digital",
    "description": "Learn about our affordable pricing for web design, development, and SEO services in Blacktown & the Sydney region.",
    "url": "https://bytesitedigital.com.au/pricing"
  };

  return (
    <>
      <SeoHelmet
        title="Pricing - Bytesite Digital"
        description="Find budget-friendly plans and transparent pricing for custom websites, SEO, and hosting in Blacktown & throughout Sydney."
        jsonSchema={jsonLdPricing}
      />

      <PageTitle
        pageTitle='Pricing'
        pageRoute='Home / Pricing'
        dividerBackground='bg-black'
        dividerFill='#111111'
        backgroundColour='bg-c4-0'
        textColour='text-c1-0'
      />

      <Pricing
        pricing="Our Pricing"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <WhyChooseUs
        whyChooseUS="Our Edge"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <CTA />

      <Faqs
        faqsSec='FAQs'
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />
    </>
  );
};

export default PricingPage;
