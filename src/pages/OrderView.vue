<template>
    <div class="bg overflow " >
        <div class="header-container" >
            <custom-header>Staff POV</custom-header>
        </div>
        <div >
            <div class="common-btn-resize">
                <common-btn @click="toStocks" >Stock</common-btn>
            </div>
        </div>
        <div class="lst" >
            List of Orders
            <div class="hr-line" ></div>
        </div>

        <div class="main-table-body" >
             <div v-for="order in orders" :key="order._id" class="cell" >
                <div>
                    <div class="cell-title" >Order Number</div>
                    {{ order.orderNumber }}
                </div>
                <div>
                    <div class="cell-title" >Order List</div>
                     <div v-for="list in order.orderList" :key="list._id" class="order-list" >
                    <div>
                        
                         {{ list.name }}
                    </div>
                    <div>
                        {{ list.quantity }}
                    </div>
                    </div>
                </div>
                    
                <div>
                    <div class="cell-title" >Order Date</div>
                    {{ order.orderDate }}
                </div>
                <div>
                    <div class="cell-title" >Order Active</div>
                    {{ order.active }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CustomHeaderVue from '@/components/CustomHeader.vue'
import CommonBtnVue from '@/components/CommonBtn.vue'
import { call } from '@/load.config'
import axios from 'axios'
export default {
    data(){
        return {
            orders : []
        }
    },
    components : {
        'custom-header' : CustomHeaderVue,
        'common-btn' : CommonBtnVue
    },
    mounted(){
        this.inits()
    },
    methods : {
        inits(){
            axios.get(call + '/canteen/' + this.$route.params.cid).then(canteenRes=>{
                axios.get(call + "/order/canteen-order/" + canteenRes.data.name)
                .then(CORes=>{
                    this.orders = CORes.data
                    console.log(this.orders)
                })
            })
            
        },
        toStocks(){
            const cid = this.$route.params.cid
            this.$router.push('/stocks/' + cid)
        }
    }
}
</script>

<style scoped>
 .header-container {
        margin: 2%;
 }
 .common-btn-resize {
    width: 10%;
    min-width: 150px;
    margin-left: auto ;
    margin-right: 10%;
 }
 .lst{
    padding-left: 5%;
    font: var(--Title-fonts);
 }
 .hr-line {
    background-color: var(--primary-red);
    height: 5px;
    width: 90%;
 }

 .main-table-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 3% 0;
 }

 .cell{
    border: 3px solid var(--primary-red);
    text-align: center;
    font-size: 1.5rem;
    padding: 3%;
 }

 .cell-title {
    font: var(--btn-fonts);
    padding-top: 5%;
    color: var(--primary-red);
 }
 .order-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
 }

 .overflow {
    overflow-y: scroll;
 }
</style>