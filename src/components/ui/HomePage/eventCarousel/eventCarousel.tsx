import { getAllActivitie } from "@/service/Activities";
import { TActivitie } from "@/types/Activities";
import EventCarouselClient from "./EventCarouselClient";
import Link from "next/link";

export async function EventCarousel() {
  const res = await getAllActivitie();
  const blogs: TActivitie[] = res?.data || [];

  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <h2 className="mb-10 mt-32 text-center text-3xl font-black md:text-5xl">
        Regular Activities
      </h2>

      <EventCarouselClient blogs={blogs} />
      <Link
        href="/activities"
        className="mt-6 block text-center text-lg font-bold bg-[#008e48] text-white py-1.5
         hover:bg-[#008e47e2] w-fit px-6 mx-auto rounded-sm transition-all duration-300"
      >
        View More
      </Link>
    </section>
  );
}
