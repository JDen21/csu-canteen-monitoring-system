<template>
    <div class="bg" >
        <div class="header-container" >
            <custom-header>Stocks</custom-header>
        </div>
        <div class="stocks-body" >
            <div class="stock-sets" >
                <div class="stock-table-margin" >
                    <stock-table :products="snacks" >Snacks</stock-table> 
                </div>
                <div class="stock-table-margin" >
                    <stock-table :products="drinks" >Drinks</stock-table> 
                </div>
            </div>
            <div class="stock-form-container" >
                <stock-form @recallInit="inits" />
            </div>
        </div>  
    </div>
</template>


<script>
import StockFormVue from '@/components/StockForm.vue'
import CustomHeaderVue from '@/components/CustomHeader.vue'
import StockTableVue from '@/components/StockTable.vue'
import { SNACKS, DRINKS } from '../test/stocks.test'
import { call } from '@/load.config'
import axios from 'axios'
export default {
    data(){
        return {
            snacks : SNACKS.contents,
            drinks : DRINKS.contents
        }
    },
    mounted(){
        this.inits() 
    },
    methods : {
        inits(){
            const cid = this.$route.params.cid
            axios.get(call + '/canteen/' + cid).then(res=>{
                this.snacks = res.data.snacks
                this.drinks = res.data.drinks
                console.log(res.data.snacks)
            })
        }
    },
    components : {
        'stock-form' : StockFormVue,
        'custom-header' : CustomHeaderVue,
        'stock-table' : StockTableVue
    }
}
</script>


<style scoped>

    .header-container {
        margin: 2%;
    }
    .stocks-body {
        border: 3px solid var(--navigation-red);
        padding: .5%;
        margin: 1% 5%;
        max-height: 500px;
        border-radius: 20px;
        display: grid;
        grid-template-columns: 3fr 1fr;
       
    }

    .stock-sets {
         overflow-y: scroll;
         max-height: 500px;
    }

    .stock-sets::-webkit-scrollbar { 
        background-color: transparent;
    }
    .stock-sets::-webkit-scrollbar-thumb{
        background: var(--primary-red);
        border-radius: 5px;
    }

    .stock-form-container {
        width: 100%;
    }

    .stock-table-margin {
        margin-top: 50px;
    }
</style>