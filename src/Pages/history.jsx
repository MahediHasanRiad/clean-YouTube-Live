import Box from "@mui/material/Box";
import HistoryCard from "../components/UI/history/history-card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HistoryButton from "../utils/button";
import TextField from "@mui/material/TextField";
import { Trash } from "lucide-react";
import HistoryRightSideItem from "../utils/history-right-side-item";
import { Pause } from "lucide-react";
import { Settings } from "lucide-react";
import { Search } from "lucide-react";
import MenuItem from "../components/UI/nav/menu-item";

function History() {
  return (
    <Box sx={{ marginLeft: "7%" }}>
      <Box sx={{ height: "150px" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            letterSpacing: "-0.04em",
            fontSize: "2.5rem",
            marginBottom: "10px",
          }}
        >
          Watch History
        </Typography>
        <HistoryButton text={"All"} />
        <HistoryButton text={"Videos"} />
        <HistoryButton text={"Sorts"} />
        <HistoryButton text={"Podcast"} />
        <HistoryButton text={"Music"} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Grid direction={"column"} container spacing={2} sx={{ width: "60%" }}>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </Grid>
        {/* left section  */}
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, marginLeft: '10%' }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search />
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
          </Box>
          <br />
          <MenuItem icon={Trash} text={"Clear All watch history"} disabled = {false} />
          <MenuItem icon={Pause} text={"Pause watch history"} />
          <MenuItem icon={Settings} text={"Manage All history"} />
        </Box>
      </Box>
    </Box>
  );
}

export default History;
