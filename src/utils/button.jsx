import Button from "@mui/material/Button";

function HistoryButton({ text }) {
  return (
      <Button
        sx={{
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          marginRight: "5px",
          fontSize: "0.8rem",
          color: 'inherit',
          "&:hover": {
            color: '#59839aff'
          }
        }}
      >
        {text}
      </Button>
  );
}

export default HistoryButton;
