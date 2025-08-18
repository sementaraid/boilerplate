import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layout/basic/index.tsx", [
    route("/", "./pages/home/index.tsx"),
    route("/contact-us", "./pages/contact-us/index.tsx"),
  ]),
] satisfies RouteConfig;
