import createMiddleware from 'next-intl/middleware';
import { Pathnames, LocalePrefix } from 'next-intl/routing';

// import { localePrefix, defaultLocale, locales, pathnames } from './config';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ko'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ko: '/pfadnamen'
  }
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ko|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};