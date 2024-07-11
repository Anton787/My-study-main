<template>
    <button>{{ text }}</button>
</template>

<script setup>
let btn_text = 'Тест'

const props = defineProps({
    text: String,
})
</script>