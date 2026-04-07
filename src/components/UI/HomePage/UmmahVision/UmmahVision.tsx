import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import eduIcon from "@/assets/icon/edu.jpg";
import handShakeIcon from "@/assets/icon/handshake.jpg";
import alQuranIcon from "@/assets/icon/quran.png";

const UmmahVision = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 12 }}>
      <Box>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          color="secondary.main"
        >
          উম্মাহর স্বার্থে, সুন্নাহর সাথে
        </Typography>
      </Box>
      <Stack direction="row" spacing={4} mt={10}>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          padding="0 70px"
          borderRight="1px solid #ccc"
        >
          <Box>
            <Image src={eduIcon} alt="EduIcon" width={100} height={100} />
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              color="secondary.main"
            >
              শিক্ষা
            </Typography>
            <Typography variant="body1" mt={2}>
              দ্বীনি ও সাধারণ শিক্ষার সমন্বিত সিলেবাসের মাদরাসা প্রতিষ্ঠা;
              স্কুল, কলেজ ও বিশ্ববিদ্যালয়সহ বিভিন্ন সাধারণ ও কারিগরি বিদ্যালয়
              প্রতিষ্ঠা; এছাড়া অপ্রাতিষ্ঠানিক শিক্ষার উদ্যোগ গ্রহণ
            </Typography>
          </Box>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          padding="0 70px"
          borderRight="1px solid #ccc"
        >
          <Box>
            <Image src={handShakeIcon} alt="EduIcon" width={100} height={100} />
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              color="secondary.main"
            >
              সেবা
            </Typography>
            <Typography variant="body1" mt={2}>
              সেবা দরিদ্রদের স্বাবলম্বীকরণ, বন্যার্তদের ত্রাণ ও পুনর্বাসন, নলকূপ
              ও পানি শোধনাগার স্থাপন, বৃক্ষরোপণ, শীতবস্ত্র বিতরণ, ইফতার বিতরণ,
              সবার জন্য কুরবানীসহ বিভিন্ন সেবামূলক কার্যক্রম
            </Typography>
          </Box>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          padding="0 70px"
        >
          <Box>
            <Image src={alQuranIcon} alt="EduIcon" width={100} height={100} />
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              color="secondary.main"
            >
              দাওয়াহ
            </Typography>
            <Typography variant="body1" mt={2}>
              বই-পুস্তক রচনা ও প্রকাশনা, মসজিদ ও অডিটোরিয়ামভিত্তিক দ্বীনি
              হালাকাহ, দাওয়াহ বিষয়ক প্রশিক্ষণ ও কর্মশালাসহ অনলাইন-অফলাইনভিত্তিক
              বহুমাত্রিক কার্যক্রম
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default UmmahVision;
