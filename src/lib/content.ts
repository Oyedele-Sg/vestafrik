import { defaultContent } from "@/content/home/default";
import { content as enUs } from "@/content/home/en-us";
import type { HomeContent } from "@/content/home/types";

export function getHomeContent(region?: string): HomeContent {
  if (!region) return defaultContent;
  if (region === "en-us" || region === "us") {
    return { ...defaultContent, ...enUs } as HomeContent;
  }
  return defaultContent;
}

