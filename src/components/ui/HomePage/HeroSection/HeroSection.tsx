import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Hero from "@/assets/images/hero-bg.jpeg";
import zIndex from "@mui/material/styles/zIndex";

const HeroSection = () => {
  return (
    // <Box sx={{ bgcolor: "#0F2920", position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    //   <Box>
    //     {/* <Box
    //       sx={{
    //         position: "absolute",
    //         top: 0,
    //         left: 0,
    //         width: "100%",
    //         height: "100%",
    //         zIndex: -1
    //       }}
    //     >
    //       <Image
    //         src={Hero}
    //         alt="Hero Background"
    //         fill
    //         style={{ objectFit: "cover" }}
    //       />
    //     </Box> */}
    //   </Box>
    // </Box>

    <Box>
      <Box position="relative">
        <Box sx={{ height: "100vh", overflow: "hidden" }}>
          <Image
            src={Hero}
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
          <Box sx={{ textAlign: { xs: "center", md: "start" } }} px={2}>
            <Typography
              variant="h3"
              color="white"
              fontWeight="700"
              mb={4}
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                ml: { md: "8%" },
              }}
            >
              আল-আরাফাত ফাউন্ডেশন
            </Typography>
            <Typography
              variant="h6"
              color="white"
              lineHeight={1.8}
              sx={{ mt: 1, width: { md: "60%" }, ml: { md: "8%" } }}
            >
              আল-আরাফাত ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক, মানবকল্যাণে নিবেদিত
              সেবামূলক সংগঠন। ২০২২ইং সালে হাফেজ মোহাম্মাদ নূর ও সিরাজুল হক আবরার
              এটি প্রতিষ্ঠা করেন।
            </Typography>
            <Box mt={3} ml="8%">
              <Button>আরও জানুন</Button>
              <Button
                variant="outlined"
                component={Link}
                href="/events"
                sx={{
                  marginLeft: "20px",
                  color: "white",
                  borderColor: "white",
                  fontWeight: "bold",
                }}
              >
                কার্যক্রমসমূহ
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
