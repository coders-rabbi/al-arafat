import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";
import { Suspense } from "react";

export interface BlogItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image_url: string;
}

// ১. ডাটা লোড করার জন্য আলাদা কম্পোনেন্ট
const BlogList = async () => {
  const res = await fetch(
    "https://al-arafatfoundation-server.vercel.app/blogs",
    { cache: "no-store" }, // বা আপনার প্রয়োজন মত ক্যাশ সেট করতে পারেন
  );
  const blogs: BlogItem[] = await res.json();

  return (
    <Grid2 container spacing={4}>
      {blogs.map((item: BlogItem) => (
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
                sx={{ position: "relative", height: "220px", width: "100%" }}
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
                  <RocketLaunchIcon fontSize="small" /> Regular Activities
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
                  View Details
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

// ২. লোডিং স্কেলিটন ভিউ
const CardsSkeleton = () => {
  return (
    <Grid2 container spacing={4}>
      {Array.from(new Array(6)).map((_, index) => (
        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ borderRadius: "20px", height: "100%" }}>
            <Skeleton variant="rectangular" height={220} animation="wave" />
            <CardContent>
              <Skeleton
                variant="text"
                width="40%"
                height={20}
                sx={{ mb: 1 }}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="90%"
                height={30}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="70%"
                height={30}
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="100%"
                height={20}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="80%"
                height={20}
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton
                variant="rectangular"
                height={40}
                sx={{ borderRadius: "10px" }}
                animation="wave"
              />
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

// ৩. মেইন পেজ কম্পোনেন্ট
const ActivitiesPage = () => {
  return (
    <Box>
      {/* Banner Section - এটি সাথে সাথেই রেন্ডার হবে */}
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
          <Typography
            variant="h4"
            color="white"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
          >
            Our Activities
          </Typography>
        </Box>
      </Box>

      {/* Container এর ভেতর Suspense দিয়ে ব্লগগুলোকে র‍্যাপ করা হয়েছে */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Suspense fallback={<CardsSkeleton />}>
          <BlogList />
        </Suspense>

        <NewsLetter />
      </Container>
    </Box>
  );
};

export default ActivitiesPage;
