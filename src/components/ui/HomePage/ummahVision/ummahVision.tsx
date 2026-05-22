import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import eduIcon from "@/assets/icon/edu.jpg";
import handShakeIcon from "@/assets/icon/handshake.jpg";
import alQuranIcon from "@/assets/icon/quran.png";

const UmmahVision = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 12 } }}>
      <Box>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          color="secondary.main"
          sx={{ fontSize: { xs: "1.8rem", md: "3rem" } }} // মোবাইলে ফন্ট সাইজ ছোট হবে
        >
          For the Rohingya, with Humanity.
        </Typography>
      </Box>

      {/* Grid container এ size প্রপ ব্যবহার করা হয়েছে রেসপনসিভ করার জন্য */}
      <Grid2 container spacing={4} mt={{ xs: 5, md: 10 }}>
        {/* শিক্ষা কলাম */}
        <Grid2
          size={{ xs: 12, md: 4 }} // মোবাইলে ১২ (ফুল উইডথ), ডেস্কটপে ৪ (তিন ভাগের এক ভাগ)
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            px: { xs: 2, md: 5 },
            borderRight: { md: "1px solid #ccc" }, // শুধুমাত্র ডেস্কটপে ডানদিকের বর্ডার থাকবে
            borderBottom: { xs: "1px solid #ccc", md: "none" }, // মোবাইলে নিচের বর্ডার থাকবে
            pb: { xs: 4, md: 0 },
          }}
        >
          <Box>
            <Image src={alQuranIcon} alt="Dawah" width={100} height={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="secondary.main">
              Dawah
            </Typography>
            <Typography variant="body1" mt={2} color="text.secondary">
              Writing and publishing books, mosque and auditorium-based Islamic
              Halaqah, Dawah training and workshops, along with
              multi-dimensional online and offline initiatives.
            </Typography>
          </Box>
        </Grid2>

        {/* সেবা কলাম */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            px: { xs: 2, md: 5 },
            borderRight: { md: "1px solid #ccc" },
            borderBottom: { xs: "1px solid #ccc", md: "none" },
            pb: { xs: 4, md: 0 },
          }}
        >
          <Box>
            <Image src={eduIcon} alt="Education" width={100} height={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="secondary.main">
              Education
            </Typography>
            <Typography variant="body1" mt={2} color="text.secondary">
              Establishing Madrasas with an integrated syllabus of Islamic and
              general education; founding general and technical schools,
              colleges, and universities; along with initiating informal
              education programs.
            </Typography>
          </Box>
        </Grid2>

        {/* দাওয়াহ কলাম */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            px: { xs: 2, md: 5 },
          }}
        >
          <Box>
            <Image src={handShakeIcon} alt="Service" width={100} height={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="secondary.main">
              Service
            </Typography>
            <Typography variant="body1" mt={2} color="text.secondary">
              Empowering the underprivileged, flood relief and rehabilitation,
              installing tube wells and water treatment plants, tree plantation,
              winter clothing distribution, Iftar distribution, Qurbani for all,
              and various welfare activities.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>

      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 4, py: 1.5, borderRadius: "8px" }}
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default UmmahVision;
