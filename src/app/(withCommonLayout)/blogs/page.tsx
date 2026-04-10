import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import blogbanner from "@/assets/images/blog-banner.jpeg";
import post from "@/assets/images/blog1.webp";

const BlogPage = () => {
  return (
    <Box>
      <Box position="relative">
        <Box sx={{ height: "400px", overflow: "hidden" }}>
          <Image src={blogbanner} alt="blogbanner" style={{ width: "100%" }} />
        </Box>
        <Box
          bgcolor="rgba(0, 0, 0, 0.8)"
          width="100%"
          height="100%"
          position="absolute"
          top={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" color="white" fontWeight="bold">
            ব্লগ
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box bgcolor="black" height="350px">
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box height="200">
                <Image src={post} alt="recent-post" height={350}></Image>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography>
                উন্মুক্ত মাঠে ঈদের সালাত ও আনন্দ আয়োজন অনুষ্ঠিত
              </Typography>
              <Typography>
                রাজধানীর বাড্ডার সাতারকুলের স্বদেশ প্রপার্টিজে আস সুন্নাহ’র
                মসজিদ কমপ্লেক্স সংলগ্ন মাদরাসাতুস সুন্নাহর খোলা মাঠে চতুর্থবারের
                মতো ঈদুল ফিতরের জামাত ও আনন্দ আয়োজন অনুষ্ঠিত হয়েছে। নামাজের
                ইমামতি করেছেন আস-সুন্নাহ ফাউন্ডেশনের চেয়ারম্যান শায়খ
                আহমাদুল্লাহ।
              </Typography>
              <Typography>12 মার্চ, ২০২৬</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
