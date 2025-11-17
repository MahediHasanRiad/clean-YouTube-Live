import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function HistoryCard({ img, title, playlistId, videoId, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <Link
    //   to={`/playlist/${playlistId}/video/${videoId}?index=${index}`}
    //   style={{ textDecoration: "none", color: "inherit" }}
    // >
    <Grid>
      <Card 
        sx={{ 
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          height: { xs: "100px", sm: "auto" },
          cursor: "pointer",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: "12px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0 8px 28px rgba(0, 0, 0, 0.12)",
            transform: "translateY(-2px)"
          }
        }}
        onClick={() => ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          sx={{ 
            width: { xs: "100%", sm: "50%" },
            height: { xs: "100%", sm: "auto" },
            objectFit: "cover",
            transition: "transform 0.3s ease-out",
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
          image={img}
          alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography 
              component="div" 
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a"
              }}
            >
              {title}
            </Typography>
          </CardContent>
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "6px",
              px: 2,
              pb: 1.5,
              color: "#999",
              fontSize: "0.8rem"
            }}
          >
            <Clock size={14} />
            <Typography variant="caption" sx={{ color: "#999" }}>
              2 hours ago
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
    // </Link>
  );
}