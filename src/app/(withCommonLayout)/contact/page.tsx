import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";
import { SendIcon } from "lucide-react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
const contact = () => {
  const contactData = [
    {
      icon: <PhoneIcon sx={{ color: "white" }} />,
      label: "ফোন",
      value: "+৮৮০১৩৩০৬৮০৪০৫",
    },
    {
      icon: <LocationOnIcon sx={{ color: "white" }} />,
      label: "ঠিকানা",
      value: "উখিয়া কক্সবাজার, চিটাগং বাংলাদেশ",
    },
    {
      icon: <EmailIcon sx={{ color: "white" }} />,
      label: "ইমেইল",
      value: "contact@alarafatfoundation.org",
    },
  ];
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
          <Box textAlign="center" px={2}>
            <Typography
              variant="h5"
              color="white"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              যোগাযোগ
            </Typography>
          </Box>
        </Box>
      </Box>

      <Container>
        <Box>
          <Grid2
            container
            spacing={4}
            alignContent="center"
            alignItems="center"
          >
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                }}
              >
                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", mb: 3, textAlign: "left" }}
                >
                  যোগাযোগ ফর্ম
                </Typography>

                <form>
                  {/* আপনার নাম */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    আপনার নাম <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="লিখুন"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: "#f9f9f9" }}
                  />

                  {/* মোবাইল / ইমেইল */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    মোবাইল / ইমেইল <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="লিখুন"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: "#f9f9f9" }}
                  />

                  {/* বিষয় */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    বিষয় <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="লিখুন"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: "#f9f9f9" }}
                  />

                  {/* বার্তা */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    বার্তা <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="লিখুন"
                    variant="outlined"
                    multiline
                    rows={6}
                    sx={{ mb: 3, bgcolor: "white" }}
                  />

                  {/* সাবমিট বাটন */}
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: "#00894a", // সবুজ রঙ (ইমেজের মত)
                      "&:hover": {
                        backgroundColor: "#006d3b",
                      },
                      textTransform: "none",
                      fontSize: "16px",
                      px: 4,
                      py: 1,
                      borderRadius: "8px",
                    }}
                  >
                    প্রেরণ করুন
                  </Button>
                </form>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom mb={2}>
                  আমাদের অবস্থান
                </Typography>

                <Paper
                  elevation={3}
                  sx={{
                    overflow: "hidden",
                    lineHeight: 0, // নিচের এক্সট্রা স্পেস দূর করার জন্য
                    borderRadius: 2,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301!2d90.3910801!3d23.7508643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8973d09a531%3A0xd641323386064f51!2sPanthapath%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714567890123"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Paper>
                <Box sx={{ maxWidth: 500, mt: 4 }}>
                  <List>
                    {contactData.map((item, index) => (
                      <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{ mb: 0.5 }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            sx={{ bgcolor: "#00894a", width: 40, height: 40 }}
                          >
                            {item.icon}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#00894a",
                                fontWeight: "bold",
                                fontSize: "12px",
                                lineHeight: 1.2,
                              }}
                            >
                              {item.label}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#333",
                                fontSize: "14px",
                                mt: 0.5,
                                fontWeight: 500,
                              }}
                            >
                              {item.value}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>

        {/*New Letter Section*/}
        <NewsLetter />
      </Container>
    </Box>
  );
};

export default contact;
