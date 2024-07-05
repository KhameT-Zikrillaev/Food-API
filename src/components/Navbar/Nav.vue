<script setup>
</script>

<template>
  <nav class="nav">
    <div class="nav__container">
      <img
        class="nav__container__img"
        src="@/assets/images/logo-small.png"
        alt=""
      />
      <div class="nav__container__link">
        <RouterLink class="nav__container__link-tx" to="/"
          >Home</RouterLink
        >
        <RouterLink class="nav__container__link-tx" to="/api"
          >API</RouterLink
        >
        <input class="nav__container__link-search" type="text" placeholder="Search" />
      </div>
    </div>
  </nav>
</template>