import { Typography } from "@mui/material";

function CreateText() {
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: "0.95rem",
        fontWeight: 600,
        color: "#030303",
        // Hide text on mobile, show on small screens and up
        display: { xs: "none", sm: "block" },
      }}
    >
      Create
    </Typography>
  );
}

export default CreateText;
