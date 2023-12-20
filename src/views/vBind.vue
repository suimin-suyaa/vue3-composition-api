<template>
  <p><img src="../assets//logo.svg" alt="VueLogo" :[widthOrHeight]="widthOrHeightValue" /></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const widthOrHeight = ref('height')
const widthOrHeightValue = ref(100)
</script>

バインド属性をテンプレート変数として指定 [widthOrHeight]...ディレクティブの引数
動的引数...引数をテンプレート変数で指定することを指す
