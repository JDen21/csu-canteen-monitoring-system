<template>
    <div class="bg" >
        <section class="logo-holder" >
            <div>
                <img src="../assets/csuLogo.png" alt=" logo for csu " />
            </div>
        </section>
        <section class="selection-holder" >
            <p class="top-p" >
                Cagayan State University School 
            </p>
            <p class="bottom-p" >
                Canteen Ordering and Management System
            </p>
            <div class="common-btn-div" >
                <common-btn @click-event="clicked">
                    Order Now
                </common-btn>
            </div>
            <div class="accounts-btn-div" >  
                <accounts-btn @click="staff" />
            </div>
        </section>
    </div>
</template>

<script>
import CommonBtnVue from '@/components/CommonBtn.vue'
import AccountsBtnVue from '@/reusables/AccountsBtn.vue'
export default {
    components : {
        'common-btn' : CommonBtnVue,
        'accounts-btn' : AccountsBtnVue
    },
    methods : {
        clicked(){
            this.$router.push('/stores')
        },
        staff(){
            this.$router.push('/forms/login')
        } 
    }
}
</script>

<style scoped>
    .bg {
        background-image: url('../assets/background.png');
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

        display: grid;
        grid-template-columns: 1fr 1.5fr;
    }

    .logo-holder {
        background-color: var(--primary-red);
        position: relative;
    }

    .logo-holder div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    p {
        color: var(--primary-red);
        font: var(--Title-fonts);
        font-weight: bold;
        width: 85%;
        text-align: center;
        margin: auto;
    }
    .top-p {
        padding: 30% 0 0% 0;
    }

    .bottom-p { 
        padding: 0 0 5% 0;
    }


    .common-btn-div {
        width: 30%;
        margin: auto;
        text-align: center;
    }

    .accounts-btn-div {
        text-align: right;
        width: 90%;
        padding: 30% 0 0 0 ;
    }

</style>

