import { defineStore } from "pinia";


 export const useFood = defineStore('foodStore', {
    state : () => {
        return { vals : [{
            name : 'no name',
            price : 0.0,
            totalStocks : 0,
            usedStocks : 0,  //spent stocks
        }] }
    }
    

})


 export const useDrink = defineStore('drinkStore', {
    state : () => {
        return { vals : [{ 
            name : 'no name',
            price : 0.0,
            totalStocks : 0,
            usedStocks : 0, //spent stocks
        }] }
    }
})

export const useAttempts = defineStore('attempts', {
    state : () => {
        return {
            refAttempt : 2,
            timer : 3
        }
    }
})


export const useSummaryView = defineStore('summaryView', {
    state : () => {
        return {
            vals : [
               
            ]
        }
    }
})

export const useOrderNumber = defineStore('orderNumber', {
    state : () => {
        return {
            number : 0
        }
    }
})

