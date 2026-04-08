import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import bannersvg from "@/assets/svg/2.svg";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <Container  maxWidth="lg" sx={{ mt: 10, zIndex: "1300"}}>
      <Box
        sx={{
          backgroundColor: "#eeb84c",
          borderRadius: "8px",
          padding: { xs: 5, md: 12 },
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          position: "relative", // মেইন বক্স রিলেটিভ থাকবে
          overflow: "hidden", // ব্যানার যেন বক্সের বাইরে না যায়
        }}
      >
        {/* SVG ব্যানার - এটি নিচে থাকবে */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1, // কম ইনডেক্স যাতে নিচে থাকে
            opacity: 0.8, // প্রয়োজন অনুযায়ী অপাসিটি কমাতে পারেন
            pointerEvents: "none", // যাতে ব্যানারের কারণে ইনপুটে ক্লিক করতে সমস্যা না হয়
          }}
        >
          <Image
            src={bannersvg}
            alt="Donation Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "#1a3d34",
              mb: 4,
            }}
          >
            নিয়মিত নিউজলেটার পেতে সাবস্ক্রাইব করুন
          </Typography>

          <Grid container spacing={2} alignItems="flex-end" component="div">
            <Grid item xs={12} sm={6} md={9} component="div">
              <TextField
                fullWidth
                placeholder="মোবাইল নম্বর / ইমেইল লিখুন"
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3} component="div">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#008944",
                  "&:hover": { backgroundColor: "#006d36" },
                  height: "56px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                সাবস্ক্রাইব
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default NewsLetter;
