const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV !== "production",
        dest: "public",
        runtimeCaching,
    },
    images: {
        domains: [
            "desicovers.co.in",
            "s7g3.scene7.com",
            "images.pexels.com",
            "www.pexels.com",
            "cdn.shopify.com",
        ],
    },
    i18n,
    // exportPathMap: async function (
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId }
    // ) {
    //     return {
    //         "/": { page: "/" },
    //         "/about": { page: "/about" },
    //         "/p/hello-nextjs": {
    //             page: "/post",
    //             query: { title: "hello-nextjs" },
    //         },
    //         "/p/learn-nextjs": {
    //             page: "/post",
    //             query: { title: "learn-nextjs" },
    //         },
    //         "/p/deploy-nextjs": {
    //             page: "/post",
    //             query: { title: "deploy-nextjs" },
    //         },
    //     };
    // },
});
