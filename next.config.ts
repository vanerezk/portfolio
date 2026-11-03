import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // react-pdf usa módulos de Node (fontkit, yoga): mejor no empaquetarlo.
  serverExternalPackages: ["@react-pdf/renderer"],
  async redirects() {
    // La raíz siempre lleva a la versión en español; /en es la alternativa.
    return [{ source: "/", destination: "/es", permanent: false }];
  },
};

export default nextConfig;
