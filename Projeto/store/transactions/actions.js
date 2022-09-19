export default {
  getTransactions(context, filter = {}) {
    const config = {
      params: {
        _expand: "category",
        ...filter,
      },
    };
    const response = this.$axios.$get("/transactions?_expand=category", config);

    return response;
  },
  addTransaction(context, data) {
    return this.$axios.$post("transactions", data);
  },

  updateTransaction(context, { id, data }) {
    return this.$axios.$put(`transactions/${id}`, data);
  },
};
