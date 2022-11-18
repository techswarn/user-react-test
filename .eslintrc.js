module.exports = {
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off'
      }
    },
    {
      files: ['*.js'], // Your JavaScript files extension
      extends: ['plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  root: true
};
