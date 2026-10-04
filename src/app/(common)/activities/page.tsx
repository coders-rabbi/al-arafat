import { Suspense } from "react";
import bannerImg from "@/assets/images/activities-banner.jpeg";
import PageBanner from "./components/PageBanner";
import ActivityList from "./components/ActivityList";
import CardsSkeleton from "./components/CardsSkeleton";

// বিল্ডের সময় API কল না করে প্রতিটি রিকোয়েস্টে পেজ তৈরি হবে
// (Render API ঘুমিয়ে থাকলে বিল্ড ফেল হওয়া ঠেকায়)
export const dynamic = "force-dynamic";

const ActivitiesPage = () => {
  return (
    <div>
      <PageBanner title="Our Activities" image={bannerImg} alt="blogbanner" />

      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 md:py-16">
        <Suspense fallback={<CardsSkeleton />}>
          <ActivityList />
        </Suspense>
      </div>
    </div>
  );
};

export default ActivitiesPage;
