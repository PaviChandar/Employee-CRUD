// {
//     "presets": ["@babel/preset-react"]
// }

module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow',
    //   ["@babel/preset-env", { "targets": { "node": "current" }, "modules": true }],
    "@babel/preset-typescript"
    ],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
    ]
  }
  
