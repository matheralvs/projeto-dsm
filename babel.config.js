module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          alias: {
            '@app': './src/app',
            '@components': './src/components',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@services': './src/services',
            '@styles': './src/styles',
            '@store': './src/store',
          },
        },
      ],
    ],
  }
}
