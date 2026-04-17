import { Card, CardContent, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import post from "@/assets/images/blog1.webp";


const BlogCard = async () => {
  // const res = await fetch("/blogFake.json");
  // const data = await res.json();
  // console.log(data);
  return (
    <Container>
      <Card
        sx={{
          display: "flex", // ফ্লেক্সবক্স ব্যবহার করলে গ্রিড আরও ভালো কাজ করে
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid #f0f0f0",
          m: 2,
          // maxHeight তুলে দেওয়া ভালো যদি কন্টেন্ট বেশি হয়, অথবা নির্দিষ্ট হাইট দিন
          height: { md: 350 },
        }}
      >
        <Grid2 container sx={{ width: "100%" }}>
          {/* বাম দিকের ইমেজ সেকশন */}
          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{ position: "relative", height: { xs: 250, md: "100%" } }}
          >
            <Image
              src={post}
              alt="post"
              fill // এটি ইমেজকে প্যারেন্ট ডিভ এর পুরোটা জুড়ে রাখবে
              style={{ objectFit: "cover" }}
            />
          </Grid2>

          {/* ডান দিকের কন্টেন্ট সেকশন */}
          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "white", // ব্যাকগ্রাউন্ড নিশ্চিত করা
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#1a3a34",
                  mb: 2,
                  fontFamily: '"Hind Siliguri", sans-serif',
                  lineHeight: 1.3,
                }}
              >
                উন্মুক্ত মাঠে ঈদের সালাত ও আনন্দ আয়োজন অনুষ্ঠিত
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#5f6368",
                  mb: 3,
                  lineHeight: 1.7,
                  fontFamily: '"Hind Siliguri", sans-serif',
                }}
              >
                রাজধানীর বাড্ডার সাঁতারকুলের স্বদেশ প্রোপার্টিজে আস সুন্নাহর
                মসজিদ কমপ্লেক্স সংলগ্ন মাদরাসাতুস সুন্নাহর খোলা মাঠে চতুর্থবারের
                মতো ঈদুল ফিতরের জামাত ও...
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  color: "#9aa0a6",
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                ২২ মার্চ, ২০২৬
              </Typography>
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
    </Container>
  );
};

export default BlogCard;
