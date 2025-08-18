import app from "./dev.server";
import { serve } from "@hono/node-server";

serve({
  fetch: app.fetch,
  port: 3000, // You can change the port if needed
  hostname: "localhost",
});
