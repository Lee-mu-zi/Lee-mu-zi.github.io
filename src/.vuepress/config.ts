import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",


  lang: "zh-CN",
  title: "Muzi Lee",
  description: "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。",

  theme,
  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});


