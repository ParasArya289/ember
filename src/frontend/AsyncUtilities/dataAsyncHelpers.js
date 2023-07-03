//Get basic data

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
export const getBookmarked = async (dispatch) => {
  try {
    const res = await fetch("/api/users/bookmark");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { bookmarks } = await res.json();
    dispatch({ type: "INIT_BOOKMARK", payload: bookmarks });
  } catch (e) {
    console.error(e.message);
  }
};

//Follow and Unfollow

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

//POST

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
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
  } catch (e) {
    console.error(e.message);
  }
};
export const editPost = async (postData, postId, token, dispatch) => {
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
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
  } catch (e) {
    console.error(e.message);
  }
};
export const DeletePost = async (postId, token, dispatch) => {
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
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
  } catch (e) {
    console.error(e.message);
  }
};

// BOOKMARK Post
export const bookmarkPost = async (postId, token, dispatch) => {
  try {
    const res = await fetch(`/api/users/bookmark/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { bookmarks } = await res.json();
    dispatch({ type: "INIT_BOOKMARK", payload: bookmarks });
  } catch (e) {
    console.error(e.message);
  }
};

export const removeBookmarkedPost = async (postId, token, dispatch) => {
  try {
    const res = await fetch(`/api/users/remove-bookmark/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { bookmarks } = await res.json();
    dispatch({ type: "INIT_BOOKMARK", payload: bookmarks });
  } catch (e) {
    console.error(e.message);
  }
};

//LIKE and UNLIKE Post

export const likePost = async (postId, token, dispatch) => {
  try {
    const res = await fetch(`/api/posts/like/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  } catch (e) {
    console.error(e.message);
  }
};

export const unlikePost = async (postId, token, dispatch) => {
  try {
    const res = await fetch(`/api/posts/dislike/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { posts } = await res.json();
    dispatch({ type: "INIT_POSTS", payload: posts });
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  } catch (e) {
    console.error(e.message);
  }
};
