import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const clientUrl =
  process.env.CLIENT_URL ||
  "https://hono-cloudflare-crud.f-eminn18.workers.dev";
