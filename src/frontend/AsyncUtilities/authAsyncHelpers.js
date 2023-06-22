export const loginUser = (userCred) => {
  return fetch("api/auth/login", {
    method: "POST",
    body: JSON.stringify(userCred),
  });
};

export const singupUser = (userDetails) => {
  return fetch("api/auth/signup", {
    method: "POST",
    body: JSON.stringify(userDetails),
  });
};
