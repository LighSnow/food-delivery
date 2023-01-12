import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import { sassPlugin } from "esbuild-sass-plugin";

const config = {
    entryPoints: ["./assets/js/index.js", "./assets/js/account-settings.js", "./assets/js/login.js"],
    assetNames: "/[dir]/[name]-[hash]",
    bundle: true,
    outdir: "build",
    loader: {
        ".png": "file",
        ".svg": "file",
        ".woff": "file",
        ".woff2": "file",
        ".ttf": "dataurl",
    },
    plugins: [
        sassPlugin(),
        clean(),
        copy({
            assets: [
                {
                    from: "./assets/images/**/*",
                    to: "./images",
                    keepStructure: true,
                },
                {
                    from: "./assets/fonts/**/*",
                    to: "./fonts",
                    keepStructure: true,
                },
            ],
        }),
    ],
    logLevel: "info",
};

export default config;
