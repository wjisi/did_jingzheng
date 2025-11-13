import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    // presetWind4({
    //   preflights: {
    //     reset: true,
    //   },
    // }),
    presetWind3(),
    presetIcons(),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true,
    }),
  ],
})
