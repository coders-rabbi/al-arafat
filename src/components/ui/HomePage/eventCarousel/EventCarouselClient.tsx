"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
import { TActivitie } from "@/types/Activities";

export default function EventCarouselClient({
  blogs,
}: {
  blogs: TActivitie[];
}) {
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
        {blogs.map((item) => {
          const card = (
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
                  className="mb-2 line-clamp-3 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />

                {/* Link-এর ভেতরে button দেওয়া invalid HTML, তাই span ব্যবহার করা হয়েছে */}
                <span className="mt-auto block w-full rounded-[10px] border border-secondary bg-[#008e48] py-2 text-center text-secondary transition hover:bg-[#008e47e2] hover:text-white">
                  View More
                </span>
              </div>
            </Card>
          );

          return (
            <CarouselItem
              key={item._id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full p-2">
                <Link
                  href={`/activities/${item?._id}`}
                  className="block h-full"
                >
                  {card}
                </Link>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
