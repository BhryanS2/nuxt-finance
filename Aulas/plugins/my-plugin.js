export default (context, inject) => {
  inject("name", (name) => `Olá ${name}`);
  // console.log(context);
};
