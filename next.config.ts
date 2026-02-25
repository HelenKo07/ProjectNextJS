import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Turbopack uses this project folder as the workspace root.
  // This silences the "inferred workspace root" warning when multiple
  // lockfiles exist on the machine.
  turbopack: {
    // Use an absolute path at runtime — Node's __dirname is the project's folder.
    // Next/Turbopack prefers an absolute path for `turbopack.root`.
    root: __dirname,
  },
};

export default nextConfig;
