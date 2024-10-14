<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  player: { name: string; money: number; position: number }
  isCurrentPlayer: boolean
}>()
</script>

<template>
  <div :class="['p-4 rounded neon-border', { 'bg-neon-red bg-opacity-20': isCurrentPlayer }]">
    <h2 class="text-xl font-bold mb-2 neon-text">{{ player.name }}</h2>
    <p>Money: ${{ player.money }}</p>
    <p>Position: {{ player.position }}</p>
  </div>
</template>