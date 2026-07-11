const isProd = process.env.NODE_ENV === "production";

/** GitHub Pages project path — must match next.config basePath */
export const basePath = isProd ? "/Yajat31" : "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
