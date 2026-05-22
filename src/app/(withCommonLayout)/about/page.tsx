import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import aboutImg from "@/assets/images/about-us.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";

const AboutUs = () => {
  const policies = [
    "The Holy Quran and the Sunnah (practices) of Prophet Muhammad (peace be upon him) serve as the core ideology of this foundation.",
    "Our principle is to adopt a balanced approach based on the Quran and Sunnah, in light of the methods followed by the righteous pioneers of Islam.",
    "To adhere strictly to the principles of unity, solidarity, and mutual brotherhood within the Ummah.",
    "To preserve social and religious values and awaken humanitarian consciousness by encouraging good deeds and forbidding wrongdoing.",
    "To adopt principles of generosity and tolerance in Islamic Dawah and activities, avoiding extremism or harshness, and making decisions with wisdom, discretion, and situational awareness.",
    "To show compassion toward all of Allah's creation and view serving humanity as a means to attain His pleasure.",
    "To conduct Dawah and welfare activities for all human beings, regardless of religion, caste, or creed.",
    "To consider public donations, funds, and resources as a trust (Amanah) from Allah and ensure their proper utilization.",
    "To ensure complete transparency in every aspect of collection and expenditure records.",
    "To ensure full accountability for all actions of the governing board and internal staff.",
    "To maintain regular internal and external auditing mechanisms for the organization.",
    "To uphold the highest standards of honesty and ethics among all levels of staff, tolerating no form of corruption or irregularity.",
    "To ensure professionalism in all sectors, maintaining the highest quality standards in education, Dawah, and welfare activities.",
    "To refrain from taking political stances or engaging in political activities, working neutrally and free from the influence of any political party or group.",
    "To recruit skilled and qualified personnel and enhance their performance through regular professional training.",
    "To prioritize the poor, helpless, orphans, widows, and disaster-affected populations in all relief and welfare operations.",
    "To consider poverty alleviation, the spread of education, healthcare access, and the creation of employment through vocational training as core humanitarian duties.",
    "Our fundamental policy shifts focus toward permanent poverty alleviation and sustainable development rather than temporary relief.",
  ];

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
            variant="h4"
            color="white"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      <Container sx={{ mt: "80px" }}>
        <Grid2 container spacing={4} alignContent="center" alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={aboutImg}
              alt="about-image"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography sx={{ lineHeight: 1.8 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              temporibus odio reiciendis pariatur vero adipisci doloremque
              deserunt. Mollitia rem voluptate placeat error minima fugit
              incidunt deserunt soluta? Itaque assumenda sequi natus commodi
              officiis ad ex at iste dolorum iure. Excepturi hic suscipit ex
              tempora unde consequuntur, vero quibusdam maiores cupiditate
              quidem repellat, ad inventore commodi dolore, omnis molestiae
              veniam ut quas magni deleniti. Voluptates temporibus, earum quo
              fuga, vel minima ea maxime velit modi facere sapiente quaerat
              reiciendis saepe nihil alias possimus ullam. Vel enim libero nam
              iusto odio expedita similique ea debitis quos! Aperiam accusamus
              officiis ullam animi numquam.
            </Typography>
          </Grid2>
        </Grid2>

        <Box mt={10}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Principles & Values
          </Typography>
          <Box
            sx={{
              mt: "20px",
              bgcolor: "#f0f4f2", // ইমেজের হালকা ব্যাকগ্রাউন্ড কালার
              p: { xs: 2, md: 5 },
              borderRadius: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <List>
              {policies.map((text, index) => (
                <ListItem
                  key={index}
                  sx={{
                    alignItems: "flex-start", // আইকন যেন লম্বা লাইনের উপরে থাকে
                    px: 0,
                    py: 1,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "35px", mt: "4px" }}>
                    <CheckCircleIcon
                      sx={{ color: "#14804a", fontSize: "20px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#333",
                          fontWeight: 500,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <NewsLetter />
      </Container>
    </Box>
  );
};

export default AboutUs;
