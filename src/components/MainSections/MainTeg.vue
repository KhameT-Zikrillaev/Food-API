<script setup>
</script>

<template>
  <div class="mainteg">
    <article class="mainteg__container">
      <p class="mainteg__container-tx-1">
        <img src="@/assets/icon/thumb_up.gif" alt="" /> Free Recipe API Support
      </p>
      <p class="mainteg__container-tx-2">
        The API and site will always remain free at point of access. <br />
        If you love our service and want extra features you can sign up as a
        <RouterLink to="/">Paypal supporter</RouterLink>.<br />
        You can cancel anytime. This allows us to pay for the servers and
        bandwidth and develop new features.
      </p>
      <p class="mainteg__container-tx-1">
        <img src="@/assets/icon/api.png" alt="" /> Test API Keys
      </p>
      <p class="mainteg__container-tx-2">
        You can use the test API key "1" during development of your app or for
        educational use (see test links below). <br />
        However you must become a supporter if releasing publicly on an
        appstore. <br />
        All data is returned in JSON format. We recomend
        <RouterLink to="/">Json view</RouterLink> chrome extension to view the
        data in your web browser..
      </p>
      <p class="mainteg__container-tx-1">
        <img src="@/assets/icon/up_arrow.png" alt="" />API Production Key
        Upgrade
      </p>
      <p class="mainteg__container-tx-2">
        All supporters have access to the beta version of the API which allows
        mutiple ingredient filters. <br />
        You also get access to adding your own meals and images. You can also
        list the full database rather than limited to 100 items. <br />
        Please <RouterLink to="/">sign up</RouterLink> on Paypal and we will
        email you the upgrade.
      </p>
      <p class="mainteg__container-tx-1">
        <img src="@/assets/icon/email.png" alt="" />Contact
      </p>
      <p class="mainteg__container-tx-2">
        Email: thedatadb@gmail.com (please state if you are a Paypal Supporter)
      </p>
      <p class="mainteg__container-tx-1">
        <img src="@/assets/icon/code.png" alt="" />API Methods using the
        developer test key '1' as the API key
      </p>
      <p class="mainteg__container-tx-3">Search meal by name</p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
      </p>
      <p class="mainteg__container-tx-3">List all meals by first letter</p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/api/json/v1/1/search.php?f=a
      </p>
      <p class="mainteg__container-tx-3">Lookup a single random meal</p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/api/json/v1/1/random.php
      </p>
      <p class="mainteg__container-tx-3">
        Lookup a selection of 10 random meals
        <span
          >(only available to
          <RouterLink to="/">Paypal supporters</RouterLink>)</span
        >
      </p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt
      </p>
      <p class="mainteg__container-tx-3">Filter by Category</p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
      </p>
      <p class="mainteg__container-tx-3">Filter by Area</p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
      </p>
      <p class="mainteg__container-tx-5">
        <img src="@/assets/icon/image2.png" alt="" /> Images
      </p>
      <p class="mainteg__container-tx-6" href="">Meal Thumbnail Images</p>
      <p class="mainteg__container-tx-6" href="">
        Add /preview to the end of the meal image URL
      </p>
      <p class="mainteg__container-tx-4" href="">
        /images/media/meals/llcbn01574260722.jpg/preview
      </p>
      <p class="mainteg__container-tx-3">Ingredient Thumbnail Images</p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/images/ingredients/Lime.png
      </p>
      <p class="mainteg__container-tx-4" href="">
        www.themealdb.com/images/ingredients/Lime-Small.png
      </p>
    </article>
    <div class="mainteg__Lime">
      <div class="mainteg__Lime-cd-1">
        <img src="@/assets/images/Lime.png" alt="" />
        <div class="screen">
           <img src="@/assets/icon/screenshot.svg" alt="">
        </div>
      </div>
      <div class="mainteg__Lime-cd-2">
        <img src="@/assets/images/Lime.png" alt="" />
        <div class="screen">
           <img src="@/assets/icon/screenshot.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>


