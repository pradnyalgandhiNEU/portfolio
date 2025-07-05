import type { NextConfig } from "next";

const repoName = "pradnyalgandhiNEU.github.io";
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
