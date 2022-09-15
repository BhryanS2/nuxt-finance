export default ({ redirect }) => {
  const isLogged = "true";
  if (!isLogged) {
    return redirect("/");
  }

  console.log("Auth middleware");
};
