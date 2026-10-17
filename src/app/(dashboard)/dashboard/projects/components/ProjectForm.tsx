"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TProjectPayload, TProjectStatus } from "@/types/project";
import { createProject } from "@/service/project/inde";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 dark:border-gray-800 dark:bg-gray-900";
const labelClass = "mb-1 block text-xs font-semibold text-gray-500";

const initialState = {
  title: "",
  duration: "",
  location: "",
  beneficiary: "",
  expense: "",
  status: "Ongoing" as TProjectStatus,
};

const ProjectForm = () => {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim() || !form.location.trim() || !form.duration.trim()) {
      setError("Title, duration and location are required.");
      return;
    }

    const payload: TProjectPayload = {
      title: form.title.trim(),
      duration: form.duration.trim(),
      location: form.location.trim(),
      beneficiary: Number(form.beneficiary) || 0,
      expense: Number(form.expense) || 0,
      status: form.status,
    };

    try {
      setLoading(true);
      await createProject(payload);
      router.push("/dashboard/projects");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass} htmlFor="title">
          Project title
        </label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. Clean Water Initiative"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="duration">
            Duration
          </label>
          <input
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="e.g. 3 months"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="location">
            Location
          </label>
          <input
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Dhaka"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="beneficiary">
            Beneficiaries
          </label>
          <input
            id="beneficiary"
            name="beneficiary"
            type="number"
            min={0}
            value={form.beneficiary}
            onChange={handleChange}
            placeholder="e.g. 500"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="expense">
            Expense (৳)
          </label>
          <input
            id="expense"
            name="expense"
            type="number"
            min={0}
            value={form.expense}
            onChange={handleChange}
            placeholder="e.g. 150000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="status">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950 dark:text-red-400">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-lg border border-gray-200 px-5 py-2 text-sm font-semibold dark:border-gray-800"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
