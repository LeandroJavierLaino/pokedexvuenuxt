module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
}
