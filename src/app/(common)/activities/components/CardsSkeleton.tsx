type CardsSkeletonProps = {
  count?: number;
};

const CardsSkeleton = ({ count = 6 }: CardsSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-full animate-pulse overflow-hidden rounded-[20px] bg-white shadow-md"
        >
          <div className="h-[220px] w-full bg-gray-200" />
          <div className="p-4">
            <div className="mb-2 h-5 w-2/5 rounded bg-gray-200" />
            <div className="mb-1 h-[30px] w-[90%] rounded bg-gray-200" />
            <div className="mb-4 h-[30px] w-[70%] rounded bg-gray-200" />
            <div className="mb-1 h-5 w-full rounded bg-gray-200" />
            <div className="mb-4 h-5 w-4/5 rounded bg-gray-200" />
            <div className="h-10 w-full rounded-[10px] bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSkeleton;