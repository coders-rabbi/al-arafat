import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type PageCoverProps = {
  image: StaticImageData | string;
  title: string;
};

const PageCover = ({ image, title }: PageCoverProps) => {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "relative",
          height: { xs: "250px", md: "400px" },
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
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
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageCover;
