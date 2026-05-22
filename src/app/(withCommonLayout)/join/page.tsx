import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";
const page = () => {
  return (
    <Box>
      <Box position="relative">
        <Box sx={{ height: { xs: "250px", md: "400px" }, overflow: "hidden" }}>
          <Image
            src={bannerImg}
            alt="blogbanner"
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          bgcolor="rgba(0, 0, 0, 0.7)"
          width="100%"
          height="100%"
          position="absolute"
          top={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center" px={2}>
            <Typography
              variant="h5"
              color="white"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Join With Us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: "80px" }}>
        <Typography variant="h4" fontWeight={700}>
          Join With Us Via Different Ways
        </Typography>
        <Typography color="secondary.main" mt={2}>
          If you want to be a part of the beneficial activities of As-Sunnah
          Foundation, you can join us in any of the following ways. Please click
          on any option according to your interest.
        </Typography>
      </Container>

      <NewsLetter />
    </Box>
  );
};

export default page;
