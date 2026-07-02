import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  date: string;
  openGraphTitle: string;
  openGraphDescription: string;
  relatedPostSlugs?: string[];
  Content: () => ReactNode;
};
