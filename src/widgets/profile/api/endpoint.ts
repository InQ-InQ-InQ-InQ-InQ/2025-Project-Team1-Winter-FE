const PROFILE_ENDPOINT = {
  FOLLOWER_COUNT: "/api/users/{id}/follower/count",
  FOLLOWING_COUNT: "/api/users/{id}/following/count",
  POSTS: "/api/users/{id}/posts",
} as const;

export default PROFILE_ENDPOINT;
