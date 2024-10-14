<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  players: { name: string; money: number; position: number }[]
}>()

const boardSpaces = Array(40).fill(null).map((_, index) => `Space ${index + 1}`)

const getSpaceClass = (index: number) => {
  const baseClass = 'neon-border flex items-center justify-center text-xs p-1'
  if (index < 10) return `${baseClass} h-14 w-14 rotate-180`
  if (index < 20) return `${baseClass} h-14 w-14 -rotate-90`
  if (index < 30) return `${baseClass} h-14 w-14`
  return `${baseClass} h-14 w-14 rotate-90`
}

const getTextClass = (index: number) => {
  if (index < 10) return 'rotate-180'
  if (index < 20) return 'rotate-90'
  if (index < 30) return ''
  return '-rotate-90'
}

const getSpaceStyle = (index: number) => {
  let row, col
  if (index < 11) {
    row = 11
    col = 11 - index
  } else if (index < 20) {
    row = 21 - index
    col = 1
  } else if (index < 31) {
    row = 1
    col = index - 19
  } else {
    row = index - 29
    col = 11
  }
  return `grid-area: ${row} / ${col} / span 1 / span 1`
}
</script>

<template>
  <div class="grid grid-cols-11 grid-rows-11 gap-1 w-[616px] h-[616px] neon-border p-2">
    <div
      v-for="(space, index) in boardSpaces"
      :key="index"
      :class="getSpaceClass(index)"
      :style="getSpaceStyle(index)"
    >
      <span :class="getTextClass(index)">{{ space }}</span>
      <div v-for="player in players" :key="player.name">
        <div v-if="player.position === index" class="w-3 h-3 rounded-full bg-neon-red ml-1"></div>
      </div>
    </div>
  </div>
</template>