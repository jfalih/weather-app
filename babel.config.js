const moduleResolver = [
  'module-resolver',
  {
    cwd: 'babelrc',
    root: ['.'],
    extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@assets': './src/assets',
      '@const': './src/services/consts',
      '@utils': './src/core/utils',
      '@request': './src/core/http/request',
      '@swr': './src/core/http/swr',
      '@url': './src/core/http/url',
      '@components': './src/presentation/components',
      '@atoms': './src/presentation/components/atoms',
      '@molecules': './src/presentation/components/molecules',
      '@organisms': './src/presentation/components/organisms',
      '@templates': './src/presentation/components/templates',
      '@navigation': './src/navigation',
      '@pages': './src/presentation/pages',
      '@contexts': './src/services/contexts',
      '@hooks': './src/services/hooks',
      '@i18n': './src/i18n',
    },
  },
];

const globalConfig = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: ['react-native-reanimated/plugin', moduleResolver],
};

module.exports = {
  env: {
    production: {
      ...globalConfig,
      plugins: [...globalConfig.plugins, 'transform-remove-console'],
    },
    development: {
      ...globalConfig,
    },
  },
};
