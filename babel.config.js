module.exports = {
  "presets": [
    ["@babel/preset-env", {}],
    ["@babel/preset-react", {}],
    ["@babel/preset-typescript", {}]
  ],
  "plugins": [
      ["@babel/plugin-syntax-dynamic-import", {}],
      ["@babel/plugin-transform-optional-chaining", {}],
      ["@babel/plugin-transform-class-properties", { "loose": true }]
  ]
}