module.exports = {
    "presets": ["@babel/preset-typescript", "@babel/preset-env", "@nrwl/react/babel"],
    "plugins": [
        "babel-plugin-replace-ts-export-assignment", 
        "@babel/plugin-transform-modules-commonjs", 
        ["@babel/plugin-transform-class-properties", {"loose": false}], 
        "@babel/plugin-transform-nullish-coalescing-operator",
    ["@babel/plugin-transform-private-property-in-object", { "loose": false }],
    ["@babel/plugin-transform-private-methods", { "loose": false }],
    ["@babel/plugin-transform-runtime", {
        "regenerator": true
      }]]
}