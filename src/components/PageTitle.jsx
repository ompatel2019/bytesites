import React from 'react';

const PageTitle = ({ pageTitle, pageRoute, dividerBackground, dividerFill, backgroundColour, textColour }) => {
  return (
    <>
      <section className={`bg-c1-0 text-c4-0 space-y-12 max-md:space-y-4`}>
        <div className='space-y-4 responsivePad py-48 text-center'>
          <h1 className='h1 font-dm-sans font-black'>
            {pageTitle}
          </h1>
          <p className='h7 font-dm-sans font-medium'>
            {pageRoute}
          </p>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
