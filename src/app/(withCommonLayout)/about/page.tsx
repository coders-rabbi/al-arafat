import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import aboutImg from "@/assets/images/about-us.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";

const aboutUs = () => {
  const policies = [
    "পবিত্র কুরআন ও আল্লাহর রাসূল মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর সুন্নাহ তথা কর্মনীতিই আস-সুন্নাহ ফাউন্ডেশনের মূল আদর্শ।",
    "ইসলামের প্রাথমিক যুগের শ্রেষ্ঠ মুসলিমদের অনুসৃত পদ্ধতির আলোকে কুরআন ও সুন্নাহভিত্তিক মধ্যমপন্থা অবলম্বন করা আমাদের নীতি।",
    "উম্মাহর ঐক্য, সংহতি ও পারস্পরিক ভ্রাতৃত্বের নীতি মেনে চলা।",
    "সৎকাজে উৎসাহ দান ও অসৎকাজ থেকে বিরত রাখার মাধ্যমে সামাজিক ও ধর্মীয় মূল্যবোধ সংরক্ষণ এবং মানবিক চেতনার জাগরণ।",
    "ইসলামী দাওয়াহ এবং কার্যক্রমের ক্ষেত্রে উগ্রতা বা কঠোরতা পরিহার করে উদারতা ও সহনশীলতার নীতি অবলম্বন করা এবং দাওয়াহ ও অন্যান্য কার্যক্রম পরিচালনায় প্রজ্ঞা, বিচক্ষণতা এবং পরিস্থিতি বিবেচনা করে সিদ্ধান্ত গ্রহণ করা।",
    "আল্লাহর সৃষ্টির প্রতি সহানুভূতিশীল হওয়া এবং মানুষের কল্যাণে কাজ করাকে আল্লাহর সন্তুষ্টির মাধ্যম হিসেবে দেখা।",
    "ধর্ম, বর্ণ, গোত্র নির্বিশেষে সকল মানুষের জন্য দাওয়াহ ও সেবামূলক কার্যক্রম পরিচালনা করা।",
    "জনগণের প্রদত্ত দান অর্থ ও সম্পদকে আল্লাহ তাআলার পক্ষ থেকে আমানত হিসেবে গণ্য করা এবং এর যথাযথ ব্যবহার নিশ্চিত করা।",
    "সংগৃহীত তহবিল এবং ব্যয়ের প্রতিটি হিসাবের ক্ষেত্রে স্বচ্ছতা নিশ্চিত করা।",
    "পরিচালনা পর্ষদ এবং কর্মীদের সকল কাজের জবাবদিহিতা নিশ্চিত করা।",
    "প্রতিষ্ঠানের অভ্যন্তরীণ ও বাহ্যিক নিরীক্ষণের ব্যবস্থা রাখা।",
    "প্রতিষ্ঠানের সকল স্তরের কর্মীদের মধ্যে সর্বোচ্চ সততা ও নৈতিকতার মান বজায় রাখা। কোনো প্রকার দুর্নীতি বা অনিয়মকে প্রশ্রয় না দেওয়া।",
    "সকল ক্ষেত্রে পেশাদারিত্ব নিশ্চিত করা; শিক্ষা, দাওয়াহ ও সেবামূলক কার্যক্রমে গুণগত মান বজায় রাখা।",
    "রাজনৈতিক কর্ম ও অবস্থান গ্রহণ থেকে বিরত থাকা এবং যে কোনো রাজনৈতিক দল-উপদল বা গোষ্ঠীর প্রভাবমুক্ত থেকে নিরপেক্ষভাবে কাজ করা।",
    "দক্ষ ও যোগ্য কর্মী নিয়োগ করা এবং তাদের নিয়মিত প্রশিক্ষণের মাধ্যমে কর্মদক্ষতা বৃদ্ধি করা।",
    "সেবা কার্যক্রমের ক্ষেত্রে দরিদ্র, অসহায়, এতিম, বিধবা এবং দুর্যোগ কবলিত মানুষকে অগ্রাধিকার দেওয়া।",
    "দারিদ্র বিমোচন, শিক্ষা বিস্তার, স্বাস্থ্যসেবা ও কর্মমুখী প্রশিক্ষণের মাধ্যমে কর্মসংস্থানের সুযোগ সৃষ্টিকে মানবিক দায়িত্ব হিসেবে বিবেচনা করা।",
    "সাময়িক সহযোগিতার তুলনায় স্থায়ী দারিদ্র বিমোচন ও টেকসই উন্নয়ন আমাদের নীতি।",
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
            আমাদের সম্পর্কে
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
            ></Image>
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
            নীতি ও আদর্শ
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
                          lineHeight: 1.6, // আপনার আগের প্রশ্নের উত্তর অনুযায়ী লাইন হাইট
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

export default aboutUs;
