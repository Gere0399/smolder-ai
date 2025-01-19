import { Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CreationCardProps {
  index: number;
}

export const CreationCard = ({ index }: CreationCardProps) => {
  const handleSeeDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Link to="/product">
      <Card className="bg-[#13111C] border-smolder-border overflow-hidden w-[360px] flex-shrink-0 cursor-pointer">
        <div className="py-3 flex items-center justify-center space-x-2">
          <Box className="text-[#C6B47F]" size={16} />
          <span className="text-[#C6B47F] text-base">concept</span>
        </div>
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] bg-white">
            <img
              src="/placeholder.svg"
              alt="Concept preview"
              className="w-full h-full object-cover"
            />
            <Link 
              to="/product"
              className="absolute bottom-3 right-4 px-4 py-1.5 text-sm bg-black/40 text-white rounded-md backdrop-blur-sm hover:bg-black/50 transition-colors"
              onClick={handleSeeDetails}
            >
              See details
            </Link>
          </div>
          <div className="p-4 pt-4 pb-5">
            <div className="max-h-24 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted hover:scrollbar-thumb-smolder-accent/50">
              <p className="text-sm text-smolder-text">
                This is a prompt sample which created the starting image concept, lorem ipsum ipsum lorem. This text can now scroll if it gets too long and extends beyond the visible area.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};