import { AppBar, Button, Typography, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{ width: "100%", boxShadow: "none", left: 0, top: 0 }}
    >
      <Toolbar sx={{ px: 2, display: "flex", justifyContent: "space-between" }}>
        {/* LEFT SECTION */}
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <img
            src="/NJIT-CS351-RSA-Algorithm/lock.svg"
            alt="lock icon"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "8px",
            }}
          />
          RSA Encryption
        </Typography>

        {/* RIGHT SECTION */}
        <Button color="inherit" onClick={() => navigate("/calculator")}>
          RSA Calculator
        </Button>
      </Toolbar>
    </AppBar>
  );
}
