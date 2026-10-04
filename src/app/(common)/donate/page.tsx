import type { Metadata } from "next";
import DonateForm from "./components/DonateForm";

export const metadata: Metadata = {
  title: "দান করুন",
  description:
    "বিকাশ, নগদ, রকেট বা উপায়ের মাধ্যমে আমাদের কার্যক্রমে দান করুন।",
};

const Page = () => {
  return (
    <div className="bg-[#f3f6f4]">
      <header className="bg-[#008e48] px-6 py-30 text-white lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-2xl text-3xl font-bold leading-snug sm:text-4xl">
            আপনার দান পৌঁছে যাবে প্রয়োজনের মানুষের কাছে
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
            মোবাইল ব্যাংকিংয়ে টাকা পাঠান, তারপর Transaction ID জানিয়ে দিন।
            আমরা যাচাই করে আপনাকে নিশ্চিত করব।
          </p>
        </div>
      </header>

      <DonateForm />
    </div>
  );
};

export default Page;
