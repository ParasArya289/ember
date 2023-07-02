export const initDataState = {
  users: [],
  posts: [],
  bookmark: [],
  following: [],
  notFollowing: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "INIT_NOT_FOLLOWING":
      return {
        ...state,
        notFollowing: action.payload,
      };
    case "INIT_POSTS":
      const initBookmarksWithFreshData = action?.payload?.filter(({ _id }) =>
        state?.bookmark?.some(({ _id: id }) => id === _id)
      );
      return {
        ...state,
        posts: action.payload,
        bookmark: initBookmarksWithFreshData,
      };
    case "INIT_BOOKMARK":
      const bookmarkedFullPost = state?.posts?.filter(({ _id }) =>
        action?.payload?.some(({ _id: id }) => id === _id)
      );
      console.log(bookmarkedFullPost);
      return {
        ...state,
        bookmark: bookmarkedFullPost,
      };
  }
};
