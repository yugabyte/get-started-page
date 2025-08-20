import eslint from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import typescriptParser from '@typescript-eslint/parser';
import vueEslintParser from 'vue-eslint-parser';

export default [
  {
    ignores: [
      'dist/',
      'src-capacitor/',
      'src-cordova/',
      '.quasar/',
      'node_modules/',
      '.eslintrc.js',
      'src-ssr/',
    ],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        'vue/setup-compiler-macros': 'readonly',
        ga: 'readonly',
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
      },
    },
    plugins: {
      eslint: eslint,
      '@typescript-eslint': tseslint,
      vue: pluginVue,
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'prefer-promise-reject-errors': 'off',
      quotes: ['warn', 'single', { avoidEscape: true }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
  prettier,

  // Specific parser configuration for Vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptParser,
      },
    },
  },
];
