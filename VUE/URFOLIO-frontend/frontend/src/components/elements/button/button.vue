<template>
    <button>{{ text }}</button>
</template>

<script setup>
const props = defineProps({
    text: String,
})
</script>

<style scoped>
@import url(/src/assets/base.css);
button{
    background-color: #FF4100;
    border: none;
    width: 185px;
    height: 48px;
    border-radius: 52px;
    padding: 16px 20px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 16px;
    align-items: center;
    font-weight: 500;
    color: #FFFFFF;
    transition: all 300ms linear;
}

button:hover{
    background-color: #E8E8EC;
    color: #303F63;
}
</style>