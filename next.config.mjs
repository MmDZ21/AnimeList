import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer({
  experimental: {
    optimizePackageImports: ["@radix-ui"],
  },
  images: {
    domains: ['dev-api.alplayer.ir', 'anilist.top'],
  },
});
