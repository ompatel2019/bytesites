import React from 'react';
import { Helmet } from 'react-helmet';
import useScreenWidth from '../hooks/useScreenWidth';

import Hero from '../components/Hero';
import SlidingText from '../components/SlidingText';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Blogs from '../pages/blogs/Blogs';
import Faqs from '../components/Faqs';

const HomePage = ({ consistentLayout, hoverBg }) => {
  const screenWidth = useScreenWidth();

  const jsonLdHome = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bytesite Digital",
    "url": "https://bytesitedigital.com.au/",
    "description": "Professional web development and SEO services for Blacktown & the Sydney region.",
    "sameAs": [
      "https://www.facebook.com/BytesiteDigital",
      "https://www.linkedin.com/company/bytesite-digital"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Home - Bytesite Digital</title>
        <meta
          name="description"
          content="Bytesite Digital offers responsive, high-performance websites—serving businesses in Blacktown and across the Sydney region. Optimized for all devices."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdHome)}</script>
      </Helmet>

      <Hero
        hoverBg={hoverBg}
        consistentLayout={consistentLayout}
        screenWidth={screenWidth}
      />
      <SlidingText />
      <Services
        servicesSection="Services"
        consistentLayout={consistentLayout}
        screenWidth={screenWidth}
      />
      <WhyChooseUs
        whyChooseUS="Why Choose Us"
        consistentLayout={consistentLayout}
      />
      <Portfolio
        portfolio="Portfolio"
        consistentLayout={consistentLayout}
      />
      <Pricing
        pricing="Pricing"
        consistentLayout={consistentLayout}
      />
      <ContactForm
        contactForm="Contact Form"
        consistentLayout={consistentLayout}
      />
      <Blogs
        blogsSec="Blogs"
        consistentLayout={consistentLayout}
      />
      <Faqs
        faqsSec="FAQs"
        consistentLayout={consistentLayout}
      />
    </>
  );
};

export default HomePage;
