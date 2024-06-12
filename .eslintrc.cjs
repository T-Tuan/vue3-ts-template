module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
    './config/.eslintrc-auto-import.json',
  ],
  ignorePatterns: ['public/tinymce/**'],
  // plugins: ['import'],
  globals: {
    dayjs: true,
    lodash: true,
    // ls: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'no-empty': 'warn',
    'no-case-declarations': 'off',
    'vue/multi-word-component-names': 'off',
    'prefer-template': 'error',
    indent: 'off',
    'vue/no-unused-vars': 'warn',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'import/no-unresolved': 'off',
    // 'import/no-duplicates': ['error'],
  },
  settings: {
    typescript: true,
  },
};
