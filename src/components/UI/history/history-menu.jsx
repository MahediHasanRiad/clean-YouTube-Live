import { Typography, Box } from "@mui/material";

function HistoryMenuItem({ icon: Icon, text, onClick, disabled = true }) {
  return (
      <Box
        onClick = {onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, sm: 2.5 },
          padding: { xs: "12px 20px", sm: "10px 16px" },
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "background-color 0.2s ease",
          borderRadius: "10px",
          mx: { xs: 0.5, sm: 1 },
          opacity: disabled ? 0.6 : 1,
          pointerEvents: disabled ? "none" : "auto",
          "&:hover": {
            backgroundColor: disabled ? "transparent" : "#f2f2f2",
          },
        }}
      >
        <Icon size={22} strokeWidth={1.5} />
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: '14px',
            fontWeight: 400,
          }}
        >
          {text}
        </Typography>
      </Box>
  );
}

export default HistoryMenuItem;