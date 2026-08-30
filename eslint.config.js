import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  // Ignore build output and generated files
  ignores: ['dist', 'node_modules'],
})
