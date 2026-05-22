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
      label: "Phone",
      value: "+8801330680405",
    },
    {
      icon: <LocationOnIcon sx={{ color: "white" }} />,
      label: "Address",
      value: "Kutupalong Refugee Camp, Ukhia, Cox's Bazar – 4750, Bangladesh",
    },
    {
      icon: <EmailIcon sx={{ color: "white" }} />,
      label: "Email",
      value: "info@alarafatfounfation.org",
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
              Contact
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
                  Contact Form
                </Typography>

                <form>
                  {/* আপনার নাম */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    Your Name <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter Your Name"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: "#f9f9f9" }}
                  />

                  {/* মোবাইল / ইমেইল */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    Phone / Email <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter Your Phone or Email"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: "#f9f9f9" }}
                  />

                  {/* Subject */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    Subject <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter Your Subject"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: "#f9f9f9" }}
                  />

                  {/* Message */}
                  <Typography sx={{ mb: 1, fontWeight: "medium" }}>
                    Message <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter Your Message"
                    variant="outlined"
                    multiline
                    rows={6}
                    sx={{ mb: 3, bgcolor: "white" }}
                  />

                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: "#00894a",
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
                    Submit
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
                  Our Location
                </Typography>

                <Paper
                  elevation={3}
                  sx={{
                    overflow: "hidden",
                    lineHeight: 0, // নিচের এক্সট্রা স্পেস দূর করার জন্য
                    borderRadius: 2,
                  }}
                >
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1014.0285416332748!2d92.16410607272373!3d21.213080636977427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1779390654463!5m2!1sen!2sbd"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d232.4666977446623!2d92.16488355386196!3d21.21331584479095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d23.8004842!2d90.38027579999999!4m3!3m2!1d21.2133181!2d92.16499209999999!5e0!3m2!1sen!2sbd!4v1779390915403!5m2!1sen!2sbd"
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
