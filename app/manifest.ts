import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "開店小工具箱｜餐飲毛利、開店成本、損益兩平試算工具",
    short_name: "開店工具箱",
    description:
      "餐飲店、小吃店、飲料店常用的營運試算工具，包含餐飲毛利率、滿額加購、折扣活動、菜單漲價、外送平台抽成、開店成本、損益兩平與人事成本占比試算。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#fff7ed",
    theme_color: "#ea580c",
    categories: ["business", "productivity", "utilities"],
    lang: "zh-Hant-TW",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
