<template>
    <div class="bg" >
        <div class="order-number-container" >
           <img src="../assets/csuLogo.png" alt="csu logo"> 
            <div class="order-number" >
                <!-- state number will come from database -->
                <div class="number" > {{ num }} </div>
                <div class="desc">Order Number Thank you for ordering.</div>
            </div>
        </div>
         <div class="common-btn-holder" >
            <common-btn @click="reset">Exit</common-btn>
        </div>
    </div>
</template>


<script>
/**
 * 0 value bug 
 */
import CommonBtnVue from '@/components/CommonBtn.vue'
// import { num } from '@/test/number.test'
import { useFood, useDrink, useOrderNumber, useSummaryView } from '@/menu.store'
export default {
    data(){
        return {
            nums : useOrderNumber(),
            num : ''
        }
    },
    components : {
        'common-btn' : CommonBtnVue
    },
    mounted(){
        this.num = this.nums.$state.number  
        console.log(useOrderNumber().$state.number)
    },
    methods : {
        reset(){
            
            useFood().$state = {vals : {
                name : 'no name',
                price : 0.0,
                totalStocks : 0,
                usedStocks : 0,  //spent stocks
            }}
            useDrink().$state = {vals : {
                name : 'no name',
            price : 0.0,
            totalStocks : 0,
            usedStocks : 0,  //spent stocks
            }}
            useSummaryView().$reset()
            // console.log(useFood().vals, useDrink().vals, useSummaryView().vals)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.order-number-container {
    background-color: #F9DEDC;
    width: 60%;
    margin: 7% auto 2% auto;
    padding: 2% 3%;
    min-height: 500px;
    border-radius: 20px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
}

.number {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 330px;
    color: #595465;
}

.desc {
    text-align: center;
    color: #595465;
    font-size: 30px;
}

.common-btn-holder {
    width: 15%;
    min-width: 230px;
    margin: 0 0 0 77% ;
}
</style>