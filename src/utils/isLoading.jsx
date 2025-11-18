import { Box, Typography } from "@mui/material";

function IsLoading({ text1, text2 }) {
  return ( 
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          padding: 4,
          background: "linear-gradient(135deg, #f0f4ff 0%, #f5f7fa 100%)",
          borderRadius: "16px",
          border: "2px dashed rgba(25, 118, 210, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#1976d2",
            fontWeight: 600,
            marginBottom: 1,
          }}
        >
          {text1}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          {text2}
        </Typography>
      </Box>
    </Box>
  );
}

export default IsLoading;
