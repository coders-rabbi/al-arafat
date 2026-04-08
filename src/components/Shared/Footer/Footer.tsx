"use client";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import footerImg from "@/assets/images/footer-image.png"; // নিশ্চিত করুন এটি মসজিদের সিলুয়েট ইমেজ
import logo from "@/assets/images/footer-logo.png"; // নিশ্চিত করুন এটি আস-সুন্নাহ ফাউন্ডেশনের লোগো

// Icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      position="relative"
      mt={10}
      sx={{
        backgroundColor: "#0F2920",
        color: "white",
        pt: { xs: 3, md: 10 },
        pb: { xs: 3, md: 2 },
        overflow: "hidden",
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={100}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end", // মসজিদের সিলুয়েট ফুটারে নিচে থাকবে
        }}
      >
        <Image
          src={footerImg}
          alt="footer silhouette"
          width={1920} // একটি বড় উইডথ দিন যাতে পুরো স্ক্রিন কভার করে
          height={400}
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="space-between">
          {/* Logo and About Column */}
          <Grid item xs={6} md={4}>
            <Stack spacing={2} alignItems={{ md: "flex-start" }}>
              <Box>
                <Image src={logo} alt="al-arafat logo" width={80} height={80} />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  textAlign: { md: "left" },
                  maxWidth: "300px",
                }}
              >
                এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত,
                মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে
                আর্তমানবতার সেবায় একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি
                প্রচেষ্টা চালিয়ে যাচ্ছে।
              </Typography>

              {/* Social Icons */}
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  color="inherit"
                >
                  <FacebookRoundedIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  color="inherit"
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Menu Column */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              মেনু
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="hover">
                আমাদের সম্পর্কে
              </Link>
              <Link href="#" color="inherit" underline="hover">
                কার্যক্রমসমূহ
              </Link>
              <Link href="#" color="inherit" underline="hover">
                ব্লগ
              </Link>
              <Link href="#" color="inherit" underline="hover">
                গ্যালারি
              </Link>
            </Stack>
          </Grid>

          {/* Join Us Column */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              যুক্ত হোন
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="hover">
                নিয়মিত দাতা সদস্য
              </Link>
              <Link href="#" color="inherit" underline="hover">
                আজীবন ও দাতা সদস্য
              </Link>
              <Link href="#" color="inherit" underline="hover">
                স্বেচ্ছাসেবক
              </Link>
              <Link href="#" color="inherit" underline="hover">
                ক্যারিয়ার
              </Link>
            </Stack>
          </Grid>

          {/* Others Column */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              অন্যান্য
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="hover">
                যোগাযোগ
              </Link>
              <Link href="#" color="inherit" underline="hover">
                পরিষেবার শর্তাবলী
              </Link>
              <Link href="#" color="inherit" underline="hover">
                গোপনীয়তা নীতি
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          mt: { xs: 6, md: 8 },
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          pt: 3,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="caption" color="rgba(255, 255, 255, 0.7)">
            স্বত্ব &copy; 2026 আস-সুন্নাহ ফাউন্ডেশন - সর্ব স্বত্ব সংরক্ষিত।
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
