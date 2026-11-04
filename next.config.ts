import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === "true" ? "/baderin-energies-consulting" : "",
  images: { unoptimized: true },
};

export default nextConfig;
