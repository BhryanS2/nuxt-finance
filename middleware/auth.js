export default ({ redirect }) => {
  const isLogged = false;
  if (!isLogged) {
    return redirect("/");
  }

  console.log("Auth middleware");
};
