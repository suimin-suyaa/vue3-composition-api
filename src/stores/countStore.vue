<template>
  <div>
    <p>count:{{ counterStore.state.count }}</p>
    <button @click="counterStore.increment">increment</button>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<!-- 
3行目
  counterStoreのstateのcount、つまり初期値がマスタッシュに出力される
4行目
  クリックイベントが発生した際、counterStoreのincrement処理が発生するよう記述

8行目
  定義したuseCounterStoreをインポート、呼び出している

10行目
  conterStoreはuseCounterStoreと同じと宣言している
-->

<!-- クリックするたびにcountはインクリメントするため1プラス、ダブルカウントはインクリメントされるたびにcomputedにて2倍の計算をする -->
