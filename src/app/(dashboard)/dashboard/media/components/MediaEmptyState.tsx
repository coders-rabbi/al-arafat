import { ImageOff, Upload } from "lucide-react";

type Props = {
  hasMedia: boolean; // media ache kintu filter/search e kichu paoa jayni
  onUpload: () => void;
};

const MediaEmptyState = ({ hasMedia, onUpload }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white py-16 text-center">
      <ImageOff className="mb-3 h-12 w-12 text-gray-300" />
      <p className="font-medium text-gray-700">
        {hasMedia ? "Kono file paoa jayni" : "Kono media nei"}
      </p>
      <p className="mt-1 text-sm text-gray-500">
        {hasMedia
          ? "Search ba filter change kore dekho"
          : "Prothom file upload korun"}
      </p>
      {!hasMedia && (
        <button
          onClick={onUpload}
          className="mt-4 flex items-center gap-2 rounded-lg bg-[#008e48] px-4 py-2 text-sm font-medium text-white hover:bg-[#007a3e]"
        >
          <Upload className="h-4 w-4" /> Upload Media
        </button>
      )}
    </div>
  );
};

export default MediaEmptyState;
