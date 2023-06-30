export const getUser = async (dispatch) => {
  try {
    const res = await fetch("/api/users");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { users } = await res.json();
    dispatch({ type: "INIT_USER", payload: users });
  } catch (e) {
    console.error(e.message);
  }
};

export const getPosts = async (dispatch) => {
  try {
    const res = await fetch("/api/posts");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
  } catch (e) {
    console.error(e.message);
  }
};

export const followUser = async (userId, token, setUser) => {
  console.log({ userId, token });
  try {
    const res = await fetch(`/api/users/follow/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { user, followuser } = await res.json();
    setUser(user);
  } catch (e) {
    console.error(e.message);
  }
};

export const unfollowUser = async (userId, token, setUser) => {
  try {
    const res = await fetch(`/api/users/unfollow/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { user, followuser } = await res.json();
    setUser(user);
  } catch (e) {
    console.error(e.message);
  }
};

export const createPost = async (postData, token, dispatch) => {
  try {
    const res = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ postData }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const {posts} = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
    console.log(posts)
  } catch (e) {
    console.error(e.message);
  }
};
export const editPost = async (postData,postId,token, dispatch) => {
  try {
    const res = await fetch(`/api/posts/edit/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ postData }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const {posts} = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
    console.log(posts)
  } catch (e) {
    console.error(e.message);
  }
};
export const DeletePost = async (postId,token, dispatch) => {
  try {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const {posts} = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
    console.log(posts)
  } catch (e) {
    console.error(e.message);
  }
};
