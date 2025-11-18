import { Box, AlertCircle, Typography } from "@mui/material"

function IsError({ isError }) {
  return (
    <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: 3,
                background: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
                border: "1px solid #ef5350",
                borderRadius: "12px",
                marginTop: "20px",
              }}
            >
              <AlertCircle color="#c62828" size={32} />
              <Typography
                variant="h6"
                sx={{ color: "#c62828", fontWeight: 600 }}
              >
                {isError}
              </Typography>
            </Box>
  )
}

export default IsError
