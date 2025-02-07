import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Blogs from './blogs/Blogs'; // or wherever your Blogs component is

const BlogsPage = ({ consistentLayout }) => {
  // Example JSON-LD
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs - Bytesite Digital",
    "description": "Collection of our latest insights and trends in digital services.",
    "url": "https://bytesitedigital.com.au/blogs"
  };

  return (
    <>
      <SeoHelmet
        title="All Blogs - Bytesite Digital"
        description="Explore our latest blog posts on SEO, web design, and digital marketing insights."
        jsonSchema={jsonLdBlogsPage}
      />

      <Blogs
        blogsSec="Our Blog"
        consistentLayout={consistentLayout}
      />

      <Pricing
        pricing="Pricing"
        consistentLayout={consistentLayout}
      />

      <ContactForm
        contactForm="Get in Touch"
        consistentLayout={consistentLayout}
      />
    </>
  );
};

export default BlogsPage;
