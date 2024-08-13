import "./src/env.mjs";

const nextConfig = {
  experimental: {
    ppr: true,
  },
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
  headers: () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
    frame-src 'self' *.codesandbox.io vercel.live;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

export default nextConfig;
