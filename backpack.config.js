/* eslint-disable no-param-reassign */
const path = require('path')

module.exports = {
  webpack: config => {
    config.entry.main = './src/index.ts'
    config.resolve.extensions.push('.ts')
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
    }
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, path.resolve(__dirname, 'build')],
      },
    )
    return config
  },
}
