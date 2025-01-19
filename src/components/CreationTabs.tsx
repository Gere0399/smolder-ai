import { Box, Image, Shirt } from "lucide-react";

export const CreationTabs = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
        <Box className="w-5 h-5" />
        <span>3D prints</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-transparent text-smolder-text hover:bg-white/10 transition-colors">
        <Image className="w-5 h-5" />
        <span>Paintings</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-transparent text-smolder-text hover:bg-white/10 transition-colors">
        <Shirt className="w-5 h-5" />
        <span>Painted clothes</span>
      </button>
    </div>
  );
};