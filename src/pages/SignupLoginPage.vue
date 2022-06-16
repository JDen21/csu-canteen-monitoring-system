<template>
<div class="bg" >
    <div class="bg-color" >
            <router-view >
            </router-view>
    </div>
</div>
</template>


<style scoped>

.bg-color {   
    background-color: #080808;
     background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0.87;
}
</style>