import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import serverAdapter from "hono-react-router-adapter/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    serverAdapter({
      entry:
        process.env.NODE_ENV === "production"
          ? ".bin/prod.server.ts"
          : ".bin/dev.server.ts",
    }),
  ],
});
