export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = import.meta.env.VITE_APP_LOGO || "/logo.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Contact information
export const CONTACT_INFO = {
  phone: "804-621-2389",
  email: "hello@remnantsbloom.com",
  address: "Colonial Heights, Virginia",
  addressNote: "By appointment only",
  hours: {
    weekday: "Mon-Fri: 9AM-8PM EST",
    weekend: "Weekend orders processed Monday"
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579820983573",
    instagram: "https://www.instagram.com/remnantsbloom/",
    x: "https://x.com/remnants_bloom"
  }
};

// Brand information
export const BRAND_INFO = {
  tagline: "Gentle, natural care—crafted by hand, rooted in hope.",
  heroBlurb: "Handcrafted in Colonial Heights, VA, Remnant's Bloom makes small-batch soaps, body creams, and scrubs with gentle, natural ingredients—created for sensitive skin, finished with modern farmhouse elegance, and crafted with hope and honesty in every pour.",
  mission: "To create gentle, natural, small-batch soaps and skincare that nurture sensitive skin, honor the earth, and inspire everyday moments of grace.",
  vision: "To become a trusted name in handcrafted bath and body care—where every product reflects faith, hope, and the beauty found in life's simple, sustainable choices."
};