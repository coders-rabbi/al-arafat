import { notFound } from "next/navigation";
import { getActivityById } from "@/service/Activities";
import ActivitePageHeader from "../components/ActivitesPageHeader";
import ActivityDetails from "../components/ActivitiesDetails";

type PageProps = {
  params: Promise<{ ActiviteId: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { ActiviteId } = await params;

  let data = null;
  try {
    const res = await getActivityById(ActiviteId);
    data = res?.data;
  } catch (error) {
    console.error("getActivityById failed:", ActiviteId, error);
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
