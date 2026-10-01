export const inputClass = (hasError?: boolean) =>
  `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500/40 dark:bg-gray-900 ${
    hasError
      ? "border-rose-500"
      : "border-gray-300 dark:border-gray-700"
  }`;