import { Links, Meta, Outlet, Scripts } from "react-router";
import "./app.css"

const meta = () => {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "React Router Training Sunar" },
    {
      tagName: "link",
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      tagName: "link",
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      tagName: "link",
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      tagName: "link",
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ];
}

const App = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

export { meta };
export default App;