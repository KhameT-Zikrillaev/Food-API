<script setup>
const props = defineProps({
    info:{
        type: Object,
        required: true,
    }
})
</script>

<template>
  
     <RouterLink :to="'/single/' + info.idMeal" class="card">
    <img class="card__img" :src="info.strMealThumb" alt="">
    <h2 class="card__title">{{ info.strMeal }}</h2>
     </RouterLink>

 
</template>