<template>
<router-view>

</router-view>  
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap');

:root {
    /* colors */
    --primary-red : #8C1D18;
    --navigation-red : #B3261E;
    --fonts-red : #8B0304;
    --summarySection-pink : #D28D8D;
    --backBtns-purple : #381E72;
    --imgOutline-purple : #7F67BE;
    --pref-white : #FFFFFF;
    --common-black : #332D41;


    /* fonts */
    --Title-fonts :  23px Verdana;
    --Header-fonts :  20px Verdana;
    --Subheader-fonts :  22px 'Roboto';
    --Body-fonts :  26px Verdana;
    --btn-fonts :  25px Verdana;
    --btn-plusMinus-fonts :  46px 'Inter';
    --options-fonts : 22px 'Inter';
    --finish-notice-fonts : 75px 'Roboto';
}

body, html {
    margin: 0;
    padding: 0;
}

 .bg {
        background-image: url('../src/assets/background.png');
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
    }

    .summary-box {
    background-color: #F9DEDC;
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 2% 3%; 
    min-height: 400px;
    border-radius: 20px;
    overflow-y: scroll;
}

.summary-box::-webkit-scrollbar-thumb {
    color: var(--primary-red);
}

.summary-box::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 5px;
}
  
</style>