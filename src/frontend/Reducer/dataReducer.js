export const initDataState = {
  users: [],
  posts: [],
  sortedPosts: [],
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
      return {
        ...state,
        bookmark: bookmarkedFullPost,
      };
    case "SORT":
      const sortParameter = action.payload;
      let sortedArr = [];
      if (sortParameter) {
        if (sortParameter === "trending") {
          sortedArr = [...state?.posts]?.sort(
            (a, b) => b?.likes?.likeCount - a?.likes?.likeCount
          );
        } else {
          sortedArr = [...state?.posts]?.sort((a, b) => {
            const valueA = new Date(a?.updatedAt);
            const valueB = new Date(b?.updatedAt);
            return sortParameter === "latest"
              ? valueB - valueA
              : valueA - valueB;
          });
        }
      }
      return {
        ...state,
        sortedPosts: sortedArr,
      };
  }
};
