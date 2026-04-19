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
              আমাদের সাথে যুক্ত হোন
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: "80px" }}>
        <Typography variant="h4" fontWeight={700}>
          আমাদের সঙ্গে যুক্ত হতে পারেন বিভিন্নভাবে
        </Typography>
        <Typography color="secondary.main" mt={2}>
          আপনি যদি আস-সুন্নাহ ফাউন্ডেশনের কল্যাণকর কাজসমূহের অংশীদার হতে চান,
          নিচের যেকোনো একটি উপায়ে আমাদের সঙ্গে যুক্ত হতে পারেন। আপনার আগ্রহ
          অনুযায়ী যেকোনো অপশনে ক্লিক করুন।
        </Typography>
      </Container>

      <NewsLetter />
    </Box>
  );
};

export default page;
