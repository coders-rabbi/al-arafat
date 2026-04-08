"use client";

import { Box, Button, Typography, Container } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        {/* বড় করে ৪০৪ টেক্সট */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", md: "10rem" },
            fontWeight: "bold",
            color: "#1a3d34",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mt: 2,
            mb: 1,
            color: "#333",
          }}
        >
          দুঃখিত! পেজটি পাওয়া যায়নি।
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            mb: 4,
            maxWidth: "500px",
          }}
        >
          আপনি যে লিঙ্কটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে অথবা বর্তমানে কাজ
          করছে না। দয়া করে মেইন পেজে ফিরে গিয়ে আবার চেষ্টা করুন।
        </Typography>

        {/* হোম পেজে ফিরে যাওয়ার বাটন */}
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            sx={{
              backgroundColor: "#008944",
              "&:hover": { backgroundColor: "#006d36" },
              padding: "10px 25px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            হোম পেজে ফিরে যান
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
