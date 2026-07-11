import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "Yajat31";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
