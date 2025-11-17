import { Typography, Box } from "@mui/material";
import { Heart, ChevronRight, History, ListPlus, Tv, GraduationCap, Clock, ThumbsUp, Download, Settings, Flag, HelpCircle, MessageSquare } from 'lucide-react';
import MenuItem from "./menu-item";

export default function Menu() {
  return (
    <Box 
      sx={{ 
        // This is the key for responsive width
        width: { xs: '100%', sm: '240px', md: '260px' },
        height: '100vh',
        overflowY: 'auto',
        // This is the key for responsive behavior (sticky vs. in-flow)
        position: { xs: 'relative', sm: 'sticky' },
        top: 0,
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        // This hides the border on mobile
        borderRight: { xs: 'none', sm: '1px solid rgba(0, 0, 0, 0.08)' },
        display: 'flex',
        flexDirection: 'column',
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.15)",
          borderRadius: "3px",
          "&:hover": {
            background: "rgba(0, 0, 0, 0.3)",
          },
        },
      }}
    >
      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {/* Favourite */}
        <Box sx={{ px: { xs: 1.5, sm: 2 }, pt: 2 }}>
          <MenuItem icon={Heart} text="Favourite" link="" disabled={false} />
        </Box>

        {/* Divider */}
        <Box sx={{ width: "100%", height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)', my: 2 }} />

        {/* Section Header */}
        <Box sx={{ 
          display: "flex", 
          alignItems: 'center', 
          justifyContent: 'space-between',
          px: { xs: 1.5, sm: 2 }, // Responsive padding
          py: 1.5,
          background: 'rgba(0, 0, 0, 0.02)',
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 600, 
              fontSize: '13px',
              color: '#1a1a1a',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            You
          </Typography>
          <ChevronRight size={16} color="#666" />
        </Box>

        {/* Menu Items - You Section */}
        <Box sx={{ px: { xs: 1.5, sm: 2 }, py: 1 }}> {/* Responsive padding */}
          <MenuItem icon={History} text="History" link="history" disabled={false} />
          <MenuItem icon={ListPlus} text="Playlist" link="playlist" disabled={false} />
          <MenuItem icon={Tv} text="Your Videos" disabled={true} />
          <MenuItem icon={GraduationCap} text="Your Courses" disabled={true} />
          <MenuItem icon={Clock} text="Watch later" disabled={true} />
          <MenuItem icon={ThumbsUp} text="Liked Videos" disabled={true} />
          <MenuItem icon={Download} text="Downloaded" disabled={true} />
        </Box>

        {/* Divider */}
        <Box sx={{ width: "100%", height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)', my: 2 }} />

        {/* Menu Items - Settings Section */}
        <Box sx={{ px: { xs: 1.5, sm: 2 }, py: 1 }}> {/* Responsive padding */}
          <MenuItem icon={Settings} text="Settings" disabled={true} />
          <MenuItem icon={Flag} text="Report History" disabled={true} />
          <MenuItem icon={HelpCircle} text="Help" disabled={true} />
          <MenuItem icon={MessageSquare} text="Send Feedback" disabled={true} />
        </Box>
      </Box>

      {/* Footer - Sticky at Bottom */}
      <Box sx={{ px: { xs: 1.5, sm: 2 }, py: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)', background: 'rgba(0, 0, 0, 0.02)' }}>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            color: '#666',
            fontSize: { xs: '10px', sm: '11px' }, // Responsive font size
            lineHeight: 1.6,
            mb: 1.5,
            fontWeight: 500
          }}
        >
          About Press Copyright Contact us Creators Advertise Developers
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            color: '#666',
            fontSize: { xs: '10px', sm: '11px' }, // Responsive font size
            lineHeight: 1.6,
            mb: 1.5,
            fontWeight: 500
          }}
        >
          Terms Privacy Policy & Safety How YouTube works Test new features
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            color: '#999',
            fontSize: { xs: '10px', sm: '11px' }, // Responsive font size
            lineHeight: 1.6,
            fontWeight: 500
          }}
        >
          © 2025 Google LLC
        </Typography>
      </Box>
    </Box>
  );
}