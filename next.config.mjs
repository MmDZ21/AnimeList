/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Authorization",
            value: "Bearer my-token", // Example value
          },
        ],
      },
    ];
  },
};

export default nextConfig;
