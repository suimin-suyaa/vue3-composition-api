<template>
  <p>半径{{ data.radius }}の円の円周率を{{ data.PI }}で計算すると、{{ area }}</p>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
})

const area = computed((): number => {
  return data.radius * data.radius * data.PI
})

setInterval((): void => {
  data.radius = Math.round(Math.random() * 10)
}, 1000)
</script>

<!-- 
9行目
  Math.round...小数点以下を四捨五入する
  Math.random...乱数を生成、この場合10以下をランダムで生成

13行目
  computedで計算、生成された乱数×生成された乱数×3.14

16行目
  setInterval...一定時間ごとに特定の処理を繰り返す

17行目
  戻り値にdata.radius = Math.round(Math.random() * 10)であることを記述

18行目
  1000ミリ秒（1秒）ごとに繰り返すことを意味する 
-->
