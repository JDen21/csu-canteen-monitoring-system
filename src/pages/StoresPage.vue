<template>
    <div class="bg" >
        <div class="header-container" >
            <custom-header> Available Store </custom-header>
        </div>
        <div class="card-container"  >
            <!--corn for now, no image uploader function designed-->
            <card @click="viewStore('corn', store.cid)" v-for="store in stores" :key="store.name">  
                <template v-slot:cardImage >
                    <img src="../assets/corn.png" alt="corn store">
                </template>
                <template v-slot:cardName >
                    {{ store.name }}
                </template>
            </card>
            
        </div>
        <nav>
            <span>
                <back-button />
            </span>
            <span>
                <next-button />
            </span>
        </nav>
    </div>
</template>


<script>
import CustomHeaderVue from '@/components/CustomHeader.vue'
import CardDeckVue from '@/components/CardDeck.vue'
import backButtonVue from '@/reusables/backButton.vue'
import nextButtonVue from '@/reusables/nextButton.vue'
import { call } from '@/load.config'
import axios from 'axios'
export default {
    components : {
        'custom-header' : CustomHeaderVue,
        'card' : CardDeckVue,
        'back-button' : backButtonVue,
        'next-button' : nextButtonVue
    },
    data(){
        return {
            stores : []
        }
    },
    mounted(){
        this.inits()
    },
    methods : {

        inits(){
            axios.get(call + '/canteen/all')
            .then(res=>{
                this.stores = res.data
                console.log(res.data)
            })
        },
        viewStore(store, cid){
            // alert(store)
            this.$router.push('/store-view/' + store + '/' + cid)
        }
    }
}
</script>

<style scoped>
    .header-container { 
        padding: 2%;
    }
   

    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        margin: 5%  auto 10% auto;
        width: 60%;
    }

    img {
        width: 237px;
        height: 198px;
    }
    nav {
        text-align: right;
        padding: 0 2%;
    }
    span {
        margin: 0 5px;
    }
</style>