/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => {
  const isDev = phase === "phase-development-server";

  return {
    output: "export",
    distDir: isDev ? ".next-dev" : ".next",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  };
};

export default nextConfig;
