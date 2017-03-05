const liteDevServer = require("lite-dev-server");
liteDevServer({
    folder: "public",
    watchFolders: ["src", "api-on-koa"],
    liveReloadDelay: 1000,
    proxy: [
        { path: "api", host: "localhost", port: "8888" },
    ]
});