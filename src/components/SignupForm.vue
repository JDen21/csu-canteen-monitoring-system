<template>
    <div class="form-body" >
        <div class="form-bg" >
            <form-bg />
            <div class="form-content" > 
                 
                <div class="form-tag" >Create Account</div>
                <div class="form" >
                    <label>Store Name:</label>
                    <br />
                    <input type="text" name="" v-model="name" id="">
                    <br />
                    <br />
                    <label>ID Number:</label>
                    <br />
                    <input type="text" name="" v-model="sid" id="">
                    <br />
                    <br />
                    <label>Phone Number:</label>
                    <br />
                    <input type="text" name="" v-model="phone" id="">
                    <br />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="text" name="" v-model="password" id="">
                    <br />
                    <br />
                    <br />
                    <div class="btn-holder" >
                        <common-btn @click="createAccount" >Create Account</common-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import FormBgVue from '@/reusables/FormBg.vue'
import CommonBtnVue from './CommonBtn.vue'
import axios from 'axios'
import { call } from '../load.config.js'
export default {
    data(){
        return {
            name : '',
            sid : '',
            phone : '',
            password : ''
        }
    },
    methods : {
        createAccount(){
            const data = {
                name : this.name,
                sid : this.sid,
                phone : this.phone,
                password : this.password
            }

            axios.post(call + '/canteen/creates', data)
            .then(res=> {
                if(res.data === 'OK')
                    alert('Store was created!')
                else
                    alert(res.data + ' try again at later date.')
                this.$router.push('/')
            })
            .catch(err=>{
                alert(err.response.data)
            })
        }
    },
    components : {
        'form-bg' : FormBgVue,
        'common-btn' : CommonBtnVue
    }
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