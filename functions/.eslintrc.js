module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    'plugin:react/recommended',
    // 'plugin:compat/recommended',
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
    'require-jsdoc': "off",
    'react/prop-types': "off",
    'arrow-parens': "off",
    'max-len': "off",
    'no-undef': "off",
    'quotes': "off",
    'no-debugger': "off",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '16.14.1',
    },
  },
  plugins: [
    'react',
  ],
};
