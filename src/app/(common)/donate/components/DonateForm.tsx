"use client";

import { createDonation } from "@/service/donation";
import { useState } from "react";

import { TDonationMethod, TDonationPayload } from "@/types/donation";
import { toast } from "sonner";

type Method = {
  id: TDonationMethod; // string er bodole
  name: string;
  logo: string;
  number: string;
  color: string;
  text: string;
};

// TODO: আসল নম্বর বসাও
const METHODS: Method[] = [
  {
    id: "bkash",
    logo: "/payment/bkash.png",
    name: "বিকাশ",
    number: "01330680405",
    color: "#E2136E",
    text: "#fff",
  },
  {
    id: "nagad",
    logo: "/payment/nagad.png",
    name: "নগদ",
    number: "01330680405",
    color: "#F6921E",
    text: "#fff",
  },
  {
    id: "rocket",
    logo: "/payment/rocket.png",
    name: "রকেট",
    number: "01330680405",
    color: "#8C3494",
    text: "#fff",
  },
  {
    id: "upay",
    logo: "/payment/upay.png",
    name: "উপায়",
    number: "01330680405",
    color: "#FFC72C",
    text: "#1a1a1a",
  },
];

const AMOUNTS = [500, 1000, 2000, 5000];

// TODO: নিজেদের কাজ অনুযায়ী লেখা বদলাও
const IMPACTS = [
  { amount: 500, text: "একটি পরিবারের জন্য এক সপ্তাহের খাবার" },
  { amount: 1000, text: "একজন শিক্ষার্থীর এক মাসের পড়ার খরচ" },
  { amount: 5000, text: "একটি পরিবারের জন্য শীতের কাপড় ও কম্বল" },
];

// লোগো না পেলে মাধ্যমের নাম দেখাবে
const MethodLogo = ({ m, className }: { m: Method; className: string }) => {
  const [failed, setFailed] = useState(false);
  if (failed)
    return <span className="text-base font-bold text-gray-800">{m.name}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={m.logo}
      alt={m.name}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

const toBn = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

const initialForm = { name: "", phone: "", trxId: "", note: "" };

const DonateForm = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState<Method>(METHODS[0]);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(initialForm);
  const finalAmount = custom ? Number(custom) : amount;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(method.number);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ক্লিপবোর্ড সাপোর্ট না থাকলে কিছু করার নেই */
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: TDonationPayload = {
      ...form,
      amount: finalAmount,
      method: method.id,
    };

    try {
      const res = await createDonation(payload);
      if (res.success) {
        toast.success("Your donation has been recorded!");

        // form clear
        setForm(initialForm);
        setCustom("");
        setAmount(1000);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Try again",
      );
    }
  };

  const input =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#008e48] focus:ring-2 focus:ring-[#008e48]/20";

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-5 lg:px-10">
      <form onSubmit={onSubmit} className="space-y-10 lg:col-span-3">
        {/* ধাপ ১: পরিমাণ */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            ১. কত টাকা দান করবেন?
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {AMOUNTS.map((a) => {
              const active = !custom && amount === a;
              return (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={`rounded-lg border px-4 py-3 text-base font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008e48] ${
                    active
                      ? "border-[#008e48] bg-[#008e48] text-white"
                      : "border-gray-300 bg-white text-gray-800 hover:border-[#008e48]"
                  }`}
                >
                  ৳ {toBn(a)}
                </button>
              );
            })}
          </div>
          <input
            type="number"
            min={10}
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="অন্য পরিমাণ লিখুন"
            className={`${input} mt-3`}
          />
        </section>

        {/* ধাপ ২: মাধ্যম */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            ২. কোন মাধ্যমে পাঠাবেন?
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {METHODS.map((m) => {
              const active = method.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m)}
                  aria-pressed={active}
                  className={`overflow-hidden rounded-lg border-2 bg-white text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008e48] ${
                    active
                      ? "shadow-md"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  style={active ? { borderColor: m.color } : undefined}
                >
                  <span className="flex h-16 items-center justify-center bg-white px-4">
                    <MethodLogo
                      m={m}
                      className="max-h-9 w-auto object-contain"
                    />
                  </span>
                  <span
                    className="block px-4 py-1.5 text-center text-sm font-bold"
                    style={{ background: m.color, color: m.text }}
                  >
                    {m.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* পাঠানোর নির্দেশনা */}
          <div
            className="mt-5 rounded-xl border-l-4 bg-white p-5 shadow-sm"
            style={{ borderColor: method.color }}
          >
            <MethodLogo m={method} className="mb-3 h-8 w-auto object-contain" />
            <p className="text-sm text-gray-600">
              {method.name} অ্যাপ থেকে <b>Send Money</b> করুন এই নম্বরে:
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-bold tracking-wide text-gray-900">
                {method.number}
              </span>
              <button
                type="button"
                onClick={copyNumber}
                className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
              >
                {copied ? "কপি হয়েছে" : "নম্বর কপি করুন"}
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              পরিমাণ: <b>৳ {toBn(finalAmount || 0)}</b>। টাকা পাঠানোর পর যে
              Transaction ID পাবেন, নিচে লিখে দিন।
            </p>
          </div>
        </section>

        {/* ধাপ ৩: তথ্য */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            ৩. আপনার তথ্য দিন
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              className={input}
              placeholder="আপনার নাম"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="tel"
              className={input}
              placeholder={`${method.name} নম্বর (যে নম্বর থেকে পাঠিয়েছেন)`}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              required
              className={`${input} sm:col-span-2`}
              placeholder="Transaction ID"
              value={form.trxId}
              onChange={(e) => setForm({ ...form, trxId: e.target.value })}
            />
            <textarea
              rows={3}
              className={`${input} sm:col-span-2`}
              placeholder="বার্তা (ঐচ্ছিক)"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#008e48] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#006f38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008e48] sm:w-auto"
          >
            দান নিশ্চিত করুন
          </button>
        </section>
      </form>

      {/* ডান পাশ: সারাংশ */}
      <aside className="space-y-5 self-start lg:sticky lg:top-6 lg:col-span-2">
        <div className="rounded-xl bg-[#0b3d2a] p-6 text-white">
          <p className="text-sm text-white/70">আপনার দান</p>
          <p className="mt-1 text-4xl font-bold">৳ {toBn(finalAmount || 0)}</p>
          <p className="mt-3 text-sm text-white/80">মাধ্যম: {method.name}</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-3 text-base font-bold text-gray-900">
            আপনার দানে যা হয়
          </h3>
          <ul className="space-y-3">
            {IMPACTS.map((i) => (
              <li key={i.amount} className="flex gap-3 text-sm text-gray-600">
                <span className="w-16 shrink-0 font-bold text-[#008e48]">
                  ৳ {toBn(i.amount)}
                </span>
                <span>{i.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DonateForm;
