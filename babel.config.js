module.exports = {
  presets: ['@babel/preset-env', '@babel/typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-numeric-separator',
    ['@babel/proposal-class-properties', { loose: true }],
    '@babel/proposal-object-rest-spread',
  ],
};
