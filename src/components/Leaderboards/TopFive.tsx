import { Card, Divider, Typography } from "@mui/material";
import "./Leaderboards.css";

const leaderboard_stub = require("../../stubs/leaderboards_stub.json");

function TopFive() {
  const stats = leaderboard_stub.highestRanking;

  return (
    <Card variant="outlined" className="lb-card">
      <Typography variant="h5">Highest Ranked</Typography>
      <Divider light variant="middle" />
    </Card>
  );
}

export default TopFive;
