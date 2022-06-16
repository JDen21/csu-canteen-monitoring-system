<template>
     <div class="form-body" >
        <p>Edit Stock</p>
        <div class="form-input" >
            <input type="text" name="" v-model="type" placeholder="Product Type:(snacks or drinks) " id="">
            <input type="text" name="" v-model="name" placeholder="Product Name: " id="">
            <input type="text" name="" v-model="price" placeholder="Price: " id="">
            <input type="text" name="" v-model="totalStocks" placeholder="Quantity: " id="">
        </div>
        <div class="btn-options" >
            <button class="highlight-btns" @click="save" >Add Product</button>
            <button>Update Product</button>
            <button class="highlight-btns" @click="saveAndMove" >Save Changes</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { call } from '@/load.config'
export default {
    data(){
        return {
            type : '',
            name : '',
            price : '1.00',
            totalStocks : 1
        }
    },
    methods : {
        save(){
            const data = {
                cid : this.$route.params.cid,
                type : this.type,
                name : this.name,
                totalStocks : this.totalStocks,
                price : this.price
            }
            axios.post(call + '/canteen/add-menu', data)
            .then(res => {
                if(res.status === 200)
                  this.$emit('recallInit')
            })
            .catch(()=>{
                alert('something went wrong')
            })
            this.cleanInputs()
        },
        saveAndMove() {
            const data = {
                cid : this.$route.params.cid,
                type : this.type,
                name : this.name,
                totalStocks : this.totalStocks,
                price : this.price
            }
            axios.post(call + '/canteen/add-menu', data)
            .then(res => {
                if(res.status === 200)
                  this.$emit('recallInit')
            })
            .catch(()=>{
                alert('something went wrong')
            })
            this.$router.push('/finish-update')
        },
        cleanInputs(){
            this.type = '',
            this.name = '',
            this.price = '',
            this.totalStocks = ''
        }
    }
}
</script>

<style scoped>
    p {
        font: 26px 'Inter';
        font-weight: bold;
    }

    input {
        border-radius: 20px;
        border: none;
        margin: 2% 0;
        height: 30px;
        padding: 0 10px;
    }

    button {
        background-color: transparent;
        
        border: none;
        color: var(--pref-white);
        font: 16px 'Roboto';
        width: 60%;
        margin: auto;
    }

    button:active {
        background-color: var(--common-black);
        border-radius: 20px;
    }

    .form-body {
        background-color: #A23131;
        color: var(--pref-white);
        padding: 5% 5%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .form-input {
        display: grid;
        grid-template-columns: 1fr;
    }

    .btn-options {
        display: grid;
        grid-template-columns: 1fr;
    }
  .highlight-btns {
        background-color: #D28D8D;
        border-radius: 20px;
        padding: 2% 5%;
        margin: 15% auto 0 auto;
  }

  .highlight-btns:active {
      background-color:#A23131;
  }

  
</style>