"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import blogbanner from "@/assets/images/blog-banner.jpeg";
import post from "@/assets/images/blog1.webp";
import useBlog from "@/hooks/useBlog";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";

export interface BlogItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image_url: string;
}

const BlogPage = () => {
  const { blogs, loading, error } = useBlog();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Box>
      <Box position="relative">
        <Box sx={{ height: { xs: "250px", md: "400px" }, overflow: "hidden" }}>
          <Image
            src={blogbanner}
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
          <Typography
            variant="h3"
            color="white"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
          >
            ব্লগ
          </Typography>
        </Box>
      </Box>
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
                  মসজিদ কমপ্লেক্স সংলগ্ন মাদরাসাতুস সুন্নাহর খোলা মাঠে
                  চতুর্থবারের মতো ঈদুল ফিতরের জামাত ও...
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

      <Container>
        <Container sx={{ py: { xs: 4, md: 8 } }}>
          {/* Grid2 Container লুপের বাইরে থাকবে */}
          <Grid2 container spacing={4}>
            {blogs.map((item: BlogItem) => (
              /* লুপের প্রথম এলিমেন্টে key দিতে হবে */
              <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    borderRadius: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 10 },
                  }}
                >
                  <CardActionArea sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        position: "relative",
                        height: "220px",
                        width: "100%",
                      }}
                    >
                      <Image
                        src={item.image_url || emergencyRelif}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        display="flex"
                        alignItems="center"
                        gap="5px"
                        color="#D08545"
                        mb="10px"
                        variant="subtitle2"
                      >
                        <RocketLaunchIcon fontSize="small" /> নিয়মিত কার্যক্রম
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight="bold"
                        component="div"
                        sx={{
                          fontSize: "1.25rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: "15px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.description}
                      </Typography>

                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          mt: "auto",
                          fontWeight: "bold",
                          borderRadius: "10px",
                          textTransform: "none",
                        }}
                      >
                        বিস্তারিত দেখুন
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid2>
            ))}
          </Grid2>

          <NewsLetter />
        </Container>
      </Container>
    </Box>
  );
};

export default BlogPage;
