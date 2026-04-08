"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link"; // Next.js Link ব্যবহার করা হয়েছে
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // টাইপস্ক্রিপ্ট এরর দূর করতে ফাংশনের প্যারামিটার আপডেট
  const handleDrawerToggle = (_?: object, reason?: string) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      setMobileOpen(false);
      return;
    }
    setMobileOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "হোম", path: "/" },
    { label: "আমাদের সম্পর্কে", path: "/about" },
    { label: "কার্যক্রম", path: "/events" },
    { label: "গ্যালারি", path: "/gallery" },
    { label: "আমাদের সাথে যুক্ত হোন", path: "/join" },
    { label: "ব্লগ", path: "/blog" },
    { label: "নোটিশ", path: "/notice" },
    { label: "যোগাযোগ", path: "/contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }} role="presentation">
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold", textAlign: "center", color: "secondary.main" }}>
        AL ARAFAT
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              component={Link} 
              href={item.path} 
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary={item.label} sx={{ color: "secondary.main" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button 
        component={Link} 
        href="/donate" 
        variant="contained" 
        fullWidth 
        sx={{ mt: 2 }}
        onClick={() => setMobileOpen(false)}
      >
        দান করুন
      </Button>
    </Box>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        zIndex: 1200,
        top: 0,
        left: 0,
        right: 0,
        pointerEvents: "none", // কন্টেইনার যেন নিচের এলিমেন্টের ক্লিক না আটকায়
      }}
    >
      <Stack
        py={2}
        px={3}
        my={2}
        bgcolor="white"
        borderRadius={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="0px 4px 12px rgba(0,0,0,0.1)"
        sx={{ pointerEvents: "auto" }} // শুধুমাত্র নেভবার স্ট্যাক ক্লিক গ্রহণ করবে
      >
        <Typography
          variant="h5"
          component={Link}
          href="/"
          sx={{ fontWeight: 600, textDecoration: "none", color: "secondary.main" }}
        >
          <Box component="span" sx={{ color: "primary.main" }}>AL</Box> ARAFAT
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              href={item.path}
              variant="body2"
              sx={{
                color: "secondary.main",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            component={Link}
            href="/donate"
            variant="contained"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            দান করুন
          </Button>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMobileOpen(true)} // এখানে সরাসরি true সেট করা নিরাপদ
            sx={{ display: { lg: "none" }, color: "secondary.main" }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
          zIndex: 1300, // ড্রয়ার যেন সবার উপরে থাকে
        }}
      >
        {drawer}
      </Drawer>
    </Container>
  );
};

export default Navbar;