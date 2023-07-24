import type { Config, Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const hasUpperCase = (string: string) => /\p{Lu}/u.test(string);

  if (!hasUpperCase(request.url)) {
    // return early if URL doesn't contain uppercase characters
    return;
  } else {
    // Force url to redirect to lowercase
    const url = new URL(request.url.toLowerCase());
    return Response.redirect(url); // 301 to lowercase version of page
    // return url; <- If you want to do a rewrite instead
  }
};

export const config: Config = {
  path: "/*",
  excludedPath: ["/*.css", "/*.js", "/@*", "/node_modules/*"],
};
