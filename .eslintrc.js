module.exports = {
  extends: ['standard', 'standard-react', 'prettier'],
  root: true,
  parser: 'babel-eslint',
  plugins: ['import', 'react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: '17.0'
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  rules: {
    semi: [2, 'never'],
    'no-console': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: false,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false
      }
    ]
  },
  overrides: [
    {
      files: ['./public/firebase-messaging-sw.js'],
      env: {
        browser: true
      },
      globals: {
        self: true,
        firebase: true,
        importScripts: true
      },
      rules: {
        'no-restricted-globals': 0,
        'no-console': 0
      }
    }
  ]
}
