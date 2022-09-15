<template>
  <div>
    <pre>
      {{ $config }}
    </pre>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper> Help me fund my Open Source work! </template>
    </VTooltip>
    <pre>
      {{ $store.state.user }}
    </pre>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "IndexPage",
  async asyncData({ $config, $store }) {
    console.log($config);
  },
  mounted() {
    console.log(this.$name("user"));
    console.log(this.$dayjs().format());
    console.log(this.$config);
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
