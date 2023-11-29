const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
    return {
        mode: argv.mode,
        entry: "./src/index.ts",
        output: {
            path: path.resolve(__dirname, "lib"),
            filename: env.cjs ? "cjs/index.js" : "esm/index.js",
            library: "ui-library-testing-junaid",
            libraryTarget: "umd",
            umdNamedDefine: true,
            globalObject: "typeof self !== 'undefined' ? self : this", // Required for server rendering
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: env.cjs ? "cjs/styles.css" : "esm/styles.css",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [require("tailwindcss"), require("autoprefixer")],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: [
                        "babel-loader",
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: env.cjs
                                    ? path.resolve(__dirname, "config", "tsconfig.cjs.json")
                                    : "tsconfig.json",
                            },
                        },
                    ],
                },
            ],
        },
        devtool: "source-map",
        target: "node",
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        externals: {
            react: "commonjs react", // Tell webpack to use external versions of React and React DOM and Tailwind for server rendering
            "react-dom": "commonjs react-dom",
            tailwindcss: "tailwindcss",
        },
    };
};
