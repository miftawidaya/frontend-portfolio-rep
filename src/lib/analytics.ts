'use client';

import { sendGAEvent } from '@next/third-parties/google';

/** GA Event Categories -- extend this union as new sections are added */
type EventCategory =
  | 'navbar'
  | 'hero'
  | 'projects'
  | 'faq'
  | 'contact'
  | 'social';

/** Guard: all helpers become no-ops when GA is not configured */
function isGAEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
}

/** Core helper -- wraps sendGAEvent with a production guard */

/**
 * Send a GA4 event. No-op when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is not set,
 * so calling code never needs to check whether analytics is active.
 */
export function trackEvent(
  action: string,
  category: EventCategory,
  label: string,
  value?: number
): void {
  if (isGAEnabled() === false) return;

  sendGAEvent('event', action, {
    event_category: category,
    event_label: label,
    ...(value !== undefined && { value }),
  });
}

/** Shortcut helpers -- keeps call-sites concise and consistent */

/** Track a generic link or button click. */
export function trackClick(category: EventCategory, label: string): void {
  trackEvent('click', category, label);
}

/** Track an outbound social-media click (sets transport type for reliability). */
export function trackSocialClick(platform: string, url: string): void {
  if (isGAEnabled() === false) return;

  sendGAEvent('event', 'social_click', {
    event_category: 'social',
    event_label: platform,
    outbound_url: url,
    transport_type: 'beacon',
  });
}

/** Track a form submission with its outcome. */
export function trackFormSubmit(
  formName: string,
  status: 'success' | 'error'
): void {
  trackEvent('form_submit', 'contact', `${formName}_${status}`);
}

/** Track an FAQ accordion open. */
export function trackFaqInteraction(question: string): void {
  trackEvent('faq_open', 'faq', question);
}
