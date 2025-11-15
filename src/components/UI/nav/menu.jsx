import { Typography, Box } from "@mui/material";
import { Heart, ChevronRight, History, ListPlus, Tv, GraduationCap, Clock, ThumbsUp, Download, Settings, Flag, HelpCircle, MessageSquare } from 'lucide-react';
import MenuItem from "./menu-item";

export default function Menu() {
  return (
    <Box 
      sx={{ 
        width: { xs: '100%', sm: '240px', md: '250px' },
        height: '100vh',
        overflowY: 'auto',
        position: { xs: 'relative', sm: 'sticky' },
        top: 0,
      }}
    >
      {/* Favourite */}
      <MenuItem icon={Heart} text="Favourite" link="home" disabled={false} />

      {/* Divider */}
      <Box sx={{ width: "100%", height: '1px', bgcolor: '#e0e0e0', my: 1.5 }} />

      {/* Section Header */}
      <Box sx={{ display: "flex", alignItems: 'center', px: 2, py: 1.5 }}>
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '14px' }}>You</Typography>
        <ChevronRight size={18} />
      </Box>

      {/* Menu Items - You Section */}
      <MenuItem icon={History} text="History" link="history" disabled={false} />
      <MenuItem icon={ListPlus} text="Playlist" link="playlist" disabled={false} />
      <MenuItem icon={Tv} text="Your Videos" disabled={true} />
      <MenuItem icon={GraduationCap} text="Your Courses" disabled={true} />
      <MenuItem icon={Clock} text="Watch later" disabled={true} />
      <MenuItem icon={ThumbsUp} text="Liked Videos" disabled={true} />
      <MenuItem icon={Download} text="Downloaded" disabled={true} />

      {/* Divider */}
      <Box sx={{ width: "100%", height: '1px', bgcolor: '#e0e0e0', my: 1.5 }} />

      {/* Menu Items - Settings Section */}
      <MenuItem icon={Settings} text="Settings" disabled={true} />
      <MenuItem icon={Flag} text="Report History" disabled={true} />
      <MenuItem icon={HelpCircle} text="Help" disabled={true} />
      <MenuItem icon={MessageSquare} text="Send Feedback" disabled={true} />

      {/* Divider */}
      <Box sx={{ width: "100%", height: '1px', bgcolor: '#e0e0e0', my: 1.5 }} />

      {/* Footer */}
      <Box sx={{ px: 2, py: 2 }}>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            color: '#606060',
            fontSize: '11px',
            lineHeight: 1.6,
            mb: 1
          }}
        >
          About Press Copyright Contact us Creators Advertise Developers
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            color: '#606060',
            fontSize: '11px',
            lineHeight: 1.6,
            mb: 1
          }}
        >
          Terms Privacy Policy & Safety How YouTube works Test new features
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            color: '#606060',
            fontSize: '11px',
            lineHeight: 1.6
          }}
        >
          © 2025 Google LLC
        </Typography>
      </Box>
    </Box>
  );
}