import { getAllActivitie } from "@/service/Activities";
import ActivityCard from "./ActivityCard";

// ডাটা লোড করার কম্পোনেন্ট (Server Component)
const ActivityList = async () => {
  const res = await getAllActivitie();
  const blogs = res?.data || [];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {blogs.map((item) => (
        <ActivityCard
          key={item?._id}
          item={item}
          href={`/activities/${item?._id}`}
        />
      ))}
    </div>
  );
};

export default ActivityList;
