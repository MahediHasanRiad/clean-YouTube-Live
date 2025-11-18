import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoCard from "../components/UI/all-videos/videoCard";
import { AlertCircle, ChevronDown } from "lucide-react";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import IsLoading from "../utils/isLoading";
import IsLoadingData from "../utils/isLoadingData";
import IsError from "../utils/isError";

function AllVideos() {
  const playlist = useSelector((state) => state.Playlist.playlists);
  const isError = useSelector((state) => state.Playlist.isError);
  const isLoading = useSelector((state) => state.Playlist.isLoading);

  const { id, videoId } = useParams();
  const AllVideos = playlist.filter((p) => p.playlistId === id);
  const displayAllVideos = AllVideos[0]?.playlistItems || [];

  const [videoIndex, setVideoIndex] = useState(0);

  // get index for showing video count
  const getIndex = (index) => {
    setVideoIndex(index);
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
            paddingRight: "12px", // This padding is for the scrollbar area
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
          {isError && <IsError isError={isError} />}
          {isLoading && <IsLoadingData />}

          {!isLoading && displayAllVideos.length === 0 && (
            <IsLoading
              text1={"No Videos Found "}
              text2={"This playlist is empty"}
            />
          )}

          {!isLoading && displayAllVideos.length > 0 && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                height: "100%",
                flexDirection: { xs: "column", md: "row" }, // Stacks on mobile, row on desktop
              }}
            >
              {/* Left Section - Fixed Content */}
              <Box
                sx={{
                  // Responsive flex, width, height, and aspect ratio
                  flex: { xs: "1 1 auto", md: "0 0 75%" },
                  width: { xs: "100%", md: "75%" },
                  height: { xs: "auto", md: "100%" },
                  aspectRatio: { xs: "16/9", md: "auto" }, // 16:9 player on mobile
                  p: 2,
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
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
                // Make accordion expanded by default, (better for mobile)
                defaultExpanded={true}
                sx={{
                  // Responsive flex and width
                  flex: { xs: "1 1 auto", md: "0 0 25%" },
                  width: { xs: "100%", md: "25%" },
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  // Responsive padding
                  paddingRight: { xs: 0, md: "8px" },
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
