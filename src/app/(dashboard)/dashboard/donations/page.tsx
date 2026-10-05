import React from "react";
import PageHeader from "../../components/PageHeader";
import DonationTable from "./components/DonationsTable";
import { getAllDonations } from "@/service/donation";

const page = async () => {
  const res = await getAllDonations();
  const data = res?.data ?? [];

  return (
    <div>
      <PageHeader
        title="Donations"
        description="Manage all your donations."
        actionLabel="+ Add Donations"
        actionHref="/dashboard/donations/create-donations"
      />
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 mt-10">
        <h2 className="font-semibold">Previous donations</h2>
        <p className="mb-4 text-xs text-gray-500">
          Showing {data?.length} recent donations
        </p>
        <DonationTable donations={data} />
      </section>
    </div>
  );
};

export default page;
