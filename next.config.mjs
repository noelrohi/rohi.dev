import "./src/env.mjs";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  redirects: () => {
    return [
      {
        destination: "https://github.com/noelrohi/:slug*",
        source: "/gh/:slug*",
        permanent: true,
      },
      {
        destination: "https://github.com/noelrohi",
        source: "/gh",
        permanent: true,
      },
      {
        destination: "https://github.com/noelrohi/:slug*",
        source: "/github/:slug*",
        permanent: true,
      },
      {
        destination: "https://github.com/noelrohi",
        source: "/github",
        permanent: true,
      },
      {
        destination: "https://www.linkedin.com/in/noelrohi/",
        source: "/linkedin",
        permanent: true,
      },
      {
        destination: "https://x.com/noelrohi/",
        source: "/twitter",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
