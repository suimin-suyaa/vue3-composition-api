<template>
  <p>現在時刻：{{ timeStr }}</p>
  <p>現在時刻(ref):{{ timeStrRef }}</p>
  <p></p>
</template>

<script lang="ts" setup>
import { ref } from 'vue' //refをインポート

const now = new Date()
const nowStr = now.toLocaleTimeString()
let timeStr = nowStr
const timeStrRef = ref(nowStr)

function changeTime(): void {
  const newTime = new Date()
  const newTimeStr = newTime.toLocaleTimeString()
  timeStr = newTimeStr
  timeStrRef.value = newTimeStr
}

setInterval(changeTime, 1000)
</script>

// 10行目 // 現在日時を取得、変数nowを宣言 // 11行目 // 最新の時刻文字列を取得。 //
toLocaleTimeString()...dateオブジェクトのメソッド // 12行目 // let timeStr = nowStrと変数宣言 //
13行目 // const timeStrRef = ref(nowStr)と変数宣言 // refを使用することでリアクティブになる //
15行目 // 戻り値がないため、voidで型注釈 // 16行目 // const newTime = new
Date()...newは新しいオブジェクトを生成するための演算子。新しい日時を取得 // 17行目 // const
newTimeStr = newTime.toLocaleTimeString()...最新の時刻文字列を取得 // 18行目 // timeStr = newTimeStr
同じであると宣言 // 19行目 // timeStrRef.value = newTimeStr 同じであると宣言 //
value...ref関数にアクセスする際に使用。（refはオブジェクトとしてラップされているため）
