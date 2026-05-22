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
          display: "flex",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid #f0f0f0",
          m: 2,

          height: { md: 350 },
        }}
      >
        <Grid2 container sx={{ width: "100%" }}>
          {/* বাম দিকের ইমেজ সেকশন */}
          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{ position: "relative", height: { xs: 250, md: "100%" } }}
          >
            <Image src={post} alt="post" fill style={{ objectFit: "cover" }} />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "white",
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
                Eid Prayers and Festive Celebrations Held in Open Field
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
                For the fourth time, the Eid-ul-Fitr congregation and
                festivities were held in the open field of Madrasatus Sunnah,
                adjacent to the As-Sunnah Mosque Complex at Swadesh Properties
                in Satarkul, Badda, Capital...
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  color: "#9aa0a6",
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                March 22, 2026
              </Typography>
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
    </Container>
  );
};

export default BlogCard;
