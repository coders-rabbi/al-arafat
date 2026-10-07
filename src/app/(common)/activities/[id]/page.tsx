import { notFound } from "next/navigation";
import { getActivityById } from "@/service/Activities";
import ActivitePageHeader from "../components/ActivitesPageHeader";
import ActivityDetails from "../components/ActivitiesDetails";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  let data = null;
  try {
    const res = await getActivityById(id);
    data = res?.data;
  } catch (error) {
    console.error("getActivityById failed:", id, error);
  }

  if (!data) notFound();

  return (
    <div>
      <ActivitePageHeader data={data} />
      <ActivityDetails data={data} />
    </div>
  );
};

export default Page;
