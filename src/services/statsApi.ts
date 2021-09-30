import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const championStatsByName = (championName: string) => {
  return client
    .get("/stats/champions/" + championName)
    .then((response) => response.data);
};

export const gameStatsById = (gameId: string) => {
  return client.get("/analyses/" + gameId).then((response) => response.data);
};
