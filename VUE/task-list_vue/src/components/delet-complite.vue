<template>  
    <div class="viev-note">
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    text: String,
})
</script>

<style scoped>
.viev-note{
    display: flex;
    flex-direction: column;
    width: 260px;
    gap: 20px;
    background-color: #86aa8d;
    border-radius: 5px;
    padding: 10px 5px;
}

.interact-note{
    display: flex;
    gap: 5px;
    justify-content: space-around;
}
</style>