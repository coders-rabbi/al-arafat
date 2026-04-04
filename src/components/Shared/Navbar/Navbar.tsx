import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

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
        <Typography
          variant="h5"
          component={Link}
          href="/"
          fontWeight={600}
          color="white"
        >
          <Box component="span" color="primary.main">
            Al
          </Box>{" "}
          Arafa
        </Typography>

        <Stack direction="row" spacing={2}>
          <Typography component={Link} href="/" variant="body1" color="white">
            হোম
          </Typography>
          <Typography
            component={Link}
            href="/about"
            variant="body1"
            color="white"
          >
            আমাদের সম্পর্কে
          </Typography>
          <Typography
            component={Link}
            href="/events"
            variant="body1"
            color="white"
          >
            কার্যক্রম
          </Typography>
          <Typography
            component={Link}
            href="/gallery"
            variant="body1"
            color="white"
          >
            গ্যালারি
          </Typography>
          <Typography
            component={Link}
            href="/join"
            variant="body1"
            color="white"
          >
            আমাদের সাথে যুক্ত হোন
          </Typography>
          <Typography
            component={Link}
            href="/blog"
            variant="body1"
            color="white"
          >
            ব্লগ
          </Typography>
          <Typography
            component={Link}
            href="/notice"
            variant="body1"
            color="white"
          >
            নোটিশ
          </Typography>
          <Typography
            component={Link}
            href="/contact"
            variant="body1"
            color="white"
          >
            যোগাযোগ
          </Typography>
        </Stack>
        <Button component={Link} href="/donate">
          দান করুন
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
