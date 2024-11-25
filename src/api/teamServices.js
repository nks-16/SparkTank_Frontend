import axios from 'axios';

const API_URL = 'https://sparktank-api.vercel.app';

// Fetch a team by ID
export const fetchTeamById = async (teamId) => {
  const response = await axios.get(`${API_URL}/teams/${teamId}`);
  return response.data;
};

// Create a new team
export const createTeam = async (teamData) => {
  const response = await axios.post(`${API_URL}/teams`, teamData);
  return response.data;
};
