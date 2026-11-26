import type { NextConfig } from "next";

/**
 * Static export so the site can be hosted on any static host
 * (GitHub Pages, Vercel, Netlify, S3, Nginx).
 *
 * NEXT_PUBLIC_BASE_PATH is only needed when the site is served from a
 * sub-path, for example https://<user>.github.io/altway. Leave it empty
 * for a custom domain or a root deployment.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
