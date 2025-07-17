import axios from 'axios';

const API = axios.create({ baseURL: 'https://3-w-first-assign.vercel.app/' });

export const getUsers = () => API.get('/users');
export const addUser = (name) => API.post('/users', { name });
export const claimPoints = (userId) => API.post('/claim', { userId });
export const getLeaderboard = () => API.get('/claim/leaderboard');
export const getHistory = () => API.get('/claim/history');
