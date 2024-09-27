/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://ashendagirls.net/"],
    loader: "default", // or 'akamai', 'cloudinary', 'imgix', 'vercel'
    path: "/_next/image", // (optional)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // (optional)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1536], // (optional)
    minimumCacheTTL: 60, // (optional)
  },
};

export default nextConfig;
