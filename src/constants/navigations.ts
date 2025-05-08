const mainNavigations = {
  HOME: 'Home',
  FEED: 'Feed',
  CALENDER: 'Calender',
} as const;

const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
} as const;

const mapNavigations = {
  MAP_HOME: 'MapHome',
  ADD_POST: 'AddPost',
} as const;

export {authNavigations, mapNavigations, mainNavigations};
