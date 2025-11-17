import { Box, Grid, Typography, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoCard from "../components/UI/all-videos/videoCard";
import { AlertCircle } from "lucide-react";

function AllVideos() {
  const playlist = useSelector((state) => state.Playlist.playlists);
  const isError = useSelector((state) => state.Playlist.isError);
  const isLoading = useSelector((state) => state.Playlist.isLoading);

  const { id } = useParams();
  const AllVideos = playlist.filter((p) => p.playlistId === id);
  const displayAllVideos = AllVideos[0]?.playlistItems || [];

  return (
    <Box
      sx={{
        padding: { xs: "4%", sm: "3%", md: "2%" },
        height: "80vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: 3,
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
          Videos ({displayAllVideos.length})
        </Typography>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            paddingRight: "12px",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.4)",
              },
            },
          }}
        >
          {isError && (
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
          )}

          {isLoading && (
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
          )}

          {!isLoading && displayAllVideos.length === 0 && (
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
                  No Videos Found
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  This playlist is empty
                </Typography>
              </Box>
            </Box>
          )}

          {!isLoading && displayAllVideos.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {displayAllVideos.map((item, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid size={{ xs: 12, sm: 12, md: 9 }}></Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                    <VideoCard img={item.thumbnail.url} title={item.title} />
                  </Grid>
                </Grid>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AllVideos;