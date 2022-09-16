export default {
  getCategories() {
    const reponse = this.$axios.$get("/categories");
    return reponse;
  },
  deleteCategory(context, id) {
    return this.$axios.$delete(`categories/${id}`);
  },
  updateCategory(context, { id, data }) {
    return this.$axios.$patch(`categories/${id}`, data);
  },
  addCategory(context, data) {
    return this.$axios.$post("categories", data);
  },
};
