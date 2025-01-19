import { Box, Image, Shirt } from "lucide-react";

export const CreationTabs = () => {
  return (
    <div className="flex items-center space-x-4 mt-2">
      <button className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-transparent text-white group">
        <Box className="w-5 h-5" />
        <span className="text-[15px] font-normal">3D prints</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-transparent text-white/60 group hover:text-white/80 transition-colors">
        <Image className="w-5 h-5 opacity-60 group-hover:opacity-80" />
        <span className="text-[15px] font-normal">Paintings</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-transparent text-white/60 group hover:text-white/80 transition-colors">
        <Shirt className="w-5 h-5 opacity-60 group-hover:opacity-80" />
        <span className="text-[15px] font-normal">Painted clothes</span>
      </button>
    </div>
  );
};