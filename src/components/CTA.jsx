import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { GoArrowUpRight } from "react-icons/go";


const CTA = () => {
  return (
    <>
        <div className='responsivePad bg-c1-0 py-16 space-y-8'>

            <h2 className='text-c4-0 font-dm-sans h4 font-semibold'>
                Seen enough? Get in touch now to claim a FREE website blueprint for your business! 
            </h2>

            <p className='h7 font-questrial text-c4-0'>
                'insert text here'
            </p>

            <div className='flex space-x-1 items-center p-2 bg-c4-0 font-dm-sans h7 rounded-md text-c1-0 hover:px-8 transition-all w-fit px-4'>
                <HashLink smooth to='/contact' className=''>
                    Get Started
                </HashLink>

                <GoArrowUpRight/>
            </div>

        </div>
    </>
  )
}

export default CTA