"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Rocket } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TPost } from "@/types/post";

export default function EventCarouselClient({ blogs }: { blogs: TPost[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent>
        {blogs.map((item) => (
          <CarouselItem
            key={item._id}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="h-full p-2">
              <Card className="flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] border-none shadow-md transition hover:shadow-xl">
                {/* Image */}
                <div className="relative h-[200px] w-full">
                  <Image
                    src={item.imageUrl[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <p className="mb-2.5 flex items-center gap-1.5 text-sm font-medium text-[#D08545]">
                    <Rocket size={18} /> Regular Activities
                  </p>

                  <h3 className="mb-2 line-clamp-2 h-[60px] text-xl font-bold">
                    {item.title}
                  </h3>

                  <div
                    className="line-clamp-3 text-sm text-gray-600 mb-2"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />

                  <button
                    type="button"
                    className="mt-auto w-full rounded-[10px] border border-secondary py-2  text-secondary transition bg-[#008e48] hover:bg-[#008e47e2] hover:text-white"
                  >
                    View More
                  </button>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
