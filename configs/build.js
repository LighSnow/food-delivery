import esbuild from "esbuild";
import config from "./config.js";

esbuild.build({
    ...config,
    minify: true,
});
