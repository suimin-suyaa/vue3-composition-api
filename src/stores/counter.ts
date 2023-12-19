import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface CounterState {
  count: number
}
export const useCounterStore = defineStore('counter', () => {
  const state = ref<CounterState>({
    count: 0
  })
  const doubleCount = computed(() => state.value.count * 2)

  function increment() {
    state.value.count++
  }

  return { state, doubleCount, increment }
})

// 4行目
//interfaceで型注釈
// 7行目
//optionsAPIだとstateプロパティにあたる、初期値を設定
// 11行目
//optionsAPIだとgettersにあたる。データの加工、算出をする
// 13行目
//optionsAPIだとactionsにあたる、methodsと同じ役割

//https://pinia.vuejs.org/core-concepts/ 公式ドキュメント
//use + ストア名 + Storeとキャメル形式で記述するのがお作法、決まり。

// optionsAPIの構文

// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 1, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })
