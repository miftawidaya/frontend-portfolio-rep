'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  const isSuccess = variant === 'success';

  let buttonLabel: string;
  if (loading) {
    buttonLabel = 'Processing...';
  } else if (isSuccess) {
    buttonLabel = 'Close';
  } else {
    buttonLabel = 'Try Again';
  }

  return (
    <Dialog {...props}>
      <DialogContent className='w-[calc(100%-2rem)] max-w-90.25 border-none bg-transparent p-0 shadow-none outline-none md:max-w-115.25'>
        <div className='bg-card isolation-isolate relative flex flex-col items-center gap-6 rounded-2xl ps-6 pe-6 pt-25 pb-6 md:gap-8 md:ps-6 md:pe-6 md:pt-30 md:pb-6'>
          {/* Status Icon */}
          <div className='-top-status-icon-offset size-status-icon absolute left-1/2 z-10 -translate-x-1/2'>
            <Image
              src={
                isSuccess
                  ? '/icons/icon-form-message-success.svg'
                  : '/icons/icon-form-message-error.svg'
              }
              alt={variant}
              fill
              className='object-contain'
              priority
            />
          </div>

          {/* Content Group */}
          <div className='flex flex-col items-center gap-0.5 self-stretch text-center md:gap-2'>
            <DialogTitle className='text-lg-bold md:text-xl-bold text-foreground'>
              {isSuccess ? 'Message Sent Successfully!' : 'Send Failed'}
            </DialogTitle>
            <DialogDescription className='text-sm-regular md:text-md-regular tracking-[-0.03em] text-neutral-400'>
              {isSuccess ? (
                <>
                  Thank you for reaching out.
                  <br />
                  I’ll get back to you as soon as possible
                </>
              ) : (
                "Something broke along the way. Let's try resending it."
              )}
            </DialogDescription>
          </div>

          {/* Action Button */}
          <Button
            variant='secondary'
            className='h-11 w-full md:h-12'
            onClick={() => props.onOpenChange?.(false)}
            disabled={loading}
          >
            {buttonLabel}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
