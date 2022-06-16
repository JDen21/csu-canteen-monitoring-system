<template>
    <div>
        Time left : {{ refTime }}
    </div>
</template>



<script>
import { useAttempts } from '@/menu.store'
export default {
    data(){
        return{
            refTime : 0,
            obj : useAttempts()
        }
    },
    unmounted(){
        this.obj.timer = this.obj.timer + 10
    },
    mounted(){
        this.refTime = this.obj.timer
        this.clockStart()
    },
    methods : {
        
        clockStart(){
            const timer = setInterval(()=>{
                if(this.refTime === 0){
                    clearInterval(timer)
                    this.$router.push('/')
                }
                else
                    this.refTime-- 
            },1000)
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font: var(--Title-fonts);
    font-weight: bolder;
}
</style>