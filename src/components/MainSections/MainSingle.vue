<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const fooditem = ref();
const route = useRoute(null);

async function getFetchMealslink (idMeal){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const data = await res.json()
    fooditem.value = data.meals
}
console.log(fooditem);
getFetchMealslink(route.params.idMeal)
</script>

<template>
     <div class="mainsingle">
        <div class="mainsingle__container" v-for="item in fooditem" :key="item.idMeal">
            <div class="mainsingle__container-linear-1"></div>
            <div class="mainsingle__container-linear-2"></div>
             <div class="mainsingle__container-div">
               <img :src="item.strMealThumb" alt="">
               <h3 class="mainsingle__container-div-tx">{{item.strMeal}}</h3>
               <h4 class="mainsingle__container-div-tx">Country: {{ item.strArea }}</h4>
               <p  class="mainsingle__container-div-tx">Category: {{ item.strCategory }}</p>
             </div>
             <div class="mainsingle__container-info">
                <h3 class="mainsingle__container-info-tx-1">Ingredients</h3>
                <div class="mainsingle__container-info-grid">
                    <p>{{ item.strIngredient1 }}</p>
                    <p>{{ item.strIngredient2 }}</p>
                    <p>{{ item.strIngredient3 }}</p>
                    <p>{{ item.strIngredient4 }}</p>
                    <p>{{ item.strIngredient5 }}</p>
                    <p>{{ item.strIngredient6 }}</p>
                    <p>{{ item.strIngredient7 }}</p>
                    <p>{{ item.strIngredient8 }}</p>
                    <p>{{ item.strIngredient9 }}</p>
                    <p>{{ item.strIngredient10 }}</p>
                    <p>{{ item.strIngredient12 }}</p>
                    <p>{{ item.strIngredient13 }}</p>
                    <p>{{ item.strIngredient14 }}</p>
                    <p>{{ item.strIngredient15 }}</p>
                    <p>{{ item.strIngredient16 }}</p>
                    <p>{{ item.strIngredient17 }}</p>
                </div>
             </div>
          
             <div class="mainsingle__container-Instructions">
                <p class="mainsingle__container-Instructions-tx-1">Instructions</p>
                <p class="mainsingle__container-Instructions-tx-2">{{ item.strInstructions }}</p>
             </div>
        </div>
        <div class="mainsingle__deffect"></div>
     </div>
  </template>
