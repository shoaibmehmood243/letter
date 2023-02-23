const API_URL = 'http://localhost:8080';
const userId = JSON.parse(localStorage.getItem("user"))?.user?._id

export const signup = `${API_URL}/auth/sign-up`; 
export const login = `${API_URL}/auth/login`;
export const getAllUsers = `${API_URL}/user`;
export const getFriends = `${API_URL}/friend/${userId}`;
export const addFriends = `${API_URL}/friend`;
export const unfollow = `${API_URL}/friend/unfollow`;