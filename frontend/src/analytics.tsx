// src/analytics.ts

// Just replace with your real GA ID
export const GA_TRACKING_ID = 'G-SRKHHNYVJL';

// Send pageview event
export const pageview = (url: string) => {
  if (!(window as any).gtag) return;
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Send custom events
export const event = ({
  action,
  params,
}: {
  action: string;
  params?: Record<string, any>;
}) => {
  if (!(window as any).gtag) return;
  (window as any).gtag('event', action, params);
};
