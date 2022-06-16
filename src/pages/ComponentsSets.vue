<template>
    <common-btn/>
    <accounts-btn />
</template>


<script>
import CommonBtnVue from '@/components/CommonBtn.vue'
import AccountsBtnVue from '@/reusables/AccountsBtn.vue'
export default {
    components : {
        'common-btn' : CommonBtnVue,
        'accounts-btn' : AccountsBtnVue
    },

   
   
}
</script>