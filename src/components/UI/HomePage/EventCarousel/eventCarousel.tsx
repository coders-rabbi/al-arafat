"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Button,
  CardActionArea,
  CardContent,
  Container,
  Typography,
  Box,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Image from "next/image";
import useBlog, { BlogItem } from "@/hooks/useBlog";

export function EventCarousel() {
  // ১. হুক থেকে ডাটা আনা
  const { blogs, loading, error } = useBlog();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  if (loading) return <p className="text-center py-10">Loading Carousel...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box mt={15}>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="900"
          color="secondary.main"
          mb={8}
        >
          চলমান কার্যক্রমসমূহ
        </Typography>
      </Box>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {/* ২. blogs ডাটা ম্যাপ করা */}
          {blogs.map((item: BlogItem) => (
            <CarouselItem
              key={item.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2 h-full">
                <Card className="h-full border-none shadow-md overflow-hidden rounded-[20px]">
                  <CardActionArea
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                    }}
                  >
                    {/* ৩. ডাইনামিক ইমেজ */}
                    <Box
                      sx={{
                        position: "relative",
                        height: "200px",
                        width: "100%",
                      }}
                    >
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        display="flex"
                        alignItems="center"
                        gap="5px"
                        color="#D08545"
                        mb="10px"
                        variant="subtitle2"
                      >
                        <RocketLaunchIcon fontSize="small" /> নিয়মিত কার্যক্রম
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          height: "60px", // টাইটেল এলাইনমেন্ট ঠিক রাখতে
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: "15px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.description}
                      </Typography>

                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          mt: "auto",
                          fontWeight: "900",
                          borderRadius: "10px",
                        }}
                      >
                        বিস্তারিত দেখুন
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* ৪. অ্যারো বাটনগুলো ছোট স্ক্রিনে হাইড রাখা ভালো বা পজিশন ঠিক করা */}
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Container>
  );
}
