export default {
  STORE_USER(state, payload) {
    state.firstName = payload.firstName;
    state.lastName = payload.lastName;
  },
};
