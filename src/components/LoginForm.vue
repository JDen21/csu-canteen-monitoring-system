<template>
    <div class="form-body" >
        <div class="form-bg" >
            <form-bg />
            <div class="form-content" >  
                <div class="form-tag" >Login</div>
                <div class="form" >
                   
                    <label>ID Number:</label>
                    <br />
                    <input type="text" name="" v-model="sid" id="">
                    <br />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="text" name="" v-model="password" id="">
                    <br />
                    <br />
                    <br />
                    <div class="btn-holder" >
                        <common-btn @click="login" >Login</common-btn>
                        <button @click="()=>this.$router.push('/forms/signup')" >Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import FormBgVue from '@/reusables/FormBg.vue'
import CommonBtnVue from './CommonBtn.vue'
import { call } from '../load.config'
import axios from 'axios'
import { useAttempts } from '../menu.store'
export default {
    data(){
        return {
            sid : '',
            password : '',
            attempts : 0,
            attemptObject : {}
        }
    },
    mounted(){
       this.attemptObject = useAttempts()
       this.attempts = this.attemptObject.refAttempt + 1

    },
     methods : {
        login(){ 
            /**
             * if attempts = 0 lock the system on the device
             */
            
            if(this.attempts === 0) {
                this.$router.push('/lock')
                this.attemptObject.refAttempt = 1      
            }

            axios.get(call + '/canteen/login?sid='+ this.sid + '&&password=' + this.password)
            .then(res=>{
              if(res.status === 200){
                this.$router.push('/order-view/' + res.data)
              }
             
            })
            .catch(res=>{
                if(res.response.status === 404){
                    alert('Account not found you have ' + this.attempts + ' attempts left.')
                    this.attempts--
                }
                else{
                    alert(res.response.data)
                    this.$router.push('/')
                }
            })
        }

    },
    components : {
        'form-bg' : FormBgVue,
        'common-btn' : CommonBtnVue
    },
   
}
</script>

<style scoped>
input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--pref-white);
    width: 90%;
    color: var(--pref-white);
}
input:focus {
    outline: 0px;
}
button {
    background-color: transparent;
    border:  none;
    color: var(--pref-white);
    font: var(--Body-fonts);
    margin-top: 3%;
}
.form-bg {
    text-align: center;
    padding-top: 2%;
    position: relative;
}

.form-content {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
}

.form-tag {
    color: var(--pref-white);
    font: var(--Title-fonts);
    font-weight: bold;
    text-align: left;
    padding-bottom: 10%;
}

.form {
    color: var(--pref-white);
    font: var(--Header-fonts);
    font-weight: normal;
    text-align: left;
    width: 70%;
    margin: auto;
}

.btn-holder {
    text-align: center;
}
</style>