/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/netflix-n1",
  assetPrefix: "/netflix-n1/",
  trailingSlash: true,
};

export default nextConfig;