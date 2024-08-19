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
        destination: "https://github.com/gneiru/:slug*",
        source: "/gh/:slug*",
        permanent: true,
      },
      {
        destination: "https://github.com/gneiru",
        source: "/gh",
        permanent: true,
      },
      {
        destination: "https://github.com/gneiru/:slug*",
        source: "/github/:slug*",
        permanent: true,
      },
      {
        destination: "https://github.com/gneiru",
        source: "/github",
        permanent: true,
      },
      {
        destination: "https://www.linkedin.com/in/gneiru/",
        source: "/linkedin",
        permanent: true,
      },
      {
        destination: "https://x.com/gneiru/",
        source: "/twitter",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
