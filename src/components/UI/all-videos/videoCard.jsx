import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";


function VideoCard({ index, img, title, playlistId, videoId, getIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <Link
      to={`/playlist/${playlistId}/video/${videoId}?index=${index}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box sx={{ margin: "2px" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "12px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            height: "90px",
            "&:hover": {
              boxShadow: "0 8px 28px rgba(0, 0, 0, 0.12)",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => getIndex(index)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              minWidth: "140px",
              width: "140px",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease-out",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
              image={img}
              alt="Video thumbnail"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isHovered ? "rgba(0, 0, 0, 0.3)" : "none",
                transition: "background 0.3s ease",
              }}
            >
              {isHovered && (
                <Play
                  size={32}
                  color="#fff"
                  fill="#fff"
                  style={{ transition: "all 0.3s ease" }}
                />
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <CardContent sx={{ flex: 1, pb: 0, pt: 1.5, px: 2 }}>
              <Typography
                component="div"
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  color: "#1a1a1a",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
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
                fontSize: "0.75rem",
              }}
            ></Box>
          </Box>
        </Card>
      </Box>
    </Link>
  );
}

export default VideoCard;
