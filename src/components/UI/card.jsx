import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Check, CircleX, Heart } from "lucide-react";
import { Trash } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardView({
  playlistId,
  img,
  playlistName,
  channelName,
  addItem = "",
  removeItem = "",
}) {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");
  const [Icon, setIcon] = useState(Check);
  const [isHovered, setIsHovered] = useState(false);

  const favourite = useSelector((state) => state.Favourite.favourites);
  const isFavourite = favourite.includes(playlistId);

  const deletePlaylist = () => {
    if(window.confirm('Are you Sure ???')){
      removeItem();
      setOpen(true);
      setAlertType("warning");
      setAlertMsg("Successfully Deleted !");
      setIcon(CircleX);
    }
  };

  const addFavouriteItem = () => {
    addItem();
    setOpen(true);
    setAlertType("success");
    setAlertMsg("Add to Favourite");
    setIcon(Check);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card
        sx={{
          maxWidth: "100%",
          height: "400px",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-4px)",
            borderColor: "rgba(25, 118, 210, 0.2)",
          },
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <Link
            to={`/playlist/${playlistId}`}
            style={{ textDecoration: "none", flex: 1 }}
          >
            <CardMedia
              sx={{
                height: 240,
                transition: "transform 0.3s ease-out",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
              image={img}
              title={playlistName}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: isHovered
                  ? "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0) 100%)"
                  : "none",
                transition: "background 0.3s ease",
              }}
            />
          </Link>
        </Box>

        <CardContent sx={{ flex: 1, overflow: "hidden", pb: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: 1.4,
              color: "#1a1a1a",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {playlistName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontSize: "0.875rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            By {channelName}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            pt: 0.5,
            pb: 1.5,
            px: 2,
            gap: 1,
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={addFavouriteItem}
              sx={{
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(202, 25, 25, 0.08)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Heart
                fill={isFavourite ? "#ca1919" : "none"}
                color={isFavourite ? "#ca1919" : "#1976d2"}
                size={25}
              />
            </IconButton>
            <IconButton
              size="small"
              onClick={deletePlaylist}
              sx={{
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(25, 118, 210, 0.08)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Trash color="#1976d2" size={25} />
            </IconButton>
          </Box>
        </CardActions>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert icon={<Icon fontSize="inherit" />} severity={alertType}>
          {alertMsg}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
