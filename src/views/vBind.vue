<template>
  <p><img src="../assets//logo.svg" alt="VueLogo" :[widthOrHeight]="widthOrHeightValue" /></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const widthOrHeight = ref('height')
const widthOrHeightValue = ref(100)
</script>
