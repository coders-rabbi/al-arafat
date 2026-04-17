import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import aboutImg from "@/assets/images/about-us.jpg";

const aboutUs = () => {
  return (
    <Box>
      {/* Banner Section  */}
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
            আমাদের সম্পর্কে
          </Typography>
        </Box>
      </Box>

      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <Image src={aboutImg} alt="about-image" style={{width:"100%"}}></Image>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus odio reiciendis pariatur vero adipisci doloremque deserunt. Mollitia rem voluptate placeat error minima fugit incidunt deserunt soluta? Itaque assumenda sequi natus commodi officiis ad ex at iste dolorum iure. Excepturi hic suscipit ex tempora unde consequuntur, vero quibusdam maiores cupiditate quidem repellat, ad inventore commodi dolore, omnis molestiae veniam ut quas magni deleniti. Voluptates temporibus, earum quo fuga, vel minima ea maxime velit modi facere sapiente quaerat reiciendis saepe nihil alias possimus ullam. Vel enim libero nam iusto odio expedita similique ea debitis quos! Aperiam accusamus officiis ullam animi numquam.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default aboutUs;
