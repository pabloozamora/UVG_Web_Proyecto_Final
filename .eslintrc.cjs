module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended', 'airbnb', 'airbnb/rules/react',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    semi: 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
