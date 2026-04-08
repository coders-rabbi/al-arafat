import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";

const ActivitiesPage = () => {
  return (
    <Box
      position="relative"
      zIndex={10}
      bgcolor="#0F2920"
      sx={{ height: "200px" }}
    >
      <Box>
        <Image
          src={bannerImg}
          alt="activities"
          style={{
            objectFit: "cover",
            height: "400px",
            width: "100%",
            zIndex: "-1",
          }}
        />
      </Box>
      <Container maxWidth="lg">
        <Grid2>
          <Grid2>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default ActivitiesPage;
