<template>
    <div class="bg" >
        <div class="header-container" >
            <custom-header >Order Summary</custom-header>
        </div>
        <div class="summary-box" >
            <div class="summary summary-title" >
                <div>Name</div>
                <div>Price</div>
                <div>Quantity</div>
            </div>
            <div class="summary"  v-for="menu in menus" :key="menu.name" >
                <div> {{ menu.name }} </div> 
                <div> {{ menu.price }} </div>
                <div> {{ menu.quantity }} </div>
            </div>
            <div class="summary summary-bottom" >   <div></div> Total: {{ total }} </div>
        </div>
        <div class="common-btn-holder" >
            <common-btn @click="startCount" >Place Order</common-btn>
        </div>


        <!-- modal counting 10 to 0 -->
        <div class="bg-color" v-if="mod" >
            <form-bg />
            <div class="counter" >
                <file-logo />
                <!-- count before order submit -->
                <div id="count-number" > {{ time }} </div>
                <div>Order will proceed after 10 seconds. Click Yes to proceed now</div>
                <div class="common-btn-holder-mod" >
                    <common-btn @click="passOrder" >Yes</common-btn>
                    <button @click="reOrder" >No</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CustomHeaderVue from '@/components/CustomHeader.vue'
import CommonBtnVue from '@/components/CommonBtn.vue'
import FormBgVue from '@/reusables/FormBg.vue'
import FileLogoVue from '@/reusables/FileLogo.vue'
import { useSummaryView, useOrderNumber, useFood, useDrink } from '@/menu.store'
import axios from 'axios'
import { call } from '@/load.config'
export default {
    data(){
        return {
            mod : false,
            menus : [],
            total : parseInt(0),
            time : 10,
            cancel : false,
            pass : false,
            fd : useFood(),
            dk : useDrink()
        }
    },

    mounted(){
        this.init()
    },
    methods : {
        init(){
           
            const summary = useSummaryView()
            this.menus = summary.$state.vals
            
           this.menus.forEach(el => {
                // var sum = this.total
                this.total =  (parseInt(el.price) * el.quantity) + this.total
                // console.log((el.price * el.usedStocks))
               
            })
        },

        startCount(){
            this.mod = true
          var timer = setInterval(()=>{
                this.time--
                if(this.time == 0 || this.pass){
                    clearInterval(timer)
                    this.mod = false
                    this.time = 10
                    this.pass = false
                    this.processes()
                    this.$router.push('/order-number')
                }
                 if(this.cancel){  
                    clearInterval(timer)
                    this.mod = false
                    this.cancel = false
                    this.time = 10
                    this.$router.push('/')
                }
            }, 1000)
        },
        /**
         * buggy process
         */
       async processes(){
            // update database
            const cid = this.$route.params.cid
            const summary = useSummaryView()
            
            const orderNumber = useOrderNumber()
            console.log(orderNumber)
            // get the name
          await  axios.get(call + '/canteen/' + cid).then(res => {
                const data = {
                canteen : res.data.name,
                orderList : summary.$state.vals
                }
               
                 // creates new order
                axios.post(call + '/order/new-order', data)
                .then(resp=>{
                    orderNumber.$state.number = resp.data.orderNumber
                    // save order to canteen 
                    axios.post(call + '/canteen/new-order/' + cid, {orderNumber : orderNumber.$state.number})
                    .then(saveResponse => {
                        // update canteen menus
                        console.log(saveResponse)

                        this.fd.$state.vals.forEach(el=>{
                             var saveVar = {
                                canteen : data.canteen,
                                type : 'snacks',
                                name : el.name,
                                usedStocks : el.usedStocks
                            }
                            axios.post(call + '/canteen/update-menu', saveVar)
                        .then(updateResponse=>{
                            console.log(updateResponse.status)
                        })
                        })

                        this.dk.$state.vals.forEach(el => {
                             var saveVar = {
                                canteen : data.canteen,
                                type : 'drinks',
                                name : el.name, 
                                usedStocks : el.usedStocks
                            }
                            axios.post(call + '/canteen/update-menu', saveVar)
                            .then(updateResponse=>{
                                console.log(updateResponse.status)
                            })
                        })
                       
                    })
                    .catch(respon=>{
                        alert(respon.response.data + 'in save to canteen')
                    })
                })
                .catch(err=>{
                    alert(err.response.data)
                })
                
            })
            
           
        },

        reOrder(){
            this.cancel = true
        },

        passOrder(){
            this.pass = true
        }
    },

    components : {
        'custom-header' : CustomHeaderVue,
        'common-btn' : CommonBtnVue,
        'form-bg' : FormBgVue,
        'file-logo' : FileLogoVue
    }
}
</script>



<style scoped>
.summary {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr ;
    font: var(--Body-fonts);
    
}

.summary-title {
    font-weight: bold;
    padding-bottom: 20px;
}

.summary-bottom {
    padding-top: 20px;
    color: var(--fonts-red);
    text-align: right;
    padding-top: 5%;
}

.header-container {
    padding: 2%;
}

.common-btn-holder {
    width: 15%;
    min-width: 230px;
    margin: 0 0 0 77% ;
}

.bg-color{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    background-color: #080808;
    opacity: .84;

    text-align: center;
    padding-top: 2%;
}

.counter {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.counter div {
    color: var(--pref-white);
    font: var(--Title-fonts);
    padding: 2% 0;
    width: 80%;
    margin: auto;
}

#count-number {
    color: #36ED45;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 150px;
}

.common-btn-holder-mod {
    width: 30%;
    margin: auto;
}

button {
    color: var(--pref-white);
    background-color: transparent;
    border: none;
    font: var(--Title-fonts);
    border-radius: 5px;
    width: 80%;
}

button:active {
    background-color: var(--common-black);
}
</style>