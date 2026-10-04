import { Check } from "lucide-react";

type InfoListCardProps = {
  title: string;
  items: string[];
};

const InfoListCard = ({ title, items }: InfoListCardProps) => {
  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl bg-gray-100 p-5">
      <h3 className="mb-3 text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={item + i}
            className="flex items-start gap-2 text-[13px] font-medium leading-5 text-gray-800"
          >
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#008e48]">
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoListCard;
