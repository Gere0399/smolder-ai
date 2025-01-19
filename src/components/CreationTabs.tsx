import { Cube, Image, Shirt } from "lucide-react";

export const CreationTabs = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-smolder-muted text-smolder-text hover:bg-smolder-muted/80 transition-colors">
        <Cube className="w-5 h-5" />
        <span>3D prints</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-transparent text-smolder-text hover:bg-smolder-muted/80 transition-colors">
        <Image className="w-5 h-5" />
        <span>Paintings</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-transparent text-smolder-text hover:bg-smolder-muted/80 transition-colors">
        <Shirt className="w-5 h-5" />
        <span>Painted clothes</span>
      </button>
    </div>
  );
};