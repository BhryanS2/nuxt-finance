<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>
    <pre>
      {{ services }}
    </pre>
    <NuxtLink to="/services/desenvolvimento-de-sites"
      >Desenvolvimento de Site</NuxtLink
    >
    <NuxtLink to="/services/marketing-digital">Marketing digital</NuxtLink>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get("users?_limit=10");
    const services = response;
    return { services };
  },
};
</script>

<style></style>
