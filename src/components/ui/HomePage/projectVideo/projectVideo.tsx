import { Box, Typography } from "@mui/material";

const PojectVideo = () => {
  return (
    <Box mx="auto" mb={4}>
      <Typography variant="h4" align="center" mt={5} mb={3} fontWeight="bold">
        Videos
      </Typography>{" "}
      <Typography variant="h6" align="center" mb={3} color="text.secondary">
        Our documentary video{" "}
      </Typography>
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/jW5lJ2LRiIo?si=mIY-q_SNSu6Jg2Z6"
        title="Video about our activities"
        sx={{
          mx: "auto",
          width: "80%",
          aspectRatio: "16/9", // এটি ভিডিওর সাইজকে সবসময় ১৬:৯ রেশিওতে রাখবে
          borderRadius: "12px", // আপনার ডিজাইনের মতো কোনাগুলো গোল করার জন্য
          border: "none",
          boxShadow: 3, // হালকা শ্যাডো দেওয়ার জন্য
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};

export default PojectVideo;
