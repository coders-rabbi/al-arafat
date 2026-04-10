import {
  Box,
  Button,
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
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import NewsLetter from "@/components/UI/HomePage/NewsLetter/NewsLetter";
import { green } from "@mui/material/colors";

const ActivitiesPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box position="relative">
        <Box
          zIndex={-1}
          sx={{ width: "100%", height: "400px", overflow: "hidden" }}
        >
          <Image
            src={bannerImg}
            alt="Activities Banner"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Box>
        <Box
          bgcolor="rgba(0, 0, 0, 0.8)"
          width="100%"
          height="100%"
          sx={{ position: "absolute", top: 0 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography color="white" variant="h4" fontWeight="bold">
              আমাদের কার্যক্রম
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ mt: "100px" }}>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardActionArea>
                <Image src={emergencyRelif} alt="emeargencyRelif" />
                <CardContent>
                  <Typography
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    color="#D08545"
                    mb="10px"
                  >
                    <RocketLaunchIcon /> নিয়মিত কার্যক্রম
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                    component="div"
                  >
                    দুর্যোগে ত্রাণ ও পুনর্বাসন
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: "5px" }}
                  >
                    বাংলাদেশ প্রাকৃতিক দুর্যোগপ্রবণ একটি দেশ। প্রতিবছর বন্যা,
                    ঘূর্ণিঝড়, জলোচ্ছ্বাস, ভূমিধস ও অন্যান্য প্রাকৃতিক বিপর্যয়ে
                    লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের
                    প্রায় ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: "30px", fontWeight: "900" }}
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardActionArea>
                <Image src={emergencyRelif} alt="emeargencyRelif" />
                <CardContent>
                  <Typography
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    color="#D08545"
                    mb="10px"
                  >
                    <RocketLaunchIcon /> নিয়মিত কার্যক্রম
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                    component="div"
                  >
                    দুর্যোগে ত্রাণ ও পুনর্বাসন
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: "5px" }}
                  >
                    বাংলাদেশ প্রাকৃতিক দুর্যোগপ্রবণ একটি দেশ। প্রতিবছর বন্যা,
                    ঘূর্ণিঝড়, জলোচ্ছ্বাস, ভূমিধস ও অন্যান্য প্রাকৃতিক বিপর্যয়ে
                    লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের
                    প্রায় ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: "30px", fontWeight: "900" }}
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardActionArea>
                <Image src={emergencyRelif} alt="emeargencyRelif" />
                <CardContent>
                  <Typography
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    color="#D08545"
                    mb="10px"
                  >
                    <RocketLaunchIcon /> নিয়মিত কার্যক্রম
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                    component="div"
                  >
                    দুর্যোগে ত্রাণ ও পুনর্বাসন
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: "5px" }}
                  >
                    বাংলাদেশ প্রাকৃতিক দুর্যোগপ্রবণ একটি দেশ। প্রতিবছর বন্যা,
                    ঘূর্ণিঝড়, জলোচ্ছ্বাস, ভূমিধস ও অন্যান্য প্রাকৃতিক বিপর্যয়ে
                    লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের
                    প্রায় ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: "30px", fontWeight: "900" }}
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardActionArea>
                <Image src={emergencyRelif} alt="emeargencyRelif" />
                <CardContent>
                  <Typography
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    color="#D08545"
                    mb="10px"
                  >
                    <RocketLaunchIcon /> নিয়মিত কার্যক্রম
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                    component="div"
                  >
                    দুর্যোগে ত্রাণ ও পুনর্বাসন
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: "5px" }}
                  >
                    বাংলাদেশ প্রাকৃতিক দুর্যোগপ্রবণ একটি দেশ। প্রতিবছর বন্যা,
                    ঘূর্ণিঝড়, জলোচ্ছ্বাস, ভূমিধস ও অন্যান্য প্রাকৃতিক বিপর্যয়ে
                    লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের
                    প্রায় ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: "30px", fontWeight: "900" }}
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: "20px" }}>
              <CardActionArea>
                <Image src={emergencyRelif} alt="emeargencyRelif" />
                <CardContent>
                  <Typography
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    color="#D08545"
                    mb="10px"
                  >
                    <RocketLaunchIcon /> নিয়মিত কার্যক্রম
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                    component="div"
                  >
                    দুর্যোগে ত্রাণ ও পুনর্বাসন
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: "5px" }}
                  >
                    বাংলাদেশ প্রাকৃতিক দুর্যোগপ্রবণ একটি দেশ। প্রতিবছর বন্যা,
                    ঘূর্ণিঝড়, জলোচ্ছ্বাস, ভূমিধস ও অন্যান্য প্রাকৃতিক বিপর্যয়ে
                    লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের
                    প্রায় ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: "30px", fontWeight: "900" }}
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
      <NewsLetter />
    </Box>
  );
};

export default ActivitiesPage;
