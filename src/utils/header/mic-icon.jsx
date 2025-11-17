import { IconButton } from "@mui/material"
import { Mic } from "lucide-react"

function MicIcon() {
  return (
    <div>
      <IconButton
          sx={{
            marginLeft: "12px",
            background: "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)",
            borderRadius: "50%",
            padding: "10px",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #e8e8e8 0%, #dcdcdc 100%)",
              transform: "scale(1.05)",
            },
            // Hide Mic icon on mobile, show on small screens and up
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Mic size={20} />
        </IconButton>
    </div>
  )
}

export default MicIcon
