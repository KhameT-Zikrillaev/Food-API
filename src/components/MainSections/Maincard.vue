<script setup>

import { ref } from "vue";
import Carditem from "../cards/Carditem.vue";


const food = ref(null)

async function getFetchMeals(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    const data = await res.json()
    food.value = data.meals
}
getFetchMeals()


</script>


<template>
  <div class="maincard">
    <section class="maincard__section-1">
      <img src="@/assets/images/meal-icon.png" alt="" />
      <article class="maincard__section-1-article">
        <h2 class="maincard__section-1-article-tx-1">Welcome to TheMealDB</h2>
        <p class="maincard__section-1-article-tx-2">
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
          around the world. <br />
          We also offer a
          <RouterLink class="link" to="/">free recipe API</RouterLink> for
          anyone wanting to use it, with additional features for subscribers.
        </p>
        <button class="maincard__section-1-article-button">      
          <img src="@/assets/images/paypal.png" alt="" />
        </button>
        <p class="maincard__section-1-article-tx-3">
          Click button above to upgrade free API to premium for $3 <br> Currently (54
          supporters)
        </p>
      </article>
      <img src="@/assets/images/meal-icon.png" alt="" />
    </section>
    <section class="maincard__section-2">
        <div class="maincard__section-2-linear"></div>
        <div class="maincard__section-2-search">
           <input type="text" placeholder="Search for a Meal..."><button><img src="@/assets/icon/icon-search.svg" alt=""></button>
        </div>
        <div class="maincard__section-2-static">
          <img src="@/assets/icon/icon-1.png" alt="">
          <p>Total Meals: <span>302</span></p>
          <img src="@/assets/icon/icon-2.png" alt="">
          <p>Total Ingredients: <span>575</span></p>
          <img src="@/assets/icon/icon-3.png" alt="">
          <p>Images: <span>302</span></p>
        </div>
        <div class="maincard__section-2-linear"></div>
     

    </section>
    <section class="maincard__section-3">
      <h3 class="maincard__section-3-text">Latest Meals</h3>
      <div class="maincard__section-3-grid">
              <Carditem v-for="item in food" :key="item.idMeal" :info="item"/>      
      </div>
    </section>
  </div>
</template>

