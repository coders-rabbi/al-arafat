import { Box, Container, Typography, Stack } from "@mui/material";
import blogbanner from "@/assets/images/blog-banner.jpeg";
import Image from "next/image";
import FolderIcon from "@mui/icons-material/Folder";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";

const NoticeBoardPage = () => {
  return (
    <Box>
      <Box position="relative">
        <Box sx={{ height: { xs: "350px", md: "400px" }, overflow: "hidden" }}>
          <Image
            src={blogbanner}
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
              variant="h3"
              color="white"
              fontWeight="700"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
              Notice Board
            </Typography>
            <Typography variant="h6" color="white" sx={{ mt: 1 }}>
              View the latest announcements and notices from Al-Arafat
              Foundation
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* আইকন সেকশন */}
      <Container sx={{ py: 10 }}>
        <Stack alignItems="center" justifyContent="center">
          <FolderIcon
            sx={{
              fontSize: { xs: "80px", md: "150px" }, // বড় করার জন্য
              color: "primary.main", // আপনার থিম অনুযায়ী কালার
            }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2 }}
            textAlign="center"
          >
            There is no notice available at the moment.
            <br /> Please check back later for updates.
          </Typography>
        </Stack>
        <NewsLetter />
      </Container>
    </Box>
  );
};

export default NoticeBoardPage;
