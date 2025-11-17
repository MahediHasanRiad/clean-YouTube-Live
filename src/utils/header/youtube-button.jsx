import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { FaYoutube } from "react-icons/fa6"

function Youtube() {
  return (
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <FaYoutube color="#ff0000" size={32} />
          </Link>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "#030303",
              // Hide text on mobile, show on small screens and up
              display: { xs: 'none', sm: 'block' } 
            }}
          >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>YouTube</Link>
          </Typography>
        </Box>
  )
}

export default Youtube
