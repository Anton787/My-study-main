<template>
    <footer>
        <div class="logo">
            <img src="/src/assets/img/logo/logo.png" alt="">
        </div>
        <div class="links">
            <ul>
                <li><a href="#">Студентам</a></li>
                <li><a href="#">Все работы</a></li>
                <li><a href="#">О проекте</a></li>
            </ul>
        </div>
        <span class="montserrat-author">2024 (с) Anton Gagelgants</span>
    </footer>
</template>

<script setup>
</script>

<style scoped>
@import url(/src/assets/base.css);
footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.montserrat-author {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    color: #777E90;
    font-weight: 400;
    font-style: normal;
    line-height: 16px;
}

.logo > img{
    width: 200px;
}

ul{
    display: flex;
    gap: 30px;
}

ul > li, a{
    display: inline;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: #777E90;
    font-weight: 600;
    font-style: normal;
    line-height: 16px;
}

</style>