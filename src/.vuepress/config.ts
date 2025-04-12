import { defineUserConfig } from "vuepress";
import theme from "./theme.js";



export default defineUserConfig({
  base: "/",


  lang: "zh-CN",
  title: "Muzi Lee",
  description: "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。",

  theme,

  head: [
    ["style", {}, `
      body {
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment:fixed;
        background: linear-gradient(90deg,rgb(234, 253, 237) 0%, #d9e7ff 100%)
      }
    `]
  ],

  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});


