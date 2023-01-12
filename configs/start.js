import esbuild from "esbuild";
import config from "./config.js";

esbuild.build({
    ...config,
    watch: {
        onRebuild(error, result) {
            if (error) console.error("watch build failed:", error);
            else console.log("watch build succeeded:", result);
        },
    },
});
