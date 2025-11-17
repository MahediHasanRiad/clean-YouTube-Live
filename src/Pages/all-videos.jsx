import { Box, Typography, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import VideoCard from "../components/UI/all-videos/videoCard";
import { AlertCircle, ChevronDown } from "lucide-react";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function AllVideos() {
  const playlist = useSelector((state) => state.Playlist.playlists);
  const isError = useSelector((state) => state.Playlist.isError);
  const isLoading = useSelector((state) => state.Playlist.isLoading);

  const { id, videoId } = useParams();
  const AllVideos = playlist.filter((p) => p.playlistId === id);
  const displayAllVideos = AllVideos[0]?.playlistItems || [];

  const [videoIndex, setVideoIndex] = useState(0);
  // const navigate = useNavigate();

  // get index for showing video count
  const getIndex = (index) => {
    setVideoIndex(index);
    console.log(videoIndex);
  };

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
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#1a1a1a",
            marginBottom: 3,
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
          Videos ({videoIndex + 1}/{displayAllVideos.length})
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
                  background:
                    "linear-gradient(135deg, #f0f4ff 0%, #f5f7fa 100%)",
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
            <Box sx={{ display: "flex", gap: 2, height: "100%" }}>
              {/* Left Section - Fixed Content */}
              <Box
                sx={{
                  flex: "0 0 75%",
                  p: 2,
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflowY: "hidden",
                }}
              >
                {/* Display Video  */}
                <ReactPlayer
                  src={`https://www.youtube.com/embed/${videoId}`}
                  controls
                  muted
                  width={"100%"}
                  height={"100%"}
                  onReady
                />
              </Box>

              {/* Right Section - Scrollable Videos */}

              <Accordion
                sx={{
                  flex: "0 0 25%",
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  paddingRight: "8px",
                  "&::-webkit-scrollbar": {
                    width: "12px",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "transparent",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "3px",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.4)",
                    },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Playlists</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {displayAllVideos.map((item, index) => (
                      <VideoCard
                        key={index}
                        index={index}
                        img={item.thumbnail.url}
                        title={item.title}
                        playlistId={item.playlistId}
                        videoId={item.videoId}
                        getIndex={getIndex}
                      />
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AllVideos;
