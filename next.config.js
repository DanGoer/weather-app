/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
