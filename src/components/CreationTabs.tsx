import { Box, Image, Shirt } from "lucide-react";

export const CreationTabs = () => {
  return (
    <div className="flex space-x-6 mt-2">
      <button className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 transition-colors">
        <Box className="w-4 h-4 opacity-80" />
        <span className="text-sm font-medium">3D prints</span>
      </button>
      <button className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-transparent text-white/40 hover:bg-white/5 transition-colors">
        <Image className="w-4 h-4" />
        <span className="text-sm">Paintings</span>
      </button>
      <button className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-transparent text-white/40 hover:bg-white/5 transition-colors">
        <Shirt className="w-4 h-4" />
        <span className="text-sm">Painted clothes</span>
      </button>
    </div>
  );
};