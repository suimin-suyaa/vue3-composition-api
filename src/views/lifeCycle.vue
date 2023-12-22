<template>
  <p>縦が{{ height }}、横が{{ width }}の長方形の面積は{{ area }}</p>
  <button @click="change">値を変更</button>
</template>
<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered
} from 'vue'
import type { DebuggerEvent } from 'vue'

const heightInt = Math.round(Math.random() * 10)
const widthInt = Math.round(Math.random() * 10)
const height = ref(heightInt)
const width = ref(widthInt)

const area = computed((): number => {
  return height.value * width.value
})
const change = (): void => {
  height.value = Math.round(Math.random() * 10)
  width.value = Math.round(Math.random() * 10)
}
onBeforeMount((): void => {
  console.log('beforeMount called: $(height.value) * $(width.value)')
})
onMounted((): void => {
  console.log('mount called: $(height.value) * $(width.value)')
})
onBeforeUpdate((): void => {
  console.log('beforeUpdate called: $(height.value) * $(width.value)')
})
onUpdated((): void => {
  console.log('updated called: $(height.value) * $(width.value)')
})
onRenderTracked((event: DebuggerEvent): void => {
  console.log('renderTracked called: $(height.value) * $(width.value)')
  console.log(event)
})
onRenderTriggered((event: DebuggerEvent): void => {
  console.log('renderTriggered called: $(height.value) * $(width.value)')
  console.log(event)
})
// ライフサイクルフック
</script>
