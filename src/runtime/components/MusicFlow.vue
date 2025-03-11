<template>
  <MusicFlow
    :options="props.options"
    :grid="props.grid"
    :hide-playlist-popup="props.hidePlaylistPopup"
  >
    <template
      v-for="slotName in Object.keys($slots)"
      #[slotName]="slotProps"
    >
      <slot
        :name="slotName"
        v-bind="slotProps"
      />
    </template>
  </MusicFlow>
</template>

<script lang="ts" setup>
import type { TMusicFlowOptions } from 'vue-music-flow'
import { MusicFlow } from 'vue-music-flow'

type Props = {
  options?: TMusicFlowOptions
  grid?: string
  hidePlaylistPopup?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hidePlaylistPopup: false,
})
</script>
