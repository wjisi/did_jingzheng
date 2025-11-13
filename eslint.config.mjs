/* https://github.com/antfu/eslint-config */
import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
  },

  // typescript: {
  //   tsconfigPath: 'tsconfig.json',
  // },
  rules: {
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-exports': 'off',
    'perfectionist/sort-named-exports': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
    'no-console': 'off',
    'prefer-const': 'off',
  },
})
