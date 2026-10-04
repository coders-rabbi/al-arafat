import { notFound } from "next/navigation";
import { getActivityById } from "@/service/post";
import ActivitePageHeader from "../components/ActivitesPageHeader";
import ActivityDetails from "../components/ActivitiesDetails";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await getActivityById(id);
  const data = res?.data;

  if (!data) notFound();

  return (
    <div>
      <ActivitePageHeader data={data} />
      <ActivityDetails data={data} />
    </div>
  );
};

export default Page;
