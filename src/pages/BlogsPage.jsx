import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Blogs from './blogs/Blogs';
import PageTitle from '../components/PageTitle';

const BlogsPage = ({ consistentLayout }) => {
  // Example JSON-LD
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs - Bytesite Digital",
    "description": "Explore our latest blog posts on SEO, web design, and digital marketing insights—tailored for all businesses.",
    "url": "https://bytesitedigital.com.au/blogs"
  };

  return (
    <>
      <PageTitle
        pageTitle="Blogs"
        pageRoute="Home / Blogs"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-c4-0"
        textColour="text-c1-0"
      />

      <SeoHelmet
        title="All Blogs - Bytesite Digital"
        description="Explore our latest blog posts on SEO, web design, and digital marketing insights—tailored for all businesses."
        canonicalUrl="https://bytesitedigital.com.au/blogs"
        jsonSchema={jsonLdBlogsPage}
      />

      <Blogs blogsSec="Our Blog" consistentLayout={consistentLayout} />

      <Pricing pricing="Pricing" consistentLayout={consistentLayout} />

      <ContactForm contactForm="Get in Touch" consistentLayout={consistentLayout} />
    </>
  );
};

export default BlogsPage;
