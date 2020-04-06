module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            ["@babel/env", { "targets": { "ie": 11 }, "useBuiltIns": "usage", "corejs": 3}],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        plugins: [   
        ]
    }
}