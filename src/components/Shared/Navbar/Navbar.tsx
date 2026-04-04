import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={3}
        px={2}
        my={2}
        bgcolor="secondary.main"
        borderRadius={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight={600}>
          <Box component="span" color="primary.main">
            Al
          </Box>{" "}
          Arafa
        </Typography>

        <Stack direction="row" spacing={2}>
          <Typography variant="body1" color="white">
            হোম
          </Typography>
          <Typography variant="body1" color="white">
            আমাদের সম্পর্কে
          </Typography>
          <Typography variant="body1" color="white">
            কার্যক্রম
          </Typography>
          <Typography variant="body1" color="white">
            গ্যালারি
          </Typography>
          <Typography variant="body1" color="white">
            আমাদের সাথে যুক্ত হোন
          </Typography>
          <Typography variant="body1" color="white">
            ব্লগ
          </Typography>
          <Typography variant="body1" color="white">
            নোটিশ
          </Typography>
          <Typography variant="body1" color="white">
            যোগাযোগ
          </Typography>
        </Stack>
        <Button>দান করুন</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
