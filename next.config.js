/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  env: {
    PUBLIC_URL:
      process.env.NODE_ENV === "production"
        ? "https://mui-zahran-app.vercel.app/"
        : "http://localhost:3000",
  },
  ...nextTranslate(),
};

module.exports = nextConfig;
