export const getUser = async (dispatch) => {
  try {
    const res = await fetch("/api/users");
    const { users } = await res.json();
    dispatch({ type: "INIT_USER", payload: users });
  } catch (e) {
    console.error(e.message);
  }
};
