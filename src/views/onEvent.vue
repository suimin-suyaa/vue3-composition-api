<template>
  <img src="../assets/logo.svg" alt="Vueのロゴ" width="200" @mousemove="onImgMousemove" />
  <p>ポインタの位置:X={{ mousePointerX }} Y={{ mousePointerY }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const mousePointerX = ref(0)
const mousePointerY = ref(0)
const onImgMousemove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX
  mousePointerY.value = event.offsetY
}
</script>

<!-- 
7/8行目
  初期値0
9行目
  引数にevent、MouseEvent型を指定
10/11行目
offsetX、offsetY...MouseEventの読み取り専用インターフェース。カーソルの位置を取得 
-->
