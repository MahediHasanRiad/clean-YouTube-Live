import { Box, Skeleton } from "@mui/material"

function IsLoadingData() {
  return (
    <Box sx={{ marginTop: "40px" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 2,
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Skeleton
                    key={item}
                    variant="rectangular"
                    height={160}
                    sx={{ borderRadius: "12px" }}
                  />
                ))}
              </Box>
            </Box>
  )
}

export default IsLoadingData
