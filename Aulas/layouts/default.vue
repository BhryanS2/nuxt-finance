<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto h-10 flex items-center mb-10 space-x-4">
        <NuxtLink :to="{ name: 'a-empresa' }">A empresa</NuxtLink>
        <NuxtLink :to="{ name: 'services' }">Serviços</NuxtLink>
        <NuxtLink :to="{ name: 'produtos' }">Produtos</NuxtLink>
      </div>
    </div>
    <div>
      <div class="container mx-auto">
        <Nuxt></Nuxt>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
