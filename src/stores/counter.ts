import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) //optionsAPIだとstateプロパティにあたる、初期値を設定
  const doubleCount = computed(() => count.value * 2) //optionsAPIだとgettersにあたる。データの加工、算出をする
  function increment() {
    //optionsAPIだとactionsにあたる、methodsと同じ役割
    count.value++
  }

  return { count, doubleCount, increment }
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
