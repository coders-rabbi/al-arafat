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
          উম্মাহর স্বার্থে, সুন্নাহর সাথে
        </Typography>
      </Box>

      {/* Grid container এ size প্রপ ব্যবহার করা হয়েছে রেসপনসিভ করার জন্য */}
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
            <Image src={eduIcon} alt="Education" width={100} height={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="secondary.main">
              শিক্ষা
            </Typography>
            <Typography variant="body1" mt={2} color="text.secondary">
              দ্বীনি ও সাধারণ শিক্ষার সমন্বিত সিলেবাসের মাদরাসা প্রতিষ্ঠা;
              স্কুল, কলেজ ও বিশ্ববিদ্যালয়সহ বিভিন্ন সাধারণ ও কারিগরি বিদ্যালয়
              প্রতিষ্ঠা; এছাড়া অপ্রাতিষ্ঠানিক শিক্ষার উদ্যোগ গ্রহণ।
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
            <Image src={handShakeIcon} alt="Service" width={100} height={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="secondary.main">
              সেবা
            </Typography>
            <Typography variant="body1" mt={2} color="text.secondary">
              দরিদ্রদের স্বাবলম্বীকরণ, বন্যার্তদের ত্রাণ ও পুনর্বাসন, নলকূপ ও
              পানি শোধনাগার স্থাপন, বৃক্ষরোপণ, শীতবস্ত্র বিতরণ, ইফতার বিতরণ,
              সবার জন্য কুরবানীসহ বিভিন্ন সেবামূলক কার্যক্রম।
            </Typography>
          </Box>
        </Grid2>

        {/* দাওয়াহ কলাম */}
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
            <Image src={alQuranIcon} alt="Dawah" width={100} height={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="secondary.main">
              দাওয়া
            </Typography>
            <Typography variant="body1" mt={2} color="text.secondary">
              বই-পুস্তক রচনা ও প্রকাশনা, মসজিদ ও অডিটোরিয়ামভিত্তিক দ্বীনি
              হালাকাহ, দাওয়াহ বিষয়ক প্রশিক্ষণ ও কর্মশালাসহ
              অনলাইন-অফলাইনভিত্তিক বহুমাত্রিক কার্যক্রম।
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
          আরোও জানুন
        </Button>
      </Box>
    </Container>
  );
};

export default UmmahVision;
