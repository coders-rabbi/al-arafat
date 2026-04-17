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
import bannerImg from "@/assets/images/activities-banner.jpeg";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import useBlog from "@/hooks/useBlog";
import NewsLetter from "@/components/ui/HomePage/NewsLetter/NewsLetter";

export interface BlogItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image_url: string;
}

const ActivitiesPage = () => {
  // const res = await fetch("http://localhost:5000/blogs");
  // const blogsData: BlogItem[] = await res.json();

  const { blogs, loading, error } = useBlog();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
      {/* Banner Section */}
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
            variant="h3"
            color="white"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
          >
            ব্লগ
          </Typography>
        </Box>
      </Box>

      {/* Blog Cards Section */}
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
    </Box>
  );
};

export default ActivitiesPage;
