export const isAuthenticated = (response) => {
  if (!response.req.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};
