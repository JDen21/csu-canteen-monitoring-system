<template>
<div class="menu-display" >
     <div class="menu" >
        <div class="name-bar" >
            <span class="menu-name" ref="menuNameWrapper">   
                {{orderName}} 
            </span>
            <div class="menu-amount" >
                <button class="minus" @click="subtractor" >-</button>
                <span>
                    {{ value }}
                </span>
                <button class="add" @click="adder" >+</button>
            </div>
        </div>
    </div>
    <div class="image-price-box" >
        <slot name="menu-image" >
            <img src="../assets/noImage.png" alt="">
        </slot>
        <span class="price-span"  >
            Php
            {{ orderPrice }}
        </span>
    </div>  
</div>
</template>

<script>
import {useFood, useDrink, useSummaryView} from '../menu.store'
export default {
    data(){
        return {
            value : 0,
            fd : useFood(),
            dk : useDrink(),
            summary : useSummaryView()

        }
    },
    props : {
        orderName : {
            type : String,
            require : true
        },
        orderPrice : {
            type : String,
            require : true
        }
    },
    methods : {
        adder(){
            this.value++
            // console.log(this.orderName)
            this.fd.$state.vals.forEach(el=>{
                if(el.name === this.orderName){
                    el.usedStocks++
                }
            }) 
            this.dk.$state.vals.forEach(el=>{
                if(el.name === this.orderName){
                    el.usedStocks++
                }
            }) 
            /**
             * check if summary array already contains this
             * if not store
             * if yes update
             */
            var contains = false
            this.summary.$state.vals.forEach(el=>{
                if(el.name === this.orderName){
                    el.quantity = this.value
                    contains = true
                }
            })
            if(!contains){
                this.summary.$state.vals.push(
                    {
                        name : this.orderName,
                        price : this.orderPrice,
                        quantity : this.value
                    }
                )
            }

            // console.log(this.summary.$state.vals)
        },
        subtractor(){
            if(this.value > 0){
                this.value--  

                this.fd.$state.vals.forEach(el=>{
                    if(el.name === this.orderName){
                        el.usedStocks--
                    }
                }) 
                this.dk.$state.vals.forEach(el=>{
                    if(el.name === this.orderName){
                        el.usedStocks--
                    }
            })

            /**
             * check if summary array already contains this
             * if not store
             * if yes update
             */
            var contains = false
            this.summary.$state.vals.forEach(el=>{
                if(el.name === this.orderName && this.value != 0 ){
                    el.quantity = this.value
                    contains = true
                }
            })
            if(!contains && this.value != 0 ){
                this.summary.$state.vals.push(
                    {
                        name : this.orderName,
                        price : this.orderPrice,
                        quantity : this.value
                    }
                )
            }
            // console.log(this.summary.$state.vals)
            }  
        }
    }
}
</script>

<style scoped>
    .menu-name {
        padding-top: 1%;
    }
    .image-price-box {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
    }

    .price-span {
        color: var(--pref-white);
        background-color: #0D8549;
        border-radius: 5px;
        padding: 3px;
    }

    .menu-display {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .menu {
        width: 60%;
    }

    .name-bar {
        background-color: #D9D9D9;
        width: 100%;
        padding: 0 0 0 5%;
        border-radius: 20px;
        margin-top: 20px;

        font: var(--options-fonts);

        display: flex;
        justify-content: space-between;
    }

    .menu-amount {
        width: 40%;
        height: 100%;
        text-align: center;
    }

    button {
        width: 35%;
        height: 100%;
        border: none;
        background-color: #C40A0A;
        color: var(--pref-white);
        height: 100%;

        font-weight: bold;
        font-size: 2rem;
    }

    button:active {
        background-color: red;
    }

    span {
        padding: 0 5px;
    }

    .add {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .minus {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
</style>