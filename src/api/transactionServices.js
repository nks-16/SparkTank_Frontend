import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Buy shares from another team
export const buyShares = async (transactionData) => {
  const response = await axios.post(`${API_URL}/transactions/buy`, transactionData);
  return response.data;
};

// Fetch transaction logs for a specific team
export const fetchTransactionLogsForTeam = async (teamId) => {
  const response = await axios.get(`${API_URL}/transactions/logs/${teamId}`);
  return response.data;
};
