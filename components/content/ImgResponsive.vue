<script setup>
const { src } = defineProps(["src"]);
</script>

<template><nuxt-img sizes="sm:320px md:640px" :src="src" /></template>
