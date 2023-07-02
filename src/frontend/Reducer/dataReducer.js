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
      return {
        ...state,
        posts: action.payload,
      };
    case "INIT_BOOKMARK":
      return {
        ...state,
        bookmark: action.payload,
      };
  }
};
