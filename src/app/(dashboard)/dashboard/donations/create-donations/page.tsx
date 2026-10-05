import DonateForm from "@/app/(common)/donate/components/DonateForm";
import PageHeader from "@/app/(dashboard)/components/PageHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Add New Donations"
        description="Manage your donations."
        actionLabel="← Back to Donations"
        actionHref="/dashboard/donations"
      />

      <DonateForm />
    </div>
  );
};

export default page;
