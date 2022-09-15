<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <pre>
      {{ $fetchState }}
    </pre>
    <div v-if="$fetchState.pending">carregando...</div>
    <div v-else class="border-b border-gray-400 py-4">
      <ul>
        <li v-for="produto in products" :key="produto.id">
          {{ produto.username }}
        </li>
      </ul>
    </div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quis illum
      labore laborum, praesentium facere in enim culpa optio aspernatur,
      doloribus commodi nisi vero ipsam officiis magnam. Fugit, modi ex.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  async fetch() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    );
    const products = await response.json();
    this.products = products;
  },
};
</script>

<style></style>
