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
            style={{ objectFit: "cover" }} // ইমেজটি ব্যাকগ্রাউন্ড হিসেবে সেট করা হয়েছে
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
            justifyItems="center"
            justifyContent="center"
            mt="50px"
          >
            {/* Logo and Description */}
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Box mb={3}>
                <Image
                  src={logo}
                  alt="logo"
                  style={{
                    width: "80px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography fontSize="14px" color="white" lineHeight={1.8}>
                Al Arafat Foundation is a non-profit, non-political, and
                humanitarian organization dedicated to serving underprivileged
                communities through education, healthcare, emergency relief, and
                various humanitarian initiatives. Guided by the values of
                humanity, responsibility, and the noble teachings of Prophet
                Muhammad (PBUH), we are committed to building a just,
                compassionate, and welfare-oriented society for the betterment
                of humanity.
              </Typography>
              <Stack direction="row" spacing={1} mt={3}>
                <IconButton
                  href="https://www.facebook.com/profile.php?id=61564801465531"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <FacebookRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  href="https://youtube.com/@alarafatfoundation?si=ynIm6p6JP-W86Ovy"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <YouTubeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/al-arafat-foundation-687a833b2/"
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
                Menu
              </Typography>
              <Link href="/about" style={linkStyle}>
                About Us
              </Link>
              <Link href="/activities" style={linkStyle}>
                Our Activities
              </Link>
              <Link href="/blogs" style={linkStyle}>
                Blogs
              </Link>
              <Link href="/gallery" style={linkStyle}>
                Gallery
              </Link>
            </Grid2>

            {/* Join Us Section */}
            <Grid2 size={{ xs: 6, md: 2 }}>
              <Typography variant="h6" fontSize="18px" fontWeight="bold" mb={2}>
                Join Us
              </Typography>
              <Link href="/donor" style={linkStyle}>
                Regular Donors
              </Link>
              <Link href="/life-member" style={linkStyle}>
                Life & Donor Members
              </Link>
              <Link href="/volunteer" style={linkStyle}>
                Volunteer
              </Link>
              <Link href="/career" style={linkStyle}>
                Careers
              </Link>
            </Grid2>

            {/* Others Section */}
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" fontSize="18px" fontWeight="bold" mb={2}>
                Others
              </Typography>
              <Link href="/contact" style={linkStyle}>
                Contact Us
              </Link>
              <Link href="/terms" style={linkStyle}>
                Terms of Service
              </Link>
              <Link href="/privacy" style={linkStyle}>
                Privacy Policy
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
              Copyright &copy; 2026 Al-Arafat Foundation - All Rights Reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
