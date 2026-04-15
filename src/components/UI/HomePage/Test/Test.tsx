"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button, CardActionArea, Container, Typography } from "@mui/material";
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Image from "next/image";

export function CarouselSize() {
  // ২. প্লাগইন কনফিগার করুন (এখানে ২ সেকেন্ড পর পর স্লাইড হবে)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Container maxWidth="lg">
      <Carousel
        // ৩. প্লাগইনটি এখানে যুক্ত করুন
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card>
                  <CardActionArea>
                    <Image
                      src={emergencyRelif}
                      alt="emeargencyRelif"
                      className="w-full h-auto"
                    />
                    <CardContent>
                      <Typography
                        display="flex"
                        alignItems="center"
                        gap="5px"
                        color="#D08545"
                        mb="10px"
                      >
                        <RocketLaunchIcon /> নিয়মিত কার্যক্রম
                      </Typography>
                      <Typography gutterBottom variant="h6" fontWeight="bold">
                        দুর্যোগে ত্রাণ ও পুনর্বাসন
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: "5px" }}
                      >
                        বাংলাদেশ প্রাকৃতিক দুর্যোগপ্রবণ একটি দেশ...
                      </Typography>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ mt: "20px", fontWeight: "900" }}
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
