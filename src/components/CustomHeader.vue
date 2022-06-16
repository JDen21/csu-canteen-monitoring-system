<template>
    <div @click="()=> $router.push('/')" >
        <div class="logo-holder" > 
            <img src="../assets/csuLogo.png" alt="csu logo">
            <p>CSU SCHOOL CANTEEN ORDERING AND MANAGEMENT SYSTEM</p>
        </div>
        <div class="page-name" >    
            <slot>Page Name</slot>
        </div>
    </div>
</template>


<style scoped>
    .logo-holder {
        display: flex;
        align-items: center;
    }

    .page-name {
        font: var(--Subheader-fonts);
        padding-left: 5%;
        color: var(--common-black);
    }

    img{
        height: 100px;
        width: 100px;
    }
    p{
        background-color: var(--navigation-red);
        color: var(--pref-white);
        font: var(--Title-fonts);
        padding: 0.5% 5% .5% 5%;
        border-radius: 100px;
    
        position: absolute;
        z-index: -1;
        left: 4%;
        
    }

</style>