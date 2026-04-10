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
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const EventCard = () => {
  return (
    <Container maxWidth="lg"  sx={{ mt: "200px" }} >
      <Box>
        <Typography variant="h3" textAlign="center" fontWeight="900" color="secondary.main" mb={10}>চলমান কার্যক্রমসমূহ</Typography>
      </Box>
      <Grid2 container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
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
                  লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের প্রায়
                  ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
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
                  লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের প্রায়
                  ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
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
                  লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের প্রায়
                  ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
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
                  লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের প্রায়
                  ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
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
                  লক্ষাধিক মানুষ ক্ষতিগ্রস্ত হয়। বিশেষ করে বর্ষাকালে দেশের প্রায়
                  ২৬,০০০ বর্গকিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়,
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
  );
};

export default EventCard;
