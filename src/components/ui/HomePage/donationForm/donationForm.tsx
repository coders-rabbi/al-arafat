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

const DonationForm = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: -15 }}>
      <Box
        sx={{
          backgroundColor: "#eeb84c",
          borderRadius: "8px",
          padding: { xs: 3, md: 5 },
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
            আপনার অনুদান প্রদান করুন
          </Typography>

          <Grid container spacing={2} alignItems="flex-end" component="div">
            <Grid item xs={12} sm={6} md={3} component="div">
              <Typography sx={{ fontWeight: "bold", mb: 1, color: "#1a3d34" }}>
                তহবিল <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                select
                fullWidth
                defaultValue=""
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                slotProps={{
                  select: {
                    displayEmpty: true,
                  },
                }}
              >
                <MenuItem value="" disabled>নির্বাচন করুন</MenuItem>
                <MenuItem value="zakat">যাকাত তহবিল</MenuItem>
                <MenuItem value="general">সাধারণ তহবিল</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={3} component="div">
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography sx={{ fontWeight: "bold", color: "#1a3d34" }}>
                  মোবাইল / ইমেইল <span style={{ color: "red" }}>*</span>
                </Typography>
                <IconButton size="small" sx={{ ml: 0.5, p: 0 }}>
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Box>
              <TextField
                fullWidth
                placeholder="মোবাইল নম্বর / ইমেইল লিখুন"
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3} component="div">
              <Typography sx={{ fontWeight: "bold", mb: 1, color: "#1a3d34" }}>
                পরিমাণ <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="৮ সংখ্যায় লিখুন"
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
                দান করুন
              </Button>
            </Grid>
          </Grid>

          <Typography
            align="center"
            sx={{ mt: 3, color: "#1a3d34", fontSize: "0.95rem" }}
          >
            আস-সুন্নাহ ফাউন্ডেশনে দান করলে কর রেয়াত পাবেন।{" "}
            <Box
              component="span"
              sx={{
                color: "#008944",
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              বিস্তারিত জানতে ক্লিক করুন।
            </Box>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default DonationForm;