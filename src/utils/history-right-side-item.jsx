import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function HistoryRightSideItem({ icon: Icon, text, disabled = 'true' }) {
  return (
    <Box 
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
      <Icon size={20} />
      <Typography sx={{ marginLeft: "15px" }}>{text}</Typography>
    </Box>
  );
}

export default HistoryRightSideItem;