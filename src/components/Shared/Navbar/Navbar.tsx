import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container
      sx={{ position: "absolute", zIndex: 1, top: 0, left: 0, right: 0 }}
    >
      <Stack
        py={3}
        px={2}
        my={2}
        bgcolor="white"
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
          color="secondary.main"
        >
          <Box component="span" color="primary.main">
            AL
          </Box>{" "}
          ARAFAT
        </Typography>

        <Stack direction="row" spacing={2}>
          <Typography
            component={Link}
            href="/"
            variant="body1"
            color="secondary.main"
          >
            হোম
          </Typography>
          <Typography
            component={Link}
            href="/about"
            variant="body1"
            color="secondary.main"
          >
            আমাদের সম্পর্কে
          </Typography>
          <Typography
            component={Link}
            href="/events"
            variant="body1"
            color="secondary.main"
          >
            কার্যক্রম
          </Typography>
          <Typography
            component={Link}
            href="/gallery"
            variant="body1"
            color="secondary.main"
          >
            গ্যালারি
          </Typography>
          <Typography
            component={Link}
            href="/join"
            variant="body1"
            color="secondary.main"
          >
            আমাদের সাথে যুক্ত হোন
          </Typography>
          <Typography
            component={Link}
            href="/blog"
            variant="body1"
            color="secondary.main"
          >
            ব্লগ
          </Typography>
          <Typography
            component={Link}
            href="/notice"
            variant="body1"
            color="secondary.main"
          >
            নোটিশ
          </Typography>
          <Typography
            component={Link}
            href="/contact"
            variant="body1"
            color="secondary.main"
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
