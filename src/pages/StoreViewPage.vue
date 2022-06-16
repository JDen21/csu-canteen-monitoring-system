<template>
  <div class="bg">
    <div class="header-container">
      <custom-header>Store's Menu</custom-header>
    </div>
    <div class="body-container">
      <div class="corn-image-container">
        <img :src="require(`../assets/${source}.png`)" alt="" />
        <!-- dynamic image -->
      </div>
      <div>
        <p>Snacks <food-bowl /></p>
        <div class="menus">
          <div v-for="food in foods" :key="food.name">
            <!-- food array -->
            <div>
              <menu-display @change-value="valueResetFood" :order-name="food.name" :order-price="food.price">
                
              </menu-display>
            </div>
          </div>
        </div>
      </div>
        <hr />
      <div>
        <p>Drinks <food-drink /></p>
        <div class="menus">
          <div v-for="drink in drinks" :key="drink.name">
            <!-- drink array -->
            <div>
              <menu-display @change-value="valueResetDrink" :order-name="drink.name" :order-price="drink.price" >
                
              </menu-display>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <span>
        <back-button />
      </span>
      <span>
        <next-button @click="summarize" />
      </span>
    </nav>
  </div>
</template>

<script>
import CustomHeaderVue from "@/components/CustomHeader.vue";
import MenuDisplayVue from "@/components/MenuDisplay.vue";
import FoodBowlVue from "@/reusables/FoodBowl.vue";
import FoodDrinkVue from "@/reusables/FoodDrink.vue";
import backButtonVue from "@/reusables/backButton.vue";
import nextButtonVue from "@/reusables/nextButton.vue";
import { useFood, useDrink } from "../menu.store.js";
import { call } from "@/load.config.js";
import axios from "axios";

// import { FOOD, DRINK } from "../test/menu.test.js";
export default {
  components: {
    "custom-header": CustomHeaderVue,
    "menu-display": MenuDisplayVue,
    "food-bowl": FoodBowlVue,
    "food-drink": FoodDrinkVue,
    "back-button": backButtonVue,
    "next-button": nextButtonVue,
  },

  data() {
    return {
      source: "",
      foods: [],
      drinks: [],
      fds: useFood(),
      dds: useDrink(),
    };
  },

  beforeMount() {
    this.init();
  },

  methods: {
    init() {
      this.source = this.$route.params.store;

      this.fds = useFood();
      this.dds = useDrink();
      /**
       * get the current canteen
       * save canteen menu to pinia store
       * copy it to local state
       */
      axios.get(call + '/canteen/' + this.$route.params.cid)
      .then(res=>{
        console.log(res.data.snacks)
        this.fds.$state.vals = res.data.snacks;
        this.dds.$state.vals = res.data.drinks;
        this.foods = this.fds.$state.vals;
        this.drinks = this.dds.$state.vals;
      })
     
     
    },

    summarize() { 
      const cid = this.$route.params.cid
      console.log(cid)
      this.$router.push('/order-summary/' + cid)
    },

    valueResetFood(val, food) {
      this.fds.$state.vals.forEach((el) => {
        if (el.name == food) {
          el.usedStocks = val;
        }
      });
    },
    valueResetDrink(val, drink) {
      this.dds.$state.vals.forEach((el) => {
        if (el.name == drink) {
          el.usedStocks = val;
        }
      });
    },
  },
};
</script>


<style scoped>
nav {
  text-align: right;
  padding-top: 5%;
  padding-right: 3%;
}

span {
  margin: 0 5px;
}

p {
  font: var(--btn-fonts);
  font-weight: bold;
  color: #595465;
}

img {
  border-radius: 100%;
  width: 90%;
  border: 5px solid var(--imgOutline-purple);
  margin: auto;
}

.menus {
  overflow-y: scroll;
  max-height: 350px;
}
.menus::-webkit-scrollbar {
  background-color: transparent;
}
.menus::-webkit-scrollbar-thumb {
  background: var(--primary-red);
  border-radius: 5px;
}
.menus::-webkit-scrollbar-thumb:active {
  background: var(--navigation-red);
  border-radius: 5px;
}

.header-container {
  padding: 2%;
}

.body-container {
  display: grid;
  grid-template-columns: 1fr 2fr 20px 2fr;
}

.corn-image-container {
  text-align: center;
  margin: auto;
  margin-top: 40%;
}
</style>


