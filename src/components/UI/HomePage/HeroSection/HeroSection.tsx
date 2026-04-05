import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Hero from "@/assets/images/hero-bg.webp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "800px",
        overflow: "hidden",
        zIndex: 0, // Navbar এর নিচে থাকবে
      }}
    >
      <Image
        src={Hero}
        alt="Hero"
        fill // Next.js এর নতুন ভার্সনে layout="fill" এর বদলে fill ব্যবহার করা হয়
        style={{ objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)", // ০.৫ হলো অন্ধকার বা অপাসিটির পরিমাণ
          zIndex: 1, // ইমেজের উপরে থাকবে
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: { xs: "20px", md: "80px" },
        }}
      >
        <Typography variant="h3" component="h1" fontWeight={700} color="white">
          আল-আরাফা ফাউন্ডেশন
        </Typography>
        <Typography variant="h6" component="p" mt={2} color="white">
          আল-আরাফা ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত{" "}
          <br />
          মানবকল্যাণে নিবেদিত সেবামূলক সরকার-নিবন্ধিত প্রতিষ্ঠান। নিবন্ধন নম্বর:{" "}
          <br />
          এস-১৩১১১/২০১৯।
        </Typography>
        <Box mt={3}>
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
  );
};

export default HeroSection;
