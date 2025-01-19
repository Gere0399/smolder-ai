import { Box, Image, Shirt } from "lucide-react";

export const CreationTabs = () => {
  return (
    <div className="flex items-center space-x-6 mt-2">
      <button className="flex items-center space-x-2.5 px-4 py-2 rounded-lg text-white group">
        <Box className="w-5 h-5" />
        <span className="text-[14px] font-normal">3D prints</span>
      </button>
      <button className="flex items-center space-x-2.5 px-4 py-2 rounded-lg text-white/40 group hover:text-white/60 transition-colors">
        <Image className="w-5 h-5 opacity-40 group-hover:opacity-60" />
        <span className="text-[14px] font-normal">Paintings</span>
      </button>
      <button className="flex items-center space-x-2.5 px-4 py-2 rounded-lg text-white/40 group hover:text-white/60 transition-colors">
        <Shirt className="w-5 h-5 opacity-40 group-hover:opacity-60" />
        <span className="text-[14px] font-normal">Painted clothes</span>
      </button>
    </div>
  );
};