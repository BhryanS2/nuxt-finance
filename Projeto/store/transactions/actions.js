export default {
  getTransactions() {
    const response = this.$axios.$get("/transactions?_expand=category");

    return response;
  },
  addTransaction(context, data) {
    return this.$axios.$post("transactions", data);
  },

  updateTransaction(context, { id, data }) {
    return this.$axios.$put(`transactions/${id}`, data);
  },
};
