import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.tmdb.org",
      "media.themoviedb.org",
      "raw.githubusercontent.com",
      "dosbg3xlm0x1t.cloudfront.net",
      "i.scdn.co",
    ],
  },
};

export default withNextIntl(nextConfig);
