/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",

  basePath: isGitHubPages ? "/netflix-n1" : "",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;