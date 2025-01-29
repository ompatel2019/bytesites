import React from 'react';
import { Helmet } from 'react-helmet';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Blogs from '../pages/blogs/Blogs';

const BlogsPage = ({ consistentLayout }) => {
  const blogsSec = 'Blogs';
  const pricingSec = 'Pricing';
  const contactSec = 'Contact Form';

  // Example JSON-LD describing the “collection of blog posts”
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog", 
    "name": "Bytesite Digital Blog",
    "description": "Collection of our latest insights and trends in digital services.",
    "url": "https://bytesitedigital.com.au/blogs"
  };

  return (
    <>
      <Helmet>
        <title>All Blogs - Bytesite Digital</title>
        <meta
          name="description"
          content="Explore our latest blog posts on SEO, web design, and digital marketing insights."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdBlogsPage)}</script>
      </Helmet>

      <Blogs
        blogsSec={blogsSec}
        consistentLayout={consistentLayout}
      />

      <Pricing
        pricing={pricingSec}
        consistentLayout={consistentLayout}
      />

      <ContactForm
        contactForm={contactSec}
        consistentLayout={consistentLayout}
      />
    </>
  );
};

export default BlogsPage;
