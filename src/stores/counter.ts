import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface CounterState {
  count: number
} //interfaceで型注釈
export const useCounterStore = defineStore('counter', () => {
  const state = ref<CounterState>({
    count: 0
  }) //optionsAPIだとstateプロパティにあたる、初期値を設定
  const doubleCount = computed(() => state.value.count * 2) //optionsAPIだとgettersにあたる。データの加工、算出をする
  function increment() {
    //optionsAPIだとactionsにあたる、methodsと同じ役割
    state.value.count++
  }

  return { state, doubleCount, increment }
})

//https://pinia.vuejs.org/core-concepts/ 公式ドキュメント
//use + ストア名 + Storeとキャメル形式で記述するのがお作法、決まり。

// optionsAPIの構文

// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })
