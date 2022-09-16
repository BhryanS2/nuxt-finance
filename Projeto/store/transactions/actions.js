export default {
  getTransactions() {
    const response = this.$axios.$get("/transactions");

    return response;
  },
  addTransaction(context, data) {
    return this.$axios.$post("transactions", data);
  },
};
