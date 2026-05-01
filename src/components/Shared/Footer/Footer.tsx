"use client";
import {
  Box,
  Container,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import footerImg from "@/assets/images/footer-image.png";
import logo from "@/assets/svg/logo.svg";

// Icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "12px",
    opacity: 0.8,
  };

  return (
    <Box component="footer" sx={{ bgcolor: "#0F2920", color: "white", mt: 5 }}>
      <Box position="relative">
        {/* Background Image Area */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Image
            src={footerImg}
            alt="Footer Background"
            fill
            style={{ objectFit: "cover" }} // ইমেজটি ব্যাকগ্রাউন্ড হিসেবে সেট করা হয়েছে
          />
        </Box>

        {/* Content Area */}
        <Container
          maxWidth="lg"
          sx={{ zIndex: 2, position: "relative", py: 8 }}
        >
          <Grid2
            container
            spacing={4}
            alignItems="center"
            justifyItems="center"
            justifyContent="center"
          >
            {/* Logo and Description */}
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Box mb={3}>
                <Image
                  src={logo}
                  alt="logo"
                  style={{
                    width: "100px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography fontSize="14px" color="white" lineHeight={1.8}>
                এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত,
                মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে
                আর্তমানবতার সেবায় একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি
                প্রচেষ্টা চালিয়ে যাচ্ছে।
              </Typography>
              <Stack direction="row" spacing={1} mt={3}>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <FacebookRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <YouTubeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Grid2>

            {/* Menu Section */}
            <Grid2 size={{ xs: 6, md: 2 }} offset={{ md: 1 }}>
              <Typography variant="h6" fontSize="18px" fontWeight="bold" mb={2}>
                মেনু
              </Typography>
              <Link href="/about" style={linkStyle}>
                আমাদের সম্পর্কে
              </Link>
              <Link href="/projects" style={linkStyle}>
                কার্যক্রমসমূহ
              </Link>
              <Link href="/blog" style={linkStyle}>
                ব্লগ
              </Link>
              <Link href="/gallery" style={linkStyle}>
                গ্যালারি
              </Link>
            </Grid2>

            {/* Join Us Section */}
            <Grid2 size={{ xs: 6, md: 2 }}>
              <Typography variant="h6" fontSize="18px" fontWeight="bold" mb={2}>
                যুক্ত হোন
              </Typography>
              <Link href="/donor" style={linkStyle}>
                নিয়মিত দাতা সদস্য
              </Link>
              <Link href="/life-member" style={linkStyle}>
                আজীবন ও দাতা সদস্য
              </Link>
              <Link href="/volunteer" style={linkStyle}>
                স্বেচ্ছাসেবক
              </Link>
              <Link href="/career" style={linkStyle}>
                ক্যারিয়ার
              </Link>
            </Grid2>

            {/* Others Section */}
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" fontSize="18px" fontWeight="bold" mb={2}>
                অন্যান্য
              </Typography>
              <Link href="/contact" style={linkStyle}>
                যোগাযোগ
              </Link>
              <Link href="/terms" style={linkStyle}>
                পরিষেবার শর্তাবলী
              </Link>
              <Link href="/privacy" style={linkStyle}>
                গোপনীয়তা নীতি
              </Link>
            </Grid2>
          </Grid2>
        </Container>
        {/* Copyright Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            py: 3,
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography fontSize="14px" color="rgba(255,255,255,0.7)">
              স্বত্ব &copy; 2026 আল-আরাফাত ফাউন্ডেশন - সর্ব স্বত্ব সংরক্ষিত।
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
