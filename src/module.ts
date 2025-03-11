import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImports } from '@nuxt/kit'

import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  isGlobal: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'musicFlow',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    isGlobal: false,
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add css for vue-music-flow
    _nuxt.options.css = _nuxt.options.css || []
    _nuxt.options.css.push('vue-music-flow/dist/vue-music-flow.css')

    // Transpile module
    _nuxt.options.build.transpile.push('vue-music-flow')

    // Add components
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      global: _options.isGlobal,
      isAsync: true,
    })

    // Add composable
    addImports({
      name: 'useMusicFlow',
      as: 'useMusicFlow',
      from: resolver.resolve('./runtime/composables/useMusicFlow'),
    })
  },
})
