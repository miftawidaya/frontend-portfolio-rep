import React from 'react';
import Image from 'next/image';
import ContactForm from '@/components/forms/contact-form';

const Footer = () => {
  return (
    <footer className='bg-background relative overflow-hidden'>
      <div className='bg-footer-glow pointer-events-none absolute inset-0 z-0 h-full w-full' />

      <div className='custom-container relative z-10 pt-10 pb-20 md:pt-20 md:pb-30'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='border-border h-contact-h-mobile bg-card relative w-full overflow-hidden rounded-t-2xl border border-b-0 md:h-full md:rounded-s-2xl md:rounded-tr-none md:border-e-0 md:border-b'>
            <Image
              src='/images/img-contact.jpg'
              alt='Contact Portrait'
              fill
              className='rounded-t-2xl object-cover md:rounded-s-2xl md:rounded-tr-none'
              sizes='(max-width: 768px) 100vw, 600px'
              priority
            />
          </div>

          <ContactForm />
        </div>
      </div>

      <div className='border-foreground/10 relative z-10 border-t py-6 md:py-8'>
        <div className='custom-container flex justify-center text-center'>
          <p className='text-xs-regular md:text-md-regular text-muted-foreground tracking-tight'>
            &copy; 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
