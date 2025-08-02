import { ExternalLink } from "lucide-react";


export default function ProgramCard({ title, url, description }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded p-4 w-[300px]">
      <div className="relative flex justify-center">
        <div className="absolute -top-12 w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center border-4 border-[#111]">
          <div className="bg-white p-3 rounded-full">
            <img src="/heart.png" alt="icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="pt-12 text-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <a href={url} target="_blank" rel="noreferrer" className="text-green-500 text-sm inline-flex items-center gap-1">
          {url}
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-sm mt-2">{description}</p>
        <button className="mt-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
          View Dashboard
        </button>
      </div>
    </div>
  );
}
