<template>
  <div>
    <Navbar />
    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Serviços</h1>
        <NuxtLink to="services/desenvolvimento-de-sites"
          >Desenvolvimento de Site</NuxtLink
        >
        <NuxtLink to="services/marketing-digital">Marketing digital</NuxtLink>
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
export default { components: { Navbar } };
</script>

<style></style>
