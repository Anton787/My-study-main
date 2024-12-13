<template>
    <header>
        <router-link to="/"> 
            <div class="logo">
                <img src="/src/assets/img/logo/logo.png" alt="Логотип сайта">
            </div>
        </router-link>
        <div class="interact">
            <input type="search" name="" id="">
            <router-link to="/create"><div class="add-project">Добавить проект</div></router-link>
            <router-link to="/profile"><div class="profile"><img src="" alt=""></div></router-link>
        </div>
    </header>
</template>

<script setup>
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-around;
}
</style>