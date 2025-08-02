import Link from "next/link";

const ProgramCard = ({ title, subtitle, type, status }) => {
  return (
    <div className="bg-[#e8e3d3] rounded-md overflow-hidden shadow-sm">
      {/* Empty space for image */}
      <div className="h-40 w-full relative bg-[#e8e3d3]">
        {/* Small icon in top left */}
        <div className="absolute top-2 left-2 flex items-center">
          <span className="text-black text-xs mr-1">🏢</span>
          <span className="text-black text-xs">CyberNeoGen</span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h2 className="text-lg font-semibold text-black">Program Name</h2>
          <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-md font-medium">
            {status[0]}
          </span>
        </div>

        <p className="text-sm text-gray-700 mb-3">{`${title}: ${subtitle}`}</p>

        <Link href={`/program/${subtitle}`}>
          <span className="text-blue-500 text-sm font-medium hover:text-blue-600 cursor-pointer">
            View Program
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
