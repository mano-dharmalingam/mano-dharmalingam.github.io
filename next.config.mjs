/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // static export for GitHub Pages
  images: { unoptimized: true }, // required for static export
};

export default nextConfig;
