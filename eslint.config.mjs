// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  prettierRecommended,
)
