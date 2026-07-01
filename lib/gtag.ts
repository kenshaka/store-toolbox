export type GtagEventParameters = Record<
  string,
  string | number | boolean | null | undefined
>;

export function trackEvent(
  eventName: string,
  parameters: GtagEventParameters = {},
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const sanitizedParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== null && value !== undefined),
  );

  window.gtag("event", eventName, sanitizedParameters);
}
