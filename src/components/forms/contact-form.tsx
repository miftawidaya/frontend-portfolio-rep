'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { ClipLoader } from 'react-spinners';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import {
  contactSchema,
  type ContactFormValues,
} from '@/lib/validations/contact';

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [showStatus, setShowStatus] = React.useState(false);
  const [statusVariant, setStatusVariant] = React.useState<'success' | 'error'>(
    'success'
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error('EmailJS environment variables are not set.');
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      form.reset();
      setStatusVariant('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusVariant('error');
    } finally {
      setLoading(false);
      setShowStatus(true);
    }
  };

  return (
    <div className='border-border bg-card flex flex-col rounded-b-2xl border py-6 ps-4 pe-4 md:rounded-e-2xl md:rounded-bl-none md:border-s-0 md:py-8 md:ps-5 md:pe-5'>
      <div className='mb-6 md:mb-8'>
        <h2 className='display-sm-bold md:display-2xl-bold text-foreground mb-4'>
          Start a Conversation
        </h2>
        <p className='text-md-regular md:text-lg-regular text-neutral-400'>
          I’m open to freelance gigs, collaborations, or even just a casual
          chat.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-6 md:gap-8'
        >
          <div className='flex flex-col gap-5 md:gap-6'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='gap-1 md:gap-3'>
                  <FormLabel className='text-sm-bold md:text-md-bold'>
                    Name<span className='text-error'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='What should I call you?...'
                      className='text-md-regular md:text-lg-regular focus:border-primary border-border h-15.5 border-b py-4 ps-2 pe-2 transition-colors md:h-16 md:ps-4 md:pe-4'
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='gap-1 md:gap-3'>
                  <FormLabel className='text-sm-bold md:text-md-bold'>
                    Email<span className='text-error'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='email'
                      placeholder='Where can I reach you? ...'
                      className='text-md-regular md:text-lg-regular focus:border-primary border-border h-15.5 border-b py-4 ps-2 pe-2 transition-colors md:h-16 md:ps-4 md:pe-4'
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem className='gap-1 md:gap-3'>
                  <FormLabel className='text-sm-bold md:text-md-bold'>
                    Message<span className='text-error'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Tell me about your project or just say hi :) ...'
                      className='text-md-regular md:text-lg-regular focus:border-primary border-border h-15.5 border-b py-4 ps-2 pe-2 transition-colors md:h-16 md:ps-4 md:pe-4'
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type='submit'
            disabled={loading}
            variant='secondary'
            className='text-sm-semibold md:text-md-semibold h-12 w-full rounded-lg transition-all'
          >
            {loading ? (
              <ClipLoader size={20} color='currentColor' />
            ) : (
              "Let's Build Something"
            )}
          </Button>
        </form>
      </Form>

      <FormStatusDialog
        open={showStatus}
        onOpenChange={setShowStatus}
        variant={statusVariant}
      />
    </div>
  );
};

export default ContactForm;
