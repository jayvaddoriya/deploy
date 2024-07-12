/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: [
      "cdn.sanity.io",
      "www.bankrate.com",
      "i.insider.com",
      "cdn.apartmenttherapy.info",
      "cdn.cheapism.com",
      "cdn.gobankingrates.com",
      "bestlifeonline.com",
      "www.drwealth.com",
      "imgix.bustle.com",
      "images.unsplash.com",
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/service-page/debt-relief-consultation",
        destination: "/book-online",
        permanent: true,
      },
      {
        source:
          "/article/saving-child-care-means-preserving-jobs-supporting-working-families-small-businesses",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
