<script setup lang="ts">
import GameBoard from './components/GameBoard.vue'
import PlayerInfo from './components/PlayerInfo.vue'
import { ref } from 'vue'

const players = ref([
  { name: 'Player 1', money: 1500, position: 0 },
  { name: 'Player 2', money: 1500, position: 0 },
])

const currentPlayerIndex = ref(0)

const rollDice = () => {
  const roll = Math.floor(Math.random() * 6) + 1
  players.value[currentPlayerIndex.value].position = (players.value[currentPlayerIndex.value].position + roll) % 40
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 class="text-4xl mb-8 neon-text">Monopoly-like Game</h1>
    <div class="flex flex-wrap justify-center items-start gap-8">
      <GameBoard :players="players" />
      <div class="flex flex-col gap-4">
        <PlayerInfo v-for="(player, index) in players" :key="index" :player="player" :isCurrentPlayer="index === currentPlayerIndex" />
        <button @click="rollDice" class="mt-4 px-4 py-2 bg-neon-red text-white font-bold rounded neon-border hover:bg-red-700 transition-colors">
          Roll Dice
        </button>
      </div>
    </div>
  </div>
</template>