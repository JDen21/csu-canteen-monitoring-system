<template>
    <div class="bg" >
        <div class="summary-box box-center">
            <div class="grid-layout" >
                <img src="../assets/csuLogo.png" alt="">
                <div class="cloud-box">
                    <cloud-check />
                    <div class="p">Finish Updating!</div>
                </div>
            </div>
        </div>
        <div class="to-right" >
            <div class="common-btn-holder" >
                <common-btn @click="home">Exit</common-btn>
            </div>
        </div>  
    </div>
</template>

<script>
import CloudCheckVue from '@/reusables/CloudCheck.vue'
import CommonBtnVue from '@/components/CommonBtn.vue'
export default {
    components : {
        'cloud-check' : CloudCheckVue,
        'common-btn' : CommonBtnVue
    },
    methods : {
        home (){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

    .p {
        font: var(--finish-notice-fonts);
        color: #595465;
    }
    .box-center {
        margin-top: 7%;
        min-height: 520px;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
        text-align: center;
        margin-top: 10%;
    }

    .cloud-box {
        margin-top: 10%;
    }

    .common-btn-holder {
        width: 80%;
        
    }

    .to-right {
        text-align: right;
        margin-left: 80%;
    }
</style>