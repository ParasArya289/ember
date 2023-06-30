export const getUser = async (dispatch) => {
  try {
    const res = await fetch("/api/users");
    const { users } = await res.json();
    dispatch({ type: "INIT_USER", payload: users });
  } catch (e) {
    console.error(e.message);
  }
};

export const getPosts = async (dispatch) => {
  try {
    const res = await fetch("/api/posts");
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
    console.log(posts)
  } catch (e) {
    console.error(e.message);
  }
};
