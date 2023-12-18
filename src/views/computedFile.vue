<template>
  <p>半径{{ radius }}の円の面積を円周率{{ PI }}で計算すると、{{ area }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const random = Math.random()
const radiusInt = Math.round(random * 10)
const PI = ref(3.14)
const radius = ref(radiusInt)

const area = computed(() => {
  return radius.value * radius.value * PI.value
})
</script>
