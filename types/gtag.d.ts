export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}
